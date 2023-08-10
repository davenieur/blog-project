import { Grid, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { BreadCrumb } from "@/ui";
import { CategoriesGrid } from "@/categories";
import PropTypes from 'prop-types';


// Plantilla del despliegue de los posts
export const PostsLayout = ( { children, props } ) => {
    const { name, locale } = props;

    return (
        <Grid
            gridTemplateColumns={"3fr .6fr"}  
            gridTemplateRows={"10% 90%"}
            templateAreas={`"breadcrumb categories"
                "posts categories"`}
            gap={"2rem"}
        >   
       
            {/* BREADCRUMB */}
            <BreadCrumb props={ locale }>
                { name ? ( 

                    <BreadcrumbItem isCurrentPage color="brand.secondary">
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

PostsLayout.propTypes = {
    name: PropTypes.string, 
    locale: PropTypes.string.isRequired, 
}
