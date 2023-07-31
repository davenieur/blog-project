import Link from 'next/link';
import { Box, Text, Badge } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation'


export const CategoryItem = (props) => {
    const { nameES, nameEN, slugES, slugEN, locale } = props || {};

    const { t } = useTranslation('category');
    
    const categoryName = t('name', { nameES, nameEN })
    const categorySlug = t('slug', { slugES, slugEN })

    return (
        <Badge backgroundColor={"brand.primary"} width={"fit-content"} bg={"brand.secondary"} padding={".5rem"} borderRadius={".5rem"} color={"brand.black"}>
            <Link href={`/blog/category/${ categorySlug }`} locale={ locale } >
                <Text fontSize='sm' borderBottom={"brand.tertiary .2rem solid"}>
                    { categoryName }
                </Text>
            </Link>
        </Badge>
    )
}
