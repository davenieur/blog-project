import { Grid, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { BreadCrumb } from "@/ui";
import { CategoriesGrid } from "@/categories";

// Plantilla del despliegue de los posts
export const PostsLayout = ( { children, props } ) => {
    const { name, locale } = props;

    return (
        <Grid
            gridTemplateColumns={"85% 15%"}  
            gridTemplateRows={"10% 90%"}
            templateAreas={`"breadcrumb categories"
                "posts categories"`}
            gap={"2rem"}
        >   
       
            {/* BREADCRUMB */}
            <BreadCrumb props={ locale }>
                { name ? ( 

                    <BreadcrumbItem isCurrentPage color="brand.secondary" >
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
