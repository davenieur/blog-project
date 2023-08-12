import { PostLayout } from "@/layouts";
import { getPostBody, getPostBySlug, getPostsSlugs } from "../../../contentful/querys";
import { useRouter } from 'next/router'

/* blog/[...slug] */

export default function(props){
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>
    } else{
        return (
            // Uso de la plantilla de cada post
            <PostLayout props={ ...props } /> 
        )  
    }

    
}

export async function getStaticPaths(){
    const posts = await getPostsSlugs();

    const pathES = posts.map(( item ) => ({
            params: {
                slug: [item.slug]
            },
            locale: 'es'
        })
    )

    const pathEN = posts.map(( item ) => ({
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

// Enviamos los datos del post seleccionado usando el query getCategory
export async function getStaticProps(props){
    const { params: { slug }, locale, locales } = props || {};    
    const pageSlug = slug.join("/");
    const [ altLocale ] = locales.filter(language => language !== locale);

    // Obtenemos el post a través de su slug
    const data = await getPostBySlug(pageSlug, locale, altLocale);

    const body = await getPostBody(pageSlug, locale);
 
    return {
      props: {
        locales,
        locale,
        altLocale,
        slug: pageSlug,
        body,
        ...data
      }
    }
  }