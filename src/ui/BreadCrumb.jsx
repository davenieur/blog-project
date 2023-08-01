import { useEffect, useMemo, useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading  } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons";
import { getSite } from "../../contentful/querys";

export const BreadCrumb = ( { children }) => {
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
        <Heading as='h2' display={"flex"} flexDirection={"row"} gap={"1rem"} fontSize={"2xl"} color='brand.black' padding={"2rem"}>
            <Breadcrumb separator={<ChevronRightIcon />}>
                <BreadcrumbItem >
                    <BreadcrumbLink href='/blog'> { memorizedTitle } </BreadcrumbLink>
                </BreadcrumbItem>

                { children}

            </Breadcrumb>
        </Heading>   
    )
}
