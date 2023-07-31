import Link from "next/link";
import { Button } from '@chakra-ui/react';
import { GrLanguage } from "react-icons/gr"
import useTranslation from 'next-translate/useTranslation'

export const LanguageToggle = (props) => {
    console.log("language", props)
    const { slug, altSlug, altLocale } = props;

    const linkPath = slug ? `/blog/category/${altSlug}` : "/blog"

    /* Use */
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
