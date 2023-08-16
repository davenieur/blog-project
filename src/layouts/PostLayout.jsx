import { useState, useEffect } from "react";
import { Grid, BreadcrumbItem, BreadcrumbLink, Flex, useBreakpointValue } from "@chakra-ui/react";
import { NextSeo } from 'next-seo';
import { generateSeoConfig } from "../../seo/generateSeoConfig";
import { BreadCrumb } from "@/ui";
import { PostBody, PostInfo, PostContentTable } from "@/post";
import { PostComments } from "@/comments";
import Link from "next/link";

// Plantilla de cada uno de los posts
export const PostLayout = ( { props } ) => {
    const { slug, category, title, metaDescription, thumbnail, locale, author } = props || {};
    const [ seoConfig, setSeoConfig ] = useState({});
    const [ postUrl, setPostUrl ] = useState('');

    const gridTemplateAreas = useBreakpointValue({
        base: `
            "postInfo"
            "postContentTable"
            "postBody"
            "postComments"
        `,
        md: `
            "postInfo"
            "postContentTable"
            "postBody"
            "postComments"
        `,
        lg: `
            "postInfo"
            "postContentTable"
            "postBody"
            "postComments"
        `,
        xl: `
            "postInfo postInfo"
            "postBody postContentTable"
            "postBody  postContentTable"
            "postComments postComments"
        `,
    });

    const gridTemplateColumns = useBreakpointValue({ base: "100%", md: "100%", lg: "100%", xl: "1fr .25fr"})


    useEffect(() => {
        // Obtenemos el url del sitio web
        const url = window.location.href;
        setPostUrl(url);

        // Configuración de los metatags de Open Graph para esta página
        const seoConfig = generateSeoConfig( title, metaDescription, thumbnail, url, author );
        setSeoConfig(seoConfig)

    }, [ slug ]);

    return (
        <Flex direction={"column"} padding="2rem" margin="4rem" gap="2rem">

            {/* Configuramos los metatags del post */}
            <NextSeo {...seoConfig} />
            
            {/* BreadCrumb */}
            <BreadCrumb props = { locale }>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link}  href={`/blog/category/${ category.slug }`} locale={ locale }>{ category.name }</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadCrumb>   

            {/* Mostramos los detalles del post */}
            <Grid
                templateAreas={ gridTemplateAreas }
                gridTemplateColumns={ gridTemplateColumns }
                gap="2rem"
            >   
                {/* Información del post */}
                <PostInfo 
                    { ...props }
                    postUrl = { postUrl }
                />    
                
                {/*  Cuerpo del post */}
                <PostBody { ...props } />

                {/* Tabla de contenidos del post */}
                <PostContentTable { ...props } />   

                {/* Comentarios del post */}
                <PostComments { ...props } />
            </Grid>

        </Flex>
           
    )
}
