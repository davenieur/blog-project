import Link from 'next/link';
import { Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation'


export const CategoryItem = (props) => {
    const { name, slug, locale } = props || {};

    return (
       
        <Link href={`/blog/category/${ slug }`} locale={ locale }>
            <Text>
                { name }
            </Text>
        </Link>
 
    )
}
