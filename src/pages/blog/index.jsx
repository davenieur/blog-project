import { useEffect, useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { PostsGrid } from '@/posts';
import { CategoryItem } from '@/categories';
import { PostsLayout } from '@/layouts/PostsLayout';
import { getCategories, getPostsByCategory } from '../../../contentful/querys';

/* /blog */

export default function BlogPage(props) {
  const { locale, altLocale, showWrap, limit } = props;

  const [ postsByCategory, setPostsByCategory ] = useState([]);

  useEffect(() => {
      const fetchPostsByCategory = async () => {
        try {
            const categories = await getCategories(locale, altLocale);
            const postsByCategoryArray = [];

            // Recorrer el arreglo de categorías
            for (const category of categories) {
              try {
                // Realizar la solicitud GET de posts por categoría
                const posts = await getPostsByCategory(category.slug, 0, locale, altLocale);
                
                // Agregar la categoría y los posts al arreglo
                postsByCategoryArray.push({
                  category: category,
                  posts: posts
                });
              } catch (error) {
                console.error(`Error al obtener posts para la categoría ${category.slug}`);
              }
            }

            // Posts por categorias
            setPostsByCategory(postsByCategoryArray);
        } 
        catch (error) {
            console.error(error);
        }
      };
      fetchPostsByCategory();
      // TODO: Mejorar que no se actualicé cada vez que se cambie el locale, utilizar next-translate
  }, [ locale ]);


  
  return (
    <PostsLayout props={ props }>

      <Flex gridArea={"posts"} direction={"column"} gap={"4rem"}>
        { 
          postsByCategory.map( ( { category, posts } ) => {

            return(
              <Flex direction="column" gap="2rem" key={ category.name }>

                <Box 
                  fontSize="2xl" 
     
                  width="20rem" color="brand.black" 
                  textAlign="center" 
                  marginLeft="6rem" 
                  transition=".2s"
                >      
                  {/* Información de la categoría */}
                  <CategoryItem 
                    name = { category.name }
                    altName = { category.altName }
                    slug = { category.slug }
                    altSlug = { category.altSlug }
                    locale = { locale }
                  />
                </Box>
                
                {/* Mostramos los posts de cada categoria */}
                <PostsGrid 
                  slug = { category.slug } 
                  locale = { locale } 
                  altLocale={ altLocale } 
                  showWrap = { showWrap }
                  filteredPosts = { posts }
                  totalPages = { Math.ceil(posts.length / limit) }
                  queryFunction = { getPostsByCategory }
                />
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

  // Mostramos las categorías con sliders
  const  showWrap = false;

  // Limite por sección mostrada
  const limit = 3;

  return {
    props: {
      ...props,
      altLocale,
      showWrap,
      limit
    }
  }
}