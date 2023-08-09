import { useState, useEffect } from "react";
import { Grid, BreadcrumbItem, BreadcrumbLink, Flex } from "@chakra-ui/react";
import { NextSeo } from 'next-seo';
import { generateSeoConfig } from "../../seo/seoConfig";
import { BreadCrumb } from "@/ui";
import { PostBody, PostInfo, PostContentTable } from "@/post";
import { PostComments } from "@/comments";


// Plantilla de cada uno de los posts
export const PostLayout = ( { props } ) => {
    const { category , slug, title, metaDescription, thumbnail } = props;
    const [ postUrl, setPostUrl ] = useState('');

    useEffect(() => {
        setPostUrl(window.location.href);
    }, [ slug ])

    // Configuración de los metatags de Open Graph para esta página
    const seoConfig = generateSeoConfig( title, metaDescription, thumbnail, postUrl );

    return (
        <Flex direction={"column"} padding="2rem">
            <NextSeo {...seoConfig} />
            
            <BreadCrumb>
                <BreadcrumbItem color="brand.tertiary">
                    <BreadcrumbLink href={`/blog/category/${ category.slug }`}>{ category.name }</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadCrumb>   

            <Grid
                templateAreas={`"postInfo postInfo"
                    "postBody  postContentTable"`
                }
                gridTemplateColumns={"1fr .4fr"}

                gap={"2rem"}
            >   
                {/* Información del post */}
                <PostInfo { ...props } />    
                
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
