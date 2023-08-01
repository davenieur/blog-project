import { useEffect, useMemo, useState } from "react"
import useTranslation from "next-translate/useTranslation";
import { Grid, BreadcrumbItem, BreadcrumbLink, Heading, Flex } from "@chakra-ui/react";
import { BreadCrumb } from "@/ui";
import { getSite } from "../../contentful/querys";
import { PostInfo } from "@/post";

export const PostLayout = ( { props } ) => {
    const { category } = props;
    const { slugES, slugEN, nameES, nameEN } = category;

    const { t } = useTranslation('category');
    
    const categorySlug = t('slug', { slugES , slugEN });
    const categoryName = t('name', { nameES, nameEN })
    const [title, setTitle] = useState('');
    1
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
        <Flex direction={"column"}>
       
            <BreadCrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/blog/category/${ categorySlug }`}>{ categoryName }</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadCrumb>   

            <Grid
                templateAreas={`"postInfo postInfo"
                    "postBody  postContentTable"`
                }
            >   
                <PostInfo { ...props } />    
            
            </Grid>

        </Flex>
           
    )
}
