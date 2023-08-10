
import { Flex, Divider, Box } from '@chakra-ui/react';
import { Pagination } from '@/posts';
import { PostsGrid } from '@/posts';

import { CategoryItem } from '@/categories';
import { PostsLayout } from '@/layouts/PostsLayout';
import { useGetCategories, useGetPosts } from '@/hooks';


/* /blog */

export default function BlogPage(props) {
  const { locale, altLocale, showWrap } = props;
  const { memorizedCategories } = useGetCategories();
  

  return (
    <PostsLayout props={ props }>

      <Flex gridArea={"posts"} direction={"column"} gap={"4rem"}>
        { 

          memorizedCategories.map( ( category ) => {
 

            return(
              <Flex direction={"column"} gap={"2rem"} padding={"1rem"} key={ category.slug }>

                <Box fontSize="2xl" color="brand.tertiary">      

                  {/* Nombre de la categoria */}
                  <CategoryItem 
                    name = { category.name }
                    altName = { category.altName }
                    slug = { category.slug }
                    altSlug = { category.altSlug }
                    locale = { locale }
                  />
                </Box>
                
                {/* Mostramos los posts de cada categoria */}
                <PostsGrid slug = { category.slug } limit = { 3 } locale = { locale } altLocale={ altLocale } showWrap = { showWrap }/>
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
  const  showWrap = false;

  return {
    props: {
      ...props,
      altLocale,
      showWrap
    }
  }
}