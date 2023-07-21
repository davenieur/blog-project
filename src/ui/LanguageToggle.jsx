import Link from "next/link";
import { Button } from '@chakra-ui/react';
import { GrLanguage } from "react-icons/gr"
import { useLocale } from "@/helpers/LocaleContext";

export const LanguageToggle = () => {
    const { locale, setLocale, slug, setSlug, altSlug, setAltSlug, languages, locales } = useLocale();
    const currentLanguage = languages[locale];
    const [altLocale]= locales?.filter(lang => lang !== currentLanguage?.route) || [];
    const altLanguage = languages[altLocale];
    const linkPath = slug ?`/${altSlug}` : `${slug}/`    
    
    // Cambiamos el estado
    const handleClick = () => {
        setLocale(altLanguage.locale);
        setAltSlug(slug);
        setSlug(altSlug);
    }

    return (
        
        <Button leftIcon={<GrLanguage />} color="brand.black" backgroundColor="brand.secondary" variant='solid' onClick={handleClick}>
            <Link href={linkPath} locale={altLanguage?.locale}>
                {altLanguage?.label}
            </Link>
        </Button>
        
    )
}
