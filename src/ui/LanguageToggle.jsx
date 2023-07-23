import Link from "next/link";
import { Button } from '@chakra-ui/react';
import { GrLanguage } from "react-icons/gr"
import useTranslation from 'next-translate/useTranslation'

export const LanguageToggle = (props) => {
    const { locales, locale, slug, altSlug } = props || {};
  
    const [altLocale] = locales?.filter(item => item !== locale ) || [];
    const linkPath = slug ?`/blog/${altSlug}` : "/blog"
    
    const { t } = useTranslation('common')
    const label = t('label');

    return (
        
        <Button leftIcon={<GrLanguage />} color="brand.black" backgroundColor="brand.secondary" variant='solid'>
            <Link href={linkPath} locale={altLocale}>
                {label}
            </Link>
        </Button>
        
    )
}

export async function getStaticProps(props){

  return {
      props: {
        ...props
      }
  }
}