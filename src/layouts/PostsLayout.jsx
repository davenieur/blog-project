import { useEffect, useMemo, useState } from "react"
import { Grid, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons";
import { getSite } from "../../contentful/querys"
import { PostsGrid } from "@/posts";
import { CategoriesGrid } from "@/categories";

export const PostsLayout = ( { props } ) => {
    const { name } = props;

    const [title, setTitle] = useState('');
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const { title } = await getSite();
            setTitle(title)
        } catch (error) {
            console.error(error);
        }
        };
        fetchData();
    }, []);

    const memorizedTitle = useMemo(() => title, [title]);

    return (
        <Grid
            gridTemplateColumns={"3fr 1fr"}  
            gridTemplateRows={".5fr 2fr 1fr"}
            templateAreas={`"breadcrumb categories"
                "posts categories"
                "pages categories"`}
        >   
       
            {/* BREADCRUMB */}
            <Heading  as='h1' display={"flex"} flex-direction={"row"} gap={"1rem"} gridArea={"breadcrumb"} fontSize={"4xl"} color='brand.black'>
                <Breadcrumb separator={<ChevronRightIcon />}>                    <BreadcrumbItem>
                        <BreadcrumbLink href='/blog'> { memorizedTitle } </BreadcrumbLink>
                    </BreadcrumbItem>

                    { name ? ( 

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href={`#`}>{ name }</BreadcrumbLink>
                        </BreadcrumbItem>
                     ) : null } 
                </Breadcrumb>
            </Heading>
            
            {/* POSTS */}
            <PostsGrid {...props} /> 
            
            {/* CATEGORIES */}
            <CategoriesGrid { ...props } />

           
        </Grid>
    )
}
