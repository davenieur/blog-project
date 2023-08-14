import { useEffect, useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { PostsGrid } from '@/posts';
import { CategoryItem } from '@/categories';
import { PostsLayout } from '@/layouts/PostsLayout';
import { getAllPosts, getCategories, getPostsByCategory, getTotalPosts } from '../../../contentful/querys';

/* /blog */

export default function BlogPage(props) {
  const { locale, altLocale, showWrap, totalPages } = props;

  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
      const fetchAllPosts = async () => {
        const posts = await getAllPosts('', 0, locale, altLocale);
        setPosts(posts);
      }
      fetchAllPosts();
      // TODO: Mejorar que no se actualicé cada vez que se cambie el locale, utilizar next-translate
  }, [ locale ]);


  
  return (
    <PostsLayout props={ props }>
      <Flex gridArea="posts" direction="column" gap="1rem">
        <PostsGrid 
          locale = { locale } 
          altLocale={ altLocale } 
          showWrap = { showWrap }
          filteredPosts = { posts }
          totalPages = { totalPages }
          queryFunction = { getAllPosts }
        />
      </Flex> 
    </PostsLayout>
  )
}

export async function getStaticProps(props){
  const { locale, locales } = props;
  const [ altLocale ] = locales.filter(language => language !== locale);

  // Mostramos las categorías con sliders
  const  showWrap = true;

  // Limite por sección mostrada
  const limit = 9;

  // Obtenemos el total de posts
  const totalPosts = await getTotalPosts();
  
  // Obtenemos el total de páginas para realizar la páginación
  const totalPages = Math.ceil(totalPosts / limit) 

  return {
    props: {
      ...props,
      altLocale,
      showWrap,
      limit,
      totalPages
    }
  }
}