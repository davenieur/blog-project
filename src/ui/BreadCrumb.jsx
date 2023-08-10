import { useEffect, useMemo, useState } from "react";
import PropTypes from 'prop-types';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading  } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons";
import { getSite } from "../../contentful/querys";
import Link from "next/link";
import "@fontsource/mukta";

export const BreadCrumb = ( { children, props }) => {
    const { locale } = props;

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
        <Heading as='h2' display={"flex"} flexDirection={"row"} gap={"1rem"} fontSize={"3xl"} color='brand.black' padding={"2rem"}>
            <Breadcrumb separator={<ChevronRightIcon />} fontFamily="mukta">
                <BreadcrumbItem >
                    <BreadcrumbLink as={Link}  href={'/blog'} locale={ locale }>{ memorizedTitle }</BreadcrumbLink>
                </BreadcrumbItem>

                { children}

            </Breadcrumb>
        </Heading>   
    )
}

BreadCrumb.propTypes = {
    children: PropTypes.object
}
