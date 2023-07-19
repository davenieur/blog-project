import { Provider } from 'react-redux'
import { store } from '@/store/store';
import { ChakraProvider } from '@chakra-ui/react'
import theme  from '../styles/theme';

export default function App({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}
