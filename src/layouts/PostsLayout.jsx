import { Grid, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { BreadCrumb } from "@/ui";
import { PostsGrid } from "@/posts";
import { CategoriesGrid } from "@/categories";

// Plantilla del despliegue de los posts
export const PostsLayout = ( { children, props } ) => {
    const { name } = props;

    return (
        <Grid
            gridTemplateColumns={"3fr 1fr"}  
            gridTemplateRows={"10% 90%"}
            templateAreas={`"breadcrumb categories"
                "posts categories"`}
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
