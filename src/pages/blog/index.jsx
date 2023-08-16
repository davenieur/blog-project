import { GridItem } from '@chakra-ui/react';
import { PostsGrid } from '@/posts';
import { PostsLayout } from '@/layouts/PostsLayout';
import { getAllPosts } from '../../../contentful/querys';

/* /blog */

export default function BlogPage(props) {
  const { locale, altLocale } = props;

  
  return (
    <PostsLayout props={ props }>
      <GridItem area={"posts"}>
        <PostsGrid 
          locale = { locale } 
          altLocale={ altLocale } 
          queryFunction = { getAllPosts }
          slug = ''
          parameter = ''
        />
      </GridItem> 
    </PostsLayout>
  )
}

export async function getStaticProps(props){
  const { locale, locales } = props;
  const [ altLocale ] = locales.filter(language => language !== locale);

  return {
    props: {
      ...props,
      altLocale,
    }
  }
}