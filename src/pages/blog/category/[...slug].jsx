import { PostsLayout } from "@/layouts";
import { getCategories, getCategory } from "../../../../contentful/querys";
import { PostsGrid } from "@/posts";

/* blog/[...slug] */

export default function(props){
    // Desplegamos los posts sin el divider y con un limite de 9 posts por página
    return (
        <PostsLayout props={ props }> 
            <PostsGrid 
                props={ ...props}
            />
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