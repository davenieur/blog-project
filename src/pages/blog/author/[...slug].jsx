import { PostsLayout } from "@/layouts";
import { getPostsSlugs, getPost } from "../../../contentful/querys";

/* blog/author/[...slug] */

export default function(props){
    return (
        // Uso de la plantilla de cada post
        <PostsLayout props={ props } /> 
    )  
}

export async function getStaticPaths(){
    const posts = await  getPostsSlugs();

    const pathES = posts.map(( item ) => ({
            params: {
                slug: [item.slugES]
            },
            locale: 'es'
        })
    )

    const pathEN = posts.map(( item ) => ({
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
    const data = await getPost(locale, altLocale, pageSlug);

    return {
      props: {
        ...data, 
        locales,
        locale,
        altLocale,
        slug: pageSlug,
      }
    }
  }