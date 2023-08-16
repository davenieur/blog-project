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
            "categories categories"
            "breadcrumb breadcrumb"
            "authorInfo authorInfo"
            "posts posts"
        `,
        md: `
            "categories categories"
            "breadcrumb breadcrumb"
            "authorInfo authorInfo"
            "posts posts"
        `,
        lg: `
            "categories categories"
            "breadcrumb breadcrumb"
            "authorInfo authorInfo"
            "posts posts"
        `,
        xl: `
            "breadcrumb categories" 
            "authorInfo categories"
            "posts categories"
        `
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
