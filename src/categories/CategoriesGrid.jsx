import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import { Flex,Box, useBreakpointValue, Text } from '@chakra-ui/react';
import { CategoryItem } from './CategoryItem';
import { useGetCategories } from '@/hooks';

export const CategoriesGrid = (props) => {
    const { locale, altLocale } = props;

    const flexDirection = useBreakpointValue({ base: "column", md: "row", lg: "row", xl: "column"});
    const justify = useBreakpointValue({ base: "center", md: "center", lg: "center", xl: "flex-end" });
    const align = useBreakpointValue({ base: "flex-start", md: "flex-start", lg: "flex-start", xl: "flex-end" });
    const fontSize = useBreakpointValue({ base: "sm", md: "sm", lg: "sm", xl: "md" });
    const textAlign = useBreakpointValue({ base: "center", md: "center", lg: "center", xl: "end" });

    // Usamos el hook personalizado
    const { memorizedCategories } = useGetCategories(locale, altLocale);

    // Traducir el label del menú de categorías
    const { t } = useTranslation('common');
    const label = t('categories');

    return (
        <Flex 
            gridArea='categories' 
            direction="column"
            color="brand.black" 
            gap="2rem"
        >
            <Text fontSize="2xl" textAlign= { textAlign }>
                { label }
            </Text>

            <Flex
                direction={ flexDirection } 
                align= { align }
                justify= { justify } 
                gap="2rem" 
                
            >
                {
                    memorizedCategories.map( ({ name, altName, slug, altSlug }) => {
                        return(
                            <Box
                                transition =".25s"
                                _hover={{ backgroundColor: "brand.secondary ", }} 
                                key= { slug } 
                                fontSize= { fontSize }
                                
                            >
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
        </Flex>
    )
}

CategoriesGrid.propTypes = {
    locale: PropTypes.string,
    altLocale: PropTypes.string
}