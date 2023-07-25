import getT from 'next-translate/getT'
import { Grid, Text, propNames } from '@chakra-ui/react'
import { PostsGrid } from "@/posts";
import { getCategories } from "../../../../contentful/querys";

export default function(props){
    const { slug, name } = props;
   
    return (
       
        <Grid
        >
          {/* <Text fontSize='3xl' mb={"1rem"}>
            Blog &gt; { name }
          </Text>
          <PostsGrid {...props}/> */}
        </Grid>
          

     
    )
}

export async function getStaticPaths(props){
    const { locale, altLocale } = props || {};
    console.log("staticPaths", props)

    // const categories = await getCategories(locale, altLocale);
    // console.log(categories)
    
    // const isSpanishLocale = locale === 'es';

    // const paths = categories.map((item) => ({
    //     params: {
    //         slug: [isSpanishLocale ? item.slug : item.altSlug],
    //     },
    //     locale: isSpanishLocale ? 'es' : 'en-US',
    // }));
    
    return {
        paths: [],
        fallback:false
    }
}   

export async function getStaticProps(props){
    const { params: { slug }, locale, locales } = props || {};
   
    const [ altLocale ] = locales.filter(lang => lang !== locale);
   
    // Es necesario obtener los slugs de las categorias
    const data = await getCategories(locale, altLocale );
    console.log("data", data);
    
    // // Función que nos apoyará a buscar el slug en español y en inglés
    // const findBySlug = (slug) => data?.find(item => item.slugES === slug || item.slugEN === slug);
    
    // // Slug y nombre en ambos idiomas
    // const { slugEN, slugES, nameES, nameEN } = findBySlug(slug[0]) || {};

    // // Para mostrar el slug en el otro idioma
    // let t = await getT(altLocale, 'category');
    // const altSlug = t('slug', { slug, altSlug })

    // // Para mostrar el titulo en el idioma establecido (local)
    // t = await getT(locale, 'category');
    // const name = t('name', { name, altName });

    return {
        props: {
            ...props,
            altLocale
        }
    }
}