import getT from 'next-translate/getT'
import { Flex, Grid, Text, GridItem } from '@chakra-ui/react'
import { PostsGrid } from "@/posts";
import { CategoriesGrid } from '@/categories/CategoriesGrid';
import { getCategories, getCategory } from "../../../../contentful/querys";
import Link from 'next/link';
import { PostsLayout } from '@/layouts';

/* blog/category/[...slug] */

export default function(props){
    return (
        <PostsLayout props={ props }> 
            <PostsGrid {...props} /> 
            <CategoriesGrid { ...props } />
        </PostsLayout>    
    )  
}

export async function getStaticPaths(){
    const categories = await getCategories();

    const pathES = categories.map(( item ) => ({
            params: {
                slug: [item.slugES]
            },
            locale: 'es'
        })
    )

    const pathEN = categories.map(( item ) => ({
            params: {
                slug: [item.slugEN]
            },
            locale: 'en-US'
        })
    )
        
    const allPaths = [ ...pathEN, ...pathES ];

    return {
        paths: allPaths,
        fallback:false
    }
}   


export async function getStaticProps(props){
    const { params: { slug }, locale, locales } = props || {};    
    const pageSlug = slug.join("/");
    const [ altLocale ] = locales.filter(language => language !== locale);

    const { name, altSlug } = await getCategory( locale, altLocale, pageSlug );

  
    return {
      props: {
        locales,
        locale,
        altLocale,
        slug: pageSlug,
        altSlug,
        name,
      }
    }
  }