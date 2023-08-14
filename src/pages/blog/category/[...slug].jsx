import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { GridItem } from "@chakra-ui/react";
import { PostsLayout } from "@/layouts";
import { getCategories, getCategoryBySlug, getPostsByCategory } from "../../../../contentful/querys";
import { PostsGrid } from "@/posts";


/* blog/category/[...slug] */

export default function(props){
    const  { slug, locale, altLocale, showWrap, limit } = props;
    const router = useRouter();

    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        const fetchPostsByCategory = async () => {
            // Realizar la solicitud GET de posts por categoría
            const posts = await getPostsByCategory(slug, 0, locale, altLocale);
            // Obtenemos los posts por categoría
            setPosts(posts);
        }
        fetchPostsByCategory();
        // TODO: Mejorar que no se actualicé cada vez que se cambie el locale, utilizar next-translate
    }, [ locale ]);


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
                        showWrap = { showWrap }
                        filteredPosts = { posts }
                        totalPages = { Math.ceil(posts.length / limit) }
                        queryFunction = { getPostsByCategory }
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

    // Indicamos que se van a desplegar todos los posts en forma de catalogo
    const  showWrap = true;

    return {
      props: {
        locales,
        locale,
        altLocale,
        slug: pageSlug,
        limit,
        showWrap,
        ...category
      }
    }
  }

