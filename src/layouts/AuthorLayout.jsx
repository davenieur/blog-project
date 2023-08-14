import { Grid, BreadcrumbItem, BreadcrumbLink  } from "@chakra-ui/react"
import { CategoriesGrid } from "@/categories";
import { AuthorInfo } from "@/author";
import { PostsLayout } from "./PostsLayout";
import { BreadCrumb } from "@/ui";


// Plantilla del despliegue del perfil de cada autor
export const AuthorLayout = ( { children, props } ) => {
    const { fullName, locale } = props;

    return (
        <Grid
            gridTemplateColumns={"80% 20%"}  
            gridTemplateRows={"10% 90%"}
            templateAreas={`"breadcrumb categories"
                "authorInfo categories"
                "posts categories"`}
            gap={"2rem"}
            
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
