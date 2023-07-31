import Link from 'next/link';
import { Text, Tag, TagLabel } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation'


export const CategoryItem = (props) => {
    const { nameES, nameEN, slugES, slugEN, locale } = props || {};

    const { t } = useTranslation('category');
    
    const categoryName = t('name', { nameES, nameEN })
    const categorySlug = t('slug', { slugES, slugEN })

    return (
        <Tag size={"md"} variant='subtle' width={"fit-content"} bg={"brand.secondary"} padding={".5rem"} borderRadius={".5rem"} color={"brand.black"}>
            <Link href={`/blog/category/${ categorySlug }`} locale={ locale } >
                <TagLabel fontSize={"sm"}>
                    { categoryName }
                </TagLabel>
            </Link>
        </Tag>
    )
}
