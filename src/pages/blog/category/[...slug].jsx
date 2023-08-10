import { GridItem } from "@chakra-ui/react";
import { PostsLayout } from "@/layouts";
import { getCategories, getCategoryBySlug } from "../../../../contentful/querys";
import { PostsGrid } from "@/posts";
import { useGetPostsByCategory } from "@/hooks";

/* blog/category/[...slug] */

export default function(props){
    const  { slug, locale, altLocale, showWrap } = props;


    return (
        <PostsLayout props={ props }> 
            <GridItem area={"posts"}>
                <PostsGrid slug = { slug } limit = { 15 } locale={ locale } altLocale = { altLocale } showWrap = { showWrap }/>
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

    // Obtenemos la categoría a través de su slug
    const { name, altSlug } = await getCategoryBySlug(pageSlug, locale, altLocale );

    // Limite de posts por página
    const limit = 9;

    const  showWrap = true;

    return {
      props: {
        locales,
        locale,
        altLocale,
        slug: pageSlug,
        altSlug,
        name,
        limit,
        showWrap
      }
    }
  }