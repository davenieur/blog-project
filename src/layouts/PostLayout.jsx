import { useState, useEffect } from "react";
import { Grid, BreadcrumbItem, BreadcrumbLink, Flex } from "@chakra-ui/react";
import { NextSeo } from 'next-seo';
import { generateSeoConfig } from "../../seo/seoConfig";
import { BreadCrumb } from "@/ui";
import { PostBody, PostInfo, PostContentTable } from "@/post";
import { PostComments } from "@/comments";
import Link from "next/link";

// Plantilla de cada uno de los posts
export const PostLayout = ( { props } ) => {
    const { slug, category, title, metaDescription, thumbnail, locale } = props || {};
    const [ seoConfig, setSeoConfig ] = useState({});
    const [ postUrl, setPostUrl ] = useState('');

    useEffect(() => {
        // Obtenemos el url del sitio web
        const url = window.location.href;
        setPostUrl(url);

        // Configuración de los metatags de Open Graph para esta página
        const seoConfig = generateSeoConfig( title, metaDescription, thumbnail, url );
        setSeoConfig(seoConfig)

    }, [ slug ]);

    return (
        <Flex direction={"column"} gap="2rem 0">

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
                templateAreas={`"postInfo postInfo"
                    "postBody  postContentTable"`
                }
                gridTemplateColumns={"1fr .4fr"}
              
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
