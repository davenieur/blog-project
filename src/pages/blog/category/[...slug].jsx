import { PostsLayout } from "@/layouts";
import { getCategories, getCategory } from "../../../../contentful/querys";

/* blog/[...slug] */

export default function(props){
    return (
        <PostsLayout props={ props } /> 
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