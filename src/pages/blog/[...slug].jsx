import { PostLayout } from "@/layouts";
import { getPosts, getPost } from "../../../contentful/querys";

/* blog/[...slug] */

export default function(props){
    return (
        <PostLayout props={ props } /> 
    )  
}

export async function getStaticPaths(){
    const posts = await getPosts();

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
    const data = await getPost(pageSlug);
    
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