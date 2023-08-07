import { useState, useEffect, useMemo } from 'react';
import { Flex, Divider } from '@chakra-ui/react';
import { Pagination } from '@/posts';
import { PostsGrid } from '@/posts';

import {  CategoryItem } from '@/categories';
import { PostsLayout } from '@/layouts/PostsLayout';
import { getCategories } from '../../../contentful/querys';

/* /blog */

export default function BlogPage(props) {
  const { locale } = props;

  // Obtenemos todas las categorias
  const [ categories, setCategories ] = useState([]);

  // Realizamos el fetch cada que el locale cambie (puede mejorar)
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
  }, [locale]);

  
  const memorizedCategories = useMemo(() => categories, [categories]);

  return (
    <PostsLayout props={ props }>

      <Flex gridArea={"posts"} direction={"column"} gap={"4rem"}>
        { 

          memorizedCategories.map( ( { name, altName, slug, altSlug }) => {
          
            return(

              <Flex direction={"column"} gap={"2rem"} padding={"1rem"} key={ name }>
                
                {/* Nombre de la categoria */}
                <Flex fontSize="2xl" color="brand.tertiary">
                  <CategoryItem 
                    name = { name }
                    altName = { altName }
                    slug = { slug }
                    altSlug = { altSlug }
                    locale = { locale }
                  />
                </Flex>
                

                {/* Mostramos los posts de cada categoria */}
                <PostsGrid props={ slug={ slug } } />
                 
                <Divider orientation='horizontal' width={"70%"} variant="thick"/>

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