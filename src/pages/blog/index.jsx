import { Flex, Box } from '@chakra-ui/react';
import { PostsGrid } from '@/posts';
import { CategoryItem } from '@/categories';
import { PostsLayout } from '@/layouts/PostsLayout';
import { useGetCategories } from '@/hooks';


/* /blog */

export default function BlogPage(props) {
  const { locale, altLocale, showWrap } = props;

  // Usamos el hook personalizado
  const { memorizedCategories } = useGetCategories(locale, altLocale);
  
  return (
    <PostsLayout props={ props }>

      <Flex gridArea={"posts"} direction={"column"} gap={"4rem"}>
        { 

          memorizedCategories.map( ( { name, altName, slug, altSlug } ) => {
          

            return(
              <Flex direction={"column"} gap={"2rem"} padding={"1rem"} key={ name }>

                <Box fontSize="2xl" color="brand.tertiary">      

                  {/* Información de la categoría */}
                  <CategoryItem 
                    name = { name }
                    altName = { altName }
                    slug = { slug }
                    altSlug = { altSlug }
                    locale = { locale }
                  />
                </Box>
                
                {/* Mostramos los posts de cada categoria */}
                <PostsGrid slug = { slug } limit = { 3 } locale = { locale } altLocale={ altLocale } showWrap = { showWrap }/>
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