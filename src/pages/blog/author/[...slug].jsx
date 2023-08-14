import { useState, useEffect } from "react";
import { GridItem, Text } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import { AuthorLayout, PostsLayout } from "@/layouts";
import { PostsGrid } from "@/posts";
import { getAuthorBySlug, getAuthorsSlugs, getPostsByAuthor } from "../../../../contentful/querys";
import { AuthorInfo } from "@/author";

/* blog/author/[...slug] */

export default function(props){
    const  { slug, locale, altLocale, limit } = props;

    const router = useRouter()
    
    if (router.isFallback) {
        return <div>Loading...</div>
    } else{
        return (
            <AuthorLayout props={ props } >
                <GridItem area={"posts"}>
                    <PostsGrid 
                        slug = { slug } 
                        limit = { limit } 
                        locale={ locale } 
                        altLocale = { altLocale } 
                        queryFunction = { getPostsByAuthor }
                        parameter = 'author'
                    />
                </GridItem>
            </AuthorLayout>
        )  
    }
}

export async function getStaticPaths(){
    const authors = await getAuthorsSlugs();

    const pathES = authors.map(( item ) => ({
            params: {
                slug: [item.slug]
            },
            locale: 'es'
        })
    )

    const pathEN = authors.map(( item ) => ({
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

// Enviamos los datos del author seleccionada usando el query getAuthor
export async function getStaticProps(props){
    const { params: { slug }, locale, locales } = props || {};    
    const pageSlug = slug.join("/");
    const [ altLocale ] = locales.filter(language => language !== locale);

    // Obtenemos el autor a través de su slug
    const author = await getAuthorBySlug(pageSlug, locale, altLocale);

    // Limite de posts por página
    const limit = 9;

    return {
      props: {
        locales,
        locale,
        altLocale,
        slug: pageSlug,
        limit,
        ...author
      }
    }
  }

