import { Grid, BreadcrumbItem, BreadcrumbLink, useBreakpointValue } from "@chakra-ui/react"
import { BreadCrumb } from "@/ui";
import { CategoriesGrid } from "@/categories";

// Plantilla del despliegue de los posts
export const PostsLayout = ( { children, props } ) => {
    const { name, locale } = props;

    const gridTemplateAreas = useBreakpointValue({
        base: `
            "categories categories"
            "breadcrumb breadcrumb"
            "posts posts"
        `,
        md: `
            "breadcrumb categories" 
            "posts categories"
           
        `,
    });


    return (
        <Grid
            gridTemplateColumns="80% 20%" 
            margin="4rem"
            templateAreas={ gridTemplateAreas}
            gap="2rem"
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
