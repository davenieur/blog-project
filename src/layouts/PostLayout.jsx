import { useEffect, useMemo, useState } from "react"
import useTranslation from "next-translate/useTranslation";
import { Grid, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { getSite } from "../../contentful/querys";
import { PostInfo } from "@/post";

export const PostLayout = ( { props } ) => {
    const { category } = props;
    console.log("postLayout", props);
    // const { slugES, slugEN, nameES, nameEN } = category;

    // const { t } = useTranslation('category');
    
    // const categorySlug = t('slug', { slugES , slugEN });
    // const categoryName = t('name', { nameES, nameEN })



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
        <Flex direction={"column"} gap={"4em"}>
            {/* Title con breadcrumb */}
            <Heading as='h3' display={"flex"} flexDirection={"row"} gap={"1rem"} fontSize={"xl"} color='brand.black'>
                <Breadcrumb separator={<ChevronRightIcon />}>
                    <BreadcrumbItem >
                        <BreadcrumbLink href='/blog'> { memorizedTitle } </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        {/* <BreadcrumbLink href={`/blog/category/${ categorySlug }`}>{ categoryName }</BreadcrumbLink> */}
                        <BreadcrumbLink href={`/blog/`}>uwu</BreadcrumbLink>
                    </BreadcrumbItem>

                </Breadcrumb>
            </Heading>   

            <Grid
                templateAreas={`"postInfo postInfo featuredImage featuredImage"
                    "shareMenu shareMenu featuredImage featuredImage"
                    "body body body contentsTable"`
                }
            >   
                <PostInfo { ...props } />    
            
            </Grid>

        </Flex>
           
    )
}
