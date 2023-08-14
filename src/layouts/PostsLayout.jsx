import { Grid, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { BreadCrumb } from "@/ui";
import { CategoriesGrid } from "@/categories";

// Plantilla del despliegue de los posts
export const PostsLayout = ( { children, props } ) => {
    const { name, locale } = props;

    return (
        <Grid
            gridTemplateColumns={"80% 20%"}  
            gridTemplateRows={"10% 90%"}
            templateAreas={`"breadcrumb categories" 
                "categoryInfo categories" 
                "posts categories"`}
            gap={"2rem"}  
            padding="2rem"  
        >   

            {/* BREADCRUMB */}
            <BreadCrumb props={ locale }>
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
