import { Grid, BreadcrumbItem, BreadcrumbLink, GridItem } from "@chakra-ui/react"
import { BreadCrumb } from "@/ui";
import { PostsGrid } from "@/posts";
import { CategoriesGrid } from "@/categories";

// Plantilla del despliegue de los posts
export const PostsLayout = ( { children, props } ) => {
    const { name } = props;

    return (
        <Grid
            gridTemplateColumns={"3fr .75fr"}  
            gridTemplateRows={"10% 90%"}
            templateAreas={`"breadcrumb categories"
                "posts categories"`}
            gap={"2rem"}
        >   
       
            {/* BREADCRUMB */}
            <BreadCrumb>
                { name ? ( 

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href={`#`}>{ name }</BreadcrumbLink>
                    </BreadcrumbItem>
                ) : null } 
            
            </BreadCrumb>

            { children }
            
            {/* CATEGORIES */}
            <CategoriesGrid { ...props } />

           
        </Grid>
    )
}
