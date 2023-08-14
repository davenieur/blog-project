import Link from "next/link";
import PropTypes from 'prop-types';
import { useRouter } from "next/router";
import { Button } from '@chakra-ui/react';
import { GrLanguage } from "react-icons/gr"
import useTranslation from 'next-translate/useTranslation'

export const LanguageToggle = (props) => {

    const { slug, altSlug, altLocale } = props;

    const router = useRouter();

    // Obtener el path completo
    const fullPath = router.asPath;

    // Comprobar si el path contiene "category"
    const hasCategorySubroute = fullPath.includes('/category/');
    
    // Comprobar si el path contiene "author"
    const hasAuthorSubroute = fullPath.includes('/author/');

    // Creamos la estructura del link
    const linkPath = slug ? ( hasCategorySubroute ? `/blog/category/${ altSlug }` :  hasAuthorSubroute ? `/blog/author/${ altSlug }` : `/blog/${ altSlug }`) : "/blog"

    // Traducir el label del botón de idiomas
    const { t } = useTranslation('common')
    const label = t('label');

    return (
        <Link href={ linkPath } locale={ altLocale }>
            <Button leftIcon={<GrLanguage />} color="brand.black" backgroundColor="brand.secondary" variant='ghost'>
                { label }
            </Button>
        </Link>
        
    )
}

LanguageToggle.propTypes = {
    slug: PropTypes.string,
    altSlug: PropTypes.string,
    altLocale: PropTypes.string.isRequired
}