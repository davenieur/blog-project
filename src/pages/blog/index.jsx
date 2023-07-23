import { useState, useEffect } from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react'
import { PostsGrid } from '@/posts';
import { getCategoriesSlugs, getPostsSlugs, getSite } from '../../../contentful/querys';

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
  return {
    props: {
      ...props
    }
  }
}