import Link from 'next/link';
import PropTypes from 'prop-types';

// Fuentes
import "@fontsource/nunito";

import { Text } from '@chakra-ui/react';

export const CategoryItem = (props) => {
    const { name, slug, locale } = props || {};

    return (
       
        <Link href={`/blog/category/${ slug }`} locale={ locale }>
            <Text fontFamily="nunito"  _hover={{ backgroundColor: "brand.secondary", color: "brand.black", transition: "1s"}} width="fit-content">
                { name }
            </Text>
        </Link>
 
    )
}

CategoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    locale: PropTypes.string,
}