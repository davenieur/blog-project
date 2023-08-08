import useTranslation from "next-translate/useTranslation";
import { Grid, BreadcrumbItem, BreadcrumbLink, Flex } from "@chakra-ui/react";
import { BreadCrumb } from "@/ui";
import { PostBody, PostInfo, PostContentTable } from "@/post";
import { PostComments } from "@/comments";
 

// Plantilla de cada uno de los posts
export const PostLayout = ( { props } ) => {
    const { category: { slug, name } } = props;
    return (
        <Flex direction={"column"} padding="2rem">
       
            <BreadCrumb>
                <BreadcrumbItem color="brand.tertiary">
                    <BreadcrumbLink href={`/blog/category/${ slug }`}>{ name }</BreadcrumbLink>
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
