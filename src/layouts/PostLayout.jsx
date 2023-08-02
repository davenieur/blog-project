import useTranslation from "next-translate/useTranslation";
import { Grid, BreadcrumbItem, BreadcrumbLink, Heading, Flex } from "@chakra-ui/react";
import { BreadCrumb } from "@/ui";
import { PostInfo } from "@/post";
import { PostComments } from "@/comments/PostComments";

// Plantilla de cada uno de los posts
export const PostLayout = ( { props } ) => {
    const { category: { slug, name } } = props;

    

    return (
        <Flex direction={"column"}>
       
            <BreadCrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/blog/category/${ slug }`}>{ name }</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadCrumb>   

            <Grid
                templateAreas={`"postInfo postInfo"
                    "postBody  postContentTable"`
                }
            >   
                <PostInfo { ...props } />    
                
                {/* <PostComments { ...props } /> */}
            </Grid>

        </Flex>
           
    )
}
