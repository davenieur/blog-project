import { useEffect, useState } from "react"
import useTranslation from "next-translate/useTranslation"
import { Flex, Icon, Text, Tooltip, useToast } from "@chakra-ui/react"
import { LiaLinkedin, LiaTwitterSquare, LiaFacebookSquare } from "react-icons/lia"
import { BiLink } from "react-icons/bi"


export const ShareMenu = (props) => {
    const { postSlug } = props;
    const [ postUrl, setPostUrl ] = useState('');

    useEffect(() => {
        setPostUrl(window.location.href);
    }, [ postSlug ])

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

    // Función para copiar la dirección en el portapapeles
    const copyURLToClipboard = (url) => {
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

    // Abrimos los popups de las redes sociales
    const openPopup = (url) => {
        window.open(url, '_blank', 'width=500,height=400'); 
    };

    // Links de las redes sociales que incluye el slug del post
    const linkedInLink = `https://www.linkedin.com/sharing/share-offsite/?url=${ postUrl }`;
  
    const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${ postUrl }`;
    const twitterLink = `https://twitter.com/intent/tweet?url=${ postUrl }`

    return (
        <Flex direction={"row"} alignItems={"center"} gap={"1rem"} color={"brand.gray"} > 
            <Text>
                { label }
            </Text>

            {/* LinkedIn */}
            <Tooltip label={`${ toolTip } LinkedIn`} aria-label='A tooltip'>
               
                <span>
                    <Icon as={ LiaLinkedin } boxSize={"2rem"} onClick={() => openPopup( linkedInLink )} cursor="pointer" />
                </span>
            </Tooltip>

            {/* Facebook */}
            <Tooltip label={`${ toolTip } Facebook`} aria-label='A tooltip'>
                <span>
                    <Icon as={ LiaFacebookSquare} boxSize={"2rem"} onClick={() => openPopup( facebookLink )} cursor="pointer" />
                </span>
            </Tooltip>

            {/* Twitter */}
            <Tooltip label={`${ toolTip } Twitter`} aria-label='A tooltip'>
                <span>
                    <Icon as={  LiaTwitterSquare } boxSize={"2rem"} onClick={() => openPopup( twitterLink )} cursor="pointer" /> 
                </span>       
            </Tooltip>

            {/* Copy to clipboard */}
            <Tooltip label={ clip } aria-label='A tooltip'>
                <span>
                    <Icon as={ BiLink } boxSize={"2rem"} cursor="pointer" onClick={()  => copyURLToClipboard(postUrl) } /> 
                </span>
            </Tooltip>
           

           

           
            
        </Flex>
    )
}
