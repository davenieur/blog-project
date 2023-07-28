import { useState, useEffect, useMemo } from "react";
import { GridItem } from "@chakra-ui/react"
import { getFooter } from "../../contentful/querys";

export const Footer = (props) => {
    const [footer, setFooter] = useState('');
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const { footer } = await getFooter();
            setFooter(footer);
            

        } catch (error) {
            console.error(error);
        }
        };
        fetchData();
    }, []);
    
    const memorizedFooter = useMemo(() => footer, [footer]);

    return (
        <GridItem as="footer" 
          bg="brand.footer" 
          area={'footer'} 
          padding="2rem" 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          p={"2rem"}
        >
          { memorizedFooter }
        </GridItem>
    )
}
