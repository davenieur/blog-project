import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { Text } from '@chakra-ui/react';

export const CategoryItem = (props) => {
    const { name, altName, slug, altSlug, locale } = props;

     // Traducir el contenido de la categoría
     const { t } = useTranslation('category');
    
     const categoryName = t('name', { nameES: name, nameEN: altName });
     const categorySlug = t('slug', { slugES: slug, slugEN: altSlug });

    return (
       
        <Link href={`/blog/category/${ categorySlug }`} locale={ locale }>
            <Text>
                { categoryName }
            </Text>
        </Link>
 
    )
}
