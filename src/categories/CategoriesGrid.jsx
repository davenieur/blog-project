import PropTypes from 'prop-types';
import { Flex,Box } from '@chakra-ui/react';
import { CategoryItem } from './CategoryItem';
import { useGetCategories } from '@/hooks';

export const CategoriesGrid = (props) => {
    const { locale, altLocale } = props;

    // Usamos el hook personalizado
    const { memorizedCategories } = useGetCategories(locale, altLocale);

    return (
        <Flex gridArea='categories' direction="column" color="brand.black" gap="2rem" justify="flex-start" padding="4rem">
            {
                memorizedCategories.map( ({ name, altName, slug, altSlug }) => {
                    return(
                        <Box _hover={{ backgroundColor: "brand.secondary ", transition: ".25s"}} key= { slug }>
                            <CategoryItem  
                                name = { name }
                                altName = { altName }
                                slug = { slug }
                                altSlug = { altSlug }
                                locale = { locale }
                                
                            />
                        </Box>
                    )
                })
            }
      </Flex>
    )
}

CategoriesGrid.propTypes = {
    locale: PropTypes.string,
    altLocale: PropTypes.string
}