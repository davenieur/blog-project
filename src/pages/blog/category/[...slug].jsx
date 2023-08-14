import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { GridItem } from "@chakra-ui/react";
import { PostsLayout } from "@/layouts";
import { getCategories, getCategoryBySlug, getPostsByCategory } from "../../../../contentful/querys";
import { PostsGrid } from "@/posts";


/* blog/category/[...slug] */

export default function(props){
    const  { slug, locale, altLocale, limit } = props;
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>
    } else{
        return (
            <PostsLayout props={ props }> 
                <GridItem area={"posts"}>
                    <PostsGrid 
                        slug = { slug } 
                        limit = { limit } 
                        locale={ locale } 
                        altLocale = { altLocale } 
                        queryFunction = { getPostsByCategory }
                        parameter = 'category'
                    />
                </GridItem>
            </PostsLayout> 
        )  
    }
}

export async function getStaticPaths(){
    const categories = await getCategories();

    const pathES = categories.map(( item ) => ({
            params: {
                slug: [item.slug]
            },
            locale: 'es'
        })
    )

    const pathEN = categories.map(( item ) => ({
            params: {
                slug: [item.altSlug]
            },
            locale: 'en-US'
        })
    )
        
    const allPaths = [ ...pathEN, ...pathES ];

    return {
        paths: allPaths,
        fallback:true
    }
}   

// Enviamos los datos de la categoría seleccionada usando el query getCategory
export async function getStaticProps(props){
    const { params: { slug }, locale, locales } = props || {};    
    const pageSlug = slug.join("/");
    const [ altLocale ] = locales.filter(language => language !== locale);

    // Obtenemos la categoría a través de su slug
    const category = await getCategoryBySlug(pageSlug, locale, altLocale);

    // Limite de posts por página
    const limit = 9;

    return {
      props: {
        locales,
        locale,
        altLocale,
        slug: pageSlug,
        limit,
        ...category
      }
    }
  }

