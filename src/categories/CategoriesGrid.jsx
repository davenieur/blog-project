import { Flex, Divider } from '@chakra-ui/react';
import { CategoryItem } from './CategoryItem';
import { useGetCategories } from '@/hooks';
import { AiFillCaretRight } from 'react-icons/ai'

export const CategoriesGrid = (props) => {
    const { locale, altLocale } = props;

    // Usamos el hook personalizado
    const { memorizedCategories } = useGetCategories(locale, altLocale);

    return (
        <Flex gridArea={'categories'} direction={"column"} color={"brand.black"} gap={"2rem"} padding={"1rem"}>
            {
                memorizedCategories.map( category => {
                    return(
                        <Flex direction="column" gap="1rem" key={ category.slug }>
                            <Flex direction="row" gap=".2rem">
                                <AiFillCaretRight size="1.5rem" color="#FF8811"/> 
                                <CategoryItem  
                                    { ...category }
                                />
                            </Flex>
                           
                            <Divider orientation='horizontal' width={"100%"} variant="thick"/>
                        </Flex>
                        
                    )
                })
            }
      </Flex>
    )
}
