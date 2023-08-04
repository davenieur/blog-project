import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from '@chakra-ui/react';
import { GrLanguage } from "react-icons/gr"
import useTranslation from 'next-translate/useTranslation'

export const LanguageToggle = (props) => {

    const { slug, altSlug, altLocale } = props;
    
    const router = useRouter();

    // Obtener el path completo
    const fullPath = router.asPath;

    // Comprobar si el path contiene "category/"
    const hasCategorySubroute = fullPath.includes('/category/');

    const linkPath = slug ? ( hasCategorySubroute ? `/blog/category/${ altSlug }` : `/blog/${ altSlug }`) : "/blog"

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
