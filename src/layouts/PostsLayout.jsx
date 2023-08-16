import { Grid, BreadcrumbItem, BreadcrumbLink, useBreakpointValue } from "@chakra-ui/react"
import { BreadCrumb } from "@/ui";
import { CategoriesGrid } from "@/categories";

// Plantilla del despliegue de los posts
export const PostsLayout = ( { children, props } ) => {
    const { name, locale } = props;

    const gridTemplateAreas = useBreakpointValue({
        base: `
            "categories"
            "breadcrumb"
            "posts"
        `,
        md: `
            "categories"
            "breadcrumb"
            "posts"
        `,
        lg: `
            "categories"
            "breadcrumb"
            "posts"
        `,
        xl: `
            "breadcrumb categories" 
            "posts categories"
        `
    });

    const gridTemplateColumns = useBreakpointValue({ base: "100%", md: "100%", lg: "100%", xl: "1fr .25fr"})

    return (
        <Grid
            gridTemplateColumns= { gridTemplateColumns }
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
