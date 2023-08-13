import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';
import { CategoryItem } from './CategoryItem';
import { useGetCategories } from '@/hooks';

export const CategoriesGrid = (props) => {
    const { locale, altLocale } = props;

    // Usamos el hook personalizado
    const { memorizedCategories } = useGetCategories(locale, altLocale);

    return (
        <Flex gridArea={'categories'} direction={"column"} color={"brand.black"} gap={"2rem"} padding={"1rem"}>
            {
                memorizedCategories.map( ({ name, altName, slug, altSlug }) => {
                    return(
                        <CategoryItem  
                            name = { name }
                            altName = { altName }
                            slug = { slug }
                            altSlug = { altSlug }
                            locale = { locale }
                            key= { slug }
                        />
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