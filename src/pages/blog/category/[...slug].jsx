import { getCategoriesSlugs } from "../../../../contentful/querys";
import { PostsGrid } from "@/posts";

export default function(props){
    return (
        <main>
           <h1>hola</h1>
           {/* <PostsGrid {...props}/> */}

        </main> 
    )
}

export async function getStaticPaths(){
    const categoriesSlugs = await getCategoriesSlugs();

    const pathES = categoriesSlugs.map(( item ) => ({
            params: {
                slug: [item.slugES]
            },
            locale: 'es'
        })
    )

    const pathEN = categoriesSlugs.map(( item ) => ({
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
    const { params: { slug }, locale, locales } = props;
    console.log("getStaticProps categories", props);
    const pageSlug = slug.join("/");
    console.log("pageSlug", pageSlug)

    return {
        props: {
        
            slug: pageSlug,
            locale,
            locales,

        }
    }
}