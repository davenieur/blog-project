
import Link from 'next/link';


import { Grid, GridItem, Text } from '@chakra-ui/react'
import { PostsGrid } from '@/posts';

export default function BlogPage(props) {
  console.log("blog",props)

  return (
    <Grid
    >
      <Text fontSize='5xl' mb={"1rem"}>
        Blog
      </Text>
      <PostsGrid />
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
