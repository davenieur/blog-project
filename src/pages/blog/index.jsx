import { useState, useEffect, useMemo } from 'react';
import { Flex, Text, Divider } from '@chakra-ui/react';
import { Pagination } from '@/posts';
import { PostsGrid } from '@/posts';

import { CategoriesGrid, CategoryItem } from '@/categories';
import { PostsLayout } from '@/layouts/PostsLayout';
import { getCategories } from '../../../contentful/querys';

/* /blog */

export default function BlogPage(props) {
  const { locale } = props;

  // Obtenemos todas las categorias
  const [ categories, setCategories ] = useState([]);


  useEffect(() => {
      const fetchCategories = async () => {
      try {
          const categories = await getCategories();
          setCategories(categories);
      } catch (error) {
          console.error(error);
      }
      };
      fetchCategories();
  }, []);

  
  const memorizedCategories = useMemo(() => categories, [categories]);

  return (
    <PostsLayout props={ props }>

      <Flex gridArea={"posts"} direction={"column"} gap={"4rem"}>
        { 

          memorizedCategories.map( ( { name, altName, slug, altSlug }) => {
          
            return(

              <Flex direction={"column"} gap={"2rem"} padding={"1rem"} key={ slug }>
                <CategoryItem 
                  name = { name }
                  altName = { altName }
                  slug = { slug }
                  altSlug = { altSlug }
                  locale = { locale }
                />

                {/* Mostramos los posts de cada categoria */}
                <PostsGrid props={ slug={ slug } }>
                  <Divider orientation='horizontal' width={"70%"}/>
                </PostsGrid>

                
              </Flex>

              
            )
          })
        }
      </Flex>

       
   
      
     
    </PostsLayout>
  )
}

export async function getStaticProps(props){
  const { locale, locales } = props;
  const [ altLocale ] = locales.filter(language => language !== locale);

  return {
    props: {
      ...props,
      altLocale
    }
  }
}