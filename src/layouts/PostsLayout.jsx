import { Grid, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { BreadCrumb } from "@/ui";
import { PostsGrid } from "@/posts";
import { CategoriesGrid } from "@/categories";

export const PostsLayout = ( { props } ) => {
    const { name } = props;

    return (
        <Grid
            gridTemplateColumns={"3fr 1fr"}  
            gridTemplateRows={".5fr 2fr 1fr"}
            templateAreas={`"breadcrumb categories"
                "posts categories"
                "pages categories"`}
        >   
       
            {/* BREADCRUMB */}
            <BreadCrumb>
                { name ? ( 

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href={`#`}>{ name }</BreadcrumbLink>
                    </BreadcrumbItem>
                ) : null } 
            
            </BreadCrumb>

                    
             
            
            {/* POSTS */}
            <PostsGrid {...props} /> 
            
            {/* CATEGORIES */}
            <CategoriesGrid { ...props } />

           
        </Grid>
    )
}
