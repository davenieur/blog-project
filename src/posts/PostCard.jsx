import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody,Text, Flex, Box } from '@chakra-ui/react';
import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import { dateFormat } from '@/helpers/dateFormat';
import useTranslation from 'next-translate/useTranslation'
import { AuthorTag } from '@/ui';

export const PostCard = (props) => {
    const { title, altTitle, slug, altSlug, author, readingTime, thumbnail, creationDate } = props;
 
    // Traducir el contenido de la carta
    const { t } = useTranslation('post');
    
    const postTitle = t('title', { titleES: title, titleEN: altTitle });
    const postSlug = t('slug', { slugES: slug, slugEN: altSlug });
    
    return (
        <Card  bg="brand.primary" border="none" shadow="none" flex={"0 0 calc(33.33% - 2rem)"}>
            <CardBody display="flex" gap="1rem" flexDirection="column" padding={"0"} >
                <Link href={`/blog/${ postSlug }`}>
                    {/* Imagen del post */}
                    <Box width="100%" position={"relative"} height="18rem">
                        <Image
                            src={ thumbnail.url }
                            alt={ thumbnail.title }
                            fill = "true"
                            blurDataURL={ thumbnail.url }
                            placeholder = 'blur'  
                        />
                    </Box>
                </Link>
                {/* Información del post */}
                <Flex direction="column" gap="1rem" color={"brand.gray"}>
                    {/* Titulo */}
                    <Link href={`/blog/${ postSlug }`}>
                        <Text fontSize='xl' textAlign={"justify"}>
                        { postTitle }
                        </Text>
                    </Link>
                    <Flex direction="row" gap="1rem" >
                        {/* Nombre del autor */}
                        <AuthorTag {...props} />

                        {/* Fecha de publicación */}
                        <Flex direction="row" align="center" gap=".5rem">
                            <CalendarIcon />
                            
                            <Text>
                                { dateFormat(creationDate) }
                            </Text>
                        </Flex>
                        

                        {/* Tiempo de lectura */}
                        <Flex direction="row" align="center" gap=".5rem">
                            <TimeIcon />

                            <Text >
                                {readingTime} min 
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    )
}
