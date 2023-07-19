import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getSite } from '../../contentful/querys/getSite'
import { Grid, GridItem, Text } from '@chakra-ui/react'
import { PostsGrid } from '@/posts/PostsGrid'
import { Header } from '@/ui/Header'
import { Footer } from '@/ui/Footer'

export default function Home(props) {
  const [header, setHeader] = useState('');
  const [title, setTitle] = useState('');
  const [footer, setFooter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { header, title, footer } = await getSiteItems();
        setHeader(header);
        setTitle(title);
        setFooter(footer);

      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid 
        templateAreas={`"header header"
          "main main"
          "footer footer"`}
        gridTemplateRows={'10% 80% 10%'}
        color='brand.black'
        fontWeight='bold'
        height="100vh"
        padding="2rem"
      >  

        {/* Header */}
        <Header 
          header={header}

        />

        {/* Main */}

        <GridItem as="main"  bg='brand.primary' area={'main'} padding="2rem">
          <Grid
            // templateAreas={`"header header"
            //   "main main"
            //   "footer footer"`}

          >
            <Text fontSize='5xl' mb={"1rem"}>
              Blog
            </Text>
            <PostsGrid />
          </Grid>

          
        </GridItem>

        {/* Footer */}
        <Footer 
          footer={footer}
        />


      </Grid>
    </>
  )
}
