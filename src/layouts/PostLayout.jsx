import useTranslation from "next-translate/useTranslation";
import { Grid, BreadcrumbItem, BreadcrumbLink, Heading, Flex } from "@chakra-ui/react";
import { BreadCrumb } from "@/ui";
import { PostInfo } from "@/post";
import { PostComments } from "@/comments/PostComments";

// Plantilla de cada uno de los posts
export const PostLayout = ( { props } ) => {
    const { category } = props;

    // Usamos Next Translate para traducir el nombre de las categorias y su slug
    const { slug, altSlug, name, altName } = category;
    const { t } = useTranslation('category');
    
    const categorySlug = t('slug', { slugES: slug , slugEN: altSlug });
    const categoryName = t('name', { nameES: name , nameEN: altName });

    return (
        <Flex direction={"column"}>
       
            <BreadCrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/blog/category/${ categorySlug }`}>{ categoryName }</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadCrumb>   

            <Grid
                templateAreas={`"postInfo postInfo"
                    "postBody  postContentTable"`
                }
            >   
                <PostInfo { ...props } />    
                
                <PostComments { ...props } />
            </Grid>

        </Flex>
           
    )
}
