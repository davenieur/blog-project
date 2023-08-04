import { GridItem } from "@chakra-ui/react";
import { PostsLayout } from "@/layouts";
import { getCategories, getCategory } from "../../../../contentful/querys";
import { PostsGrid } from "@/posts";

/* blog/category/[...slug] */

export default function(props){
    return (
        <PostsLayout props={ props }> 
            <GridItem area={"posts"}>
                <PostsGrid 
                    props={ ...props}
                />
            </GridItem>
        </PostsLayout> 
    )  
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
        fallback:false
    }
}   

// Enviamos los datos de la categoría seleccionada usando el query getCategory
export async function getStaticProps(props){
    const { params: { slug }, locale, locales } = props || {};    
    const pageSlug = slug.join("/");
    const [ altLocale ] = locales.filter(language => language !== locale);
    const { name, altSlug } = await getCategory(pageSlug, locale, altLocale );
    const limit = 9;

    return {
      props: {
        locales,
        locale,
        altLocale,
        slug: pageSlug,
        altSlug,
        name,
        limit
      }
    }
  }