import { useState, useEffect } from "react";
import { GridItem, Text } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import { AuthorLayout, PostsLayout } from "@/layouts";
import { PostsGrid } from "@/posts";
import { getAuthorBySlug, getAuthorsSlugs, getPostsByAuthor } from "../../../../contentful/querys";
import { AuthorInfo } from "@/author";

/* blog/author/[...slug] */

export default function(props){
    const  { slug, locale, altLocale, showWrap, limit } = props;


    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        const fetchPostsByAuthor = async () => {
            // Realizar la solicitud GET de posts por autor
            const posts = await getPostsByAuthor(slug, 0, locale, altLocale);

            // Obtenemos los posts por autor
            setPosts(posts);
        }
        fetchPostsByAuthor();
        // TODO: Mejorar que no se actualicé cada vez que se cambie el locale, utilizar next-translate
    }, [ locale ]);

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
                        showWrap = { showWrap }
                        filteredPosts = { posts }
                        totalPages = { Math.ceil(posts.length / limit) }
                        queryFunction = { getPostsByAuthor }
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

    // Mostrar los posts en forma de catalogo
    const  showWrap = true;

    return {
      props: {
        locales,
        locale,
        altLocale,
        slug: pageSlug,
        limit,
        showWrap,
        ...author
      }
    }
  }

