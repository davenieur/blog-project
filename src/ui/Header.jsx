import { useState, useEffect, useMemo } from "react";
import { GridItem, Flex } from "@chakra-ui/react";
import Link from 'next/link';
import { LanguageToggle } from ".";
import { getHeader } from "../../contentful/querys";
import Image from "next/image";

export const Header = (props) => {
    const { locale } = props;
    const [ logoUrl, setLogoUrl ] = useState('');
    const [ logoAlt, setLogoAlt ] = useState('');

    useEffect(() => {
        const fetchData = async () => {
        try {
            const { header } = await getHeader();
       
            setLogoUrl(header.logo.url);
            setLogoAlt(header.logo.title);

        } catch (error) {
            console.error(error);
        }
        };
        fetchData();
    }, []);
    

    return (
        <GridItem as="header" padding="2rem 4rem"  width={"100vw"}  area={'header'} >
            <Flex justifyContent="space-between" alignItems="center">
                <Link href={`/blog`} locale={ locale }>
                    <Image
                        src={ logoUrl }
                        alt={ logoAlt }
                        width={50}
                        height={50}
                    >
                        
                    </Image>
                </Link>
                <LanguageToggle {...props}/>
            </Flex>
        </GridItem>
    )
}
