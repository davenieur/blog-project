// React
import { useEffect, useState } from 'react'

// Chakra
import { Grid, ChakraProvider, GridItem } from '@chakra-ui/react'
import theme  from '../styles/theme';

// Redux 
import { store } from '@/store/store';
import { Provider } from 'react-redux'

// Componentes propios
import { Header, Footer } from '@/ui';

export default function App({ Component, pageProps }) {
  
// Providers de Redux, Chakra y Locale
  return(

    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Grid 
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
          <Header 
            {...pageProps}
          />
          
          <GridItem as="main"  bg='brand.primary' area={'main'} p={"4rem"}>
            <Component {...pageProps} />
          </GridItem>
          

          {/* Footer */}
          <Footer 
            {...pageProps}
          />
        </Grid>
      </ChakraProvider>
    </Provider>
    
  )
}
