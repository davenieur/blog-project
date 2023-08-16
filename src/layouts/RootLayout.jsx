import { Grid, GridItem  } from "@chakra-ui/react";
import { Header, Footer } from "@/ui";
import ScrollToTop from "react-scroll-to-top";
import { TriangleUpIcon } from "@chakra-ui/icons";
import PropTypes from 'prop-types';

// Plantilla sm del sitio
export const RootLayout = ( { children, pageProps } ) => {
    return (
        <Grid 
            gridTemplateRows=".25fr 4fr .25fr"
            gridTemplateColumns="1fr 1fr"
            templateAreas={`"header header"
            "main main"
            "footer footer"`}
            color='brand.black'
            fontWeight='bold'
            height="100vh"
            padding="0"
            margin="0"
            overflowX="hidden"
        >  
            {/* Header */}
            <Header { ...pageProps }/>
            
            {/* Main */}
            <GridItem as="main" bg='brand.primary' area={'main'}>
                { children }
            </GridItem>
            
            {/* Footer */}
            <Footer { ...pageProps }/>

            {/* Botón para regresar a la parte superior del sitio */}
            <ScrollToTop smooth component={ <TriangleUpIcon/>} style={{ backgroundColor: '#FF8811' }} />
        </Grid>
    )
}

RootLayout.propTypes = {
    pageProps: PropTypes.object.isRequired
}
