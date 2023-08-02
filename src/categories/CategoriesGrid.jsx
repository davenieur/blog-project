import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Flex } from '@chakra-ui/react';
import { getCategories } from '../../contentful/querys';
import { CategoryItem } from './CategoryItem';


export const CategoriesGrid = (props) => {
    const { locale, altLocale } = props;

    const [ categories, setCategories ] = useState([]);


    useEffect(() => {
        const fetchCategories = async () => {
        try {
            const categories = await getCategories(locale, altLocale);
            setCategories(categories);
        } catch (error) {
            console.error(error);
        }
        };
        fetchCategories();
    }, [ locale ]);

    const memorizedCategories = useMemo(() => categories, [categories]);

    return (
        <Flex gridArea={'categories'} direction={"column"} color={"brand.black"} gap={"2rem"}>
            {
                memorizedCategories.map( category => {
                    return(
                        <CategoryItem 
                            key={ category.slug }
                            { ...category }
                        />
                    )
                })
            }
      </Flex>
    )
}
