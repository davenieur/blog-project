// React
import { createContext } from 'react'

// Chakra
import { ChakraProvider } from '@chakra-ui/react'
import theme  from '../styles/theme';

// Plantilla
import { RootLayout } from '@/layouts/RootLayout';

export default function App({ Component, pageProps }) {
  return(
    <ChakraProvider theme={theme}>
      <RootLayout pageProps={ pageProps }>
        <Component { ...pageProps } />
      </RootLayout>
    </ChakraProvider>
  )
}

