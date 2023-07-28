import { Grid, Text, Flex, GridItem } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react"

export const PostLayout = ( { children, props } ) => {
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

    // const memorizedTitle = useMemo(() => title, [title]);

    return (
        <Grid
            templateAreas={`"postInfo postInfo featuredImage featuredImage"
                "shareMenu shareMenu featuredImage featuredImage"
                "body body body contentsTable"`}
        >   
             <Breadcrumb display={"flex"} flex-direction={"row"} gap={"1rem"} gridArea={"title"} separator='-'>
                {/* BLOG */}


                <BreadcrumbItem isCurrentPage>      
                    <Link  href={ "/" } locale={ locale }>
                        { memorizedTitle }
                    </Link>  
                </BreadcrumbItem>
                
                { name ? ( <BreadCrumb name={ name } /> ) : null }
               
            </Breadcrumb>
           
            { children }

            {/* PAGINACIÓN */}
            <GridItem area={"pages"}>
                Page: 
            </GridItem>
        </Grid>
    )
}
