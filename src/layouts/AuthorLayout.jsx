import { Grid, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { BreadCrumb } from "@/ui";
import { CategoriesGrid } from "@/categories";

// Plantilla del despliegue del perfil de cada autor
export const AuthorLayout = ( { children, props } ) => {
    const { name, locale } = props;

    return (
        <Grid
            gridTemplateColumns={"80% 20%"}  
            gridTemplateRows={"10% 90%"}
            templateAreas={`"authorInfo authorInfo"
                "posts categories"`}
            gap={"2rem"}
            
        >   
       


            { children }
            
            {/* CATEGORIES */}
            <CategoriesGrid { ...props } />

           
        </Grid>
    )
}
