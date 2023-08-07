
import useTranslation from "next-translate/useTranslation"
import { Flex, Icon, Text, Tooltip, useToast } from "@chakra-ui/react"
import { Link } from '@chakra-ui/react'
import { LiaLinkedin, LiaTwitterSquare, LiaFacebookSquare } from "react-icons/lia"
import { BiLink } from "react-icons/bi"


export const ShareMenu = (props) => {
    const { postSlug } = props;
    
    // Traducir el label del menú para compartir
    const { t } = useTranslation('share')
    const label = t('share');
    const toolTip = t('link');
    const clip = t('clip');
    const title = t('title');
    const message= t('message');

    // Notificación que aparece al dar click en el botón del clipboard
    const toast = useToast();
    const id = 'clipBoard'

    const copyURLToClipboard = () => {
        const url = location.href;
        navigator.clipboard.writeText(url);
        if (!toast.isActive(id)) {
            toast({
                title: title,
                description: message,
                status: 'success',
                duration: 1000,
                isClosable: true,
            })
        }
    };

    return (
        <Flex direction={"row"} alignItems={"center"} gap={"1rem"} color={"brand.gray"} > 
            <Text>
                { label }
            </Text>

            {/* LinkedIn */}
            <Tooltip label={`${ toolTip } LinkedIn`} aria-label='A tooltip'>
                <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=https://blog-project-rho-ten.vercel.app/blog/${ postSlug }`}  isExternal>
                    <Icon as={ LiaLinkedin } boxSize={"2rem"} /> 
                </Link>
            </Tooltip>

            {/* Facebook */}
            <Tooltip label={`${ toolTip } Facebook`} aria-label='A tooltip'>
                <Link  href={`https://www.facebook.com/sharer/sharer.php?u=https://blog-project-rho-ten.vercel.app/blog/${ postSlug }`} isExternal>
                    <Icon as={ LiaFacebookSquare } boxSize={"2rem"}/> 
                </Link>
            </Tooltip>

            {/* Twitter */}
            <Tooltip label={`${ toolTip } Twitter`} aria-label='A tooltip'>
                <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=https://blog-project-rho-ten.vercel.app/blog/${ postSlug }`}  isExternal>
                    <Icon as={  LiaTwitterSquare } boxSize={"2rem"}/> 
                </Link>
            </Tooltip>

            {/* Copy to clipboard */}
            <Tooltip label={ clip } aria-label='A tooltip'>
                <span>
                    <Icon as={ BiLink } boxSize={"2rem"} cursor="pointer" onClick={ copyURLToClipboard } /> 
                </span>
            </Tooltip>
           

           

           
            
        </Flex>
    )
}
