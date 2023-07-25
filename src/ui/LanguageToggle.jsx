import Link from "next/link";
import { Button } from '@chakra-ui/react';
import { GrLanguage } from "react-icons/gr"
import useTranslation from 'next-translate/useTranslation'

export const LanguageToggle = (props) => {
    const { slug, altSlug, altLocale } = props || {};
  
    const linkPath = slug ?`/blog/${altSlug}` : "/blog"
    
    const { t } = useTranslation('common')
    const label = t('label');

    return (
        
        <Button leftIcon={<GrLanguage />} color="brand.black" backgroundColor="brand.secondary" variant='solid'>
            <Link href={linkPath} locale={altLocale}>
                { label }
            </Link>
        </Button>
        
    )
}
