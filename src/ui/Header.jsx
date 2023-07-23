import { useState, useEffect } from "react";
import { GridItem, Flex } from "@chakra-ui/react"
import { LanguageToggle } from "./LanguageToggle";
import { getHeader } from "../../contentful/querys";

export const Header = (props) => {
    const [header, setHeader] = useState('');
  

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
        <GridItem as="header" padding="2rem 4rem"  width={"100vw"}>
            <Flex justifyContent="space-between" alignItems="center">
            
                {   header  }

                <LanguageToggle {...props}/>
            </Flex>
        </GridItem>
    )
}
