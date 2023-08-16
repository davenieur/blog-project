import { Grid, BreadcrumbItem, BreadcrumbLink, useBreakpointValue  } from "@chakra-ui/react"
import { CategoriesGrid } from "@/categories";
import { AuthorInfo } from "@/author";
import { PostsLayout } from "./PostsLayout";
import { BreadCrumb } from "@/ui";


// Plantilla del despliegue del perfil de cada autor
export const AuthorLayout = ( { children, props } ) => {
    const { fullName, locale } = props;

    const gridTemplateAreas = useBreakpointValue({
        base: `
            "categories"
            "breadcrumb"
            "authorInfo"
            "posts"
        `,
        md: `
            "categories"
            "breadcrumb"
            "authorInfo"
            "posts"
        `,
        lg: `
            "categories"
            "breadcrumb"
            "authorInfo"
            "posts"
        `,
        xl: `
            "breadcrumb categories" 
            "authorInfo categories"
            "posts categories"
        `
    });
    
    const gridTemplateColumns = useBreakpointValue({ base: "100%", md: "100%", lg: "100%", xl: "1fr .20fr"})

    return (
        <Grid
            gridTemplateColumns={ gridTemplateColumns }

            templateAreas={ gridTemplateAreas}
            gap="2rem"
            padding="2rem"
        >
           
            {/* BREADCRUMB */}
            <BreadCrumb props={ locale }>
                { fullName ? ( 
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href={`#`}>{ fullName }</BreadcrumbLink>
                    </BreadcrumbItem>
                ) : null } 
            
            </BreadCrumb>


            {/* AUTHOR INFO */}
            <AuthorInfo { ...props }/>

            { children }

            {/* CATEGORIES */}
            <CategoriesGrid {...props} />
            
                    
        </Grid>
    )
}
