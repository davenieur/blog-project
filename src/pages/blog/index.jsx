import { useState, useEffect } from 'react';
import { Grid, Text } from '@chakra-ui/react'
import { PostsGrid } from '@/posts';
import { getSite } from '../../../contentful/querys';

export default function BlogPage(props) {
  const [title, setTitle] = useState('');
    
  useEffect(() => {
      const fetchData = async () => {
      try {
          const { title } = await getSite();
          setTitle(title)
      } catch (error) {
          console.error(error);
      }
      };
      fetchData();
  }, []);

  return (
    <Grid
    >
      <Text fontSize='5xl' mb={"1rem"}>
        {title}
      </Text>
      <PostsGrid {...props}/>
    </Grid>
   
  )
}

export async function getStaticProps(props){
  const { locale, locales } = props;

  const [ altLocale ] = locales.filter(lang => lang !== locale);

  return {
    props: {
      ...props,
      altLocale
    }
  }
}