import { useState, useEffect, useMemo } from "react";
import { GridItem, Flex } from "@chakra-ui/react"
import { LanguageToggle } from ".";
import { getHeader } from "../../contentful/querys";

export const Header = (props) => {
    const [header, setHeader] = useState('');

    const memorizedHeader = useMemo(() => header, [header]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const { header } = await getHeader();
            setHeader(header);
            

        } catch (error) {
            console.error(error);
        }
        };
        fetchData();
    }, []);
    

    return (
        <GridItem as="header" padding="2rem 4rem"  width={"100vw"}  area={'header'} >
            <Flex justifyContent="space-between" alignItems="center">
            
                { memorizedHeader }

                <LanguageToggle {...props}/>
            </Flex>
        </GridItem>
    )
}
