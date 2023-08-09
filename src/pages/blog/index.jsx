
import { Flex, Divider, Box } from '@chakra-ui/react';
import { Pagination } from '@/posts';
import { PostsGrid } from '@/posts';

import {  CategoryItem } from '@/categories';
import { PostsLayout } from '@/layouts/PostsLayout';
import { useGetCategories } from '@/hooks';

/* /blog */

export default function BlogPage(props) {
  const { locale, altLocale } = props;

  // Usamos el hook personalizado
  const { memorizedCategories } = useGetCategories();
  
  
  return (
    <PostsLayout props={ props }>

      <Flex gridArea={"posts"} direction={"column"} gap={"4rem"}>
        { 

          memorizedCategories.map( ( { name, altName, slug, altSlug }) => {
          
            return(
              <Flex direction={"column"} gap={"2rem"} padding={"1rem"} key={ name }>

                <Box fontSize="2xl" color="brand.tertiary">      

                  {/* Nombre de la categoria */}
                  <CategoryItem 
                    name = { name }
                    altName = { altName }
                    slug = { slug }
                    altSlug = { altSlug }
                    locale = { locale }
                  />
                </Box>
                

                {/* Mostramos los posts de cada categoria */}
                <PostsGrid { ...props } />
                 
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