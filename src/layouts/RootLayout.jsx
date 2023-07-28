import { Grid, GridItem  } from "@chakra-ui/react";
import { Header, Footer } from "@/ui";

export const RootLayout = ( { children, pageProps } ) => {
    return (
        <Grid 
            gridTemplateRows={"1fr 3fr 1fr"}
            templateAreas={`"header header"
            "main main"
            "footer footer"`}
            color='brand.black'
            fontWeight='bold'
            height="100vh"
            p={0} 
            m={0}
        >  
            {/* Header */}
            <Header { ...pageProps }/>
            
            {/* Main */}
            <GridItem as="main"  bg='brand.primary' area={'main'} p={"4rem"}>
                { children }
            </GridItem>
            
            {/* Footer */}
            <Footer { ...pageProps }/>
        </Grid>
    )
}

