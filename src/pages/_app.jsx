// React
import { useEffect, useState } from 'react'

// Chackra
import { Grid, ChakraProvider, GridItem } from '@chakra-ui/react'
import theme  from '../styles/theme';

// Redux 
import { store } from '@/store/store';
import { Provider } from 'react-redux'

// Componentes propios
import { Header, Footer } from '@/ui';
import { LocaleProvider } from '@/helpers/LocaleContext';

// Helpers
import { getSite } from '../../contentful/querys/getSite';


export default function App({ Component, pageProps }) {
  const [header, setHeader] = useState('');
  const [footer, setFooter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { header, footer } = await getSite();
        setHeader(header);
        setFooter(footer);

      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);


// Providers de Redux, Chakra y Locale
  return(
    <LocaleProvider>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Grid 
            templateAreas={`"header header"
              "main main"
              "footer footer"`}
            gridTemplateRows={'10% 80% 10%'}
            color='brand.black'
            fontWeight='bold'
            height="100vh"
            p={0} 
            m={0}
          >  
            {/* Header */}
            <Header 
              header={header}
            />
            
            <GridItem as="main"  bg='brand.primary' area={'main'} p={"4rem"}>
              <Component {...pageProps} />
            </GridItem>
           

            {/* Footer */}
            <Footer 
              footer={footer}
            />
          </Grid>
        </ChakraProvider>
      </Provider>
    </LocaleProvider>
  )
}
