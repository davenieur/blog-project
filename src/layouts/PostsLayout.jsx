import { useEffect, useMemo, useState } from "react"
import { Grid, Text, GridItem, Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading } from "@chakra-ui/react"
import Link from "next/link";
import { getSite } from "../../contentful/querys"
import { BreadCrumb } from "@/ui"

export const PostsLayout = ( { children, props } ) => {
    const { name, locale } = props;

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
            templateAreas={`"title categories"
                "posts categories"
                "pages categories"`}
        >   
       
            <Heading  as='h1' display={"flex"} flex-direction={"row"} gap={"1rem"} gridArea={"title"}>
                {/* BLOG */}
                    <Link href="/blog" locale={ locale }>
                            { memorizedTitle }
                    </Link>
              
                { name ? ( <BreadCrumb name={ name } /> ) : null }
               
            </Heading>
           
            { children }

            {/* PAGINACIÓN */}
            <GridItem area={"pages"}>
                Page: 
            </GridItem>
        </Grid>
    )
}
