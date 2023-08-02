import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody,Text, Flex, Box } from '@chakra-ui/react';
import { dateFormat } from '@/helpers/dateFormat';
import useTranslation from 'next-translate/useTranslation'

export const PostCard = (props) => {
    const { title, altTitle, slug, altSlug, author, readingTime, thumbnail, creationDate } = props;
 
    // Traducir el contenido de la carta
    const { t } = useTranslation('post');
    
    const postTitle = t('title', { titleES: title, titleEN: altTitle });
    const postSlug = t('slug', { slugES: slug, slugEN: altSlug });
    const date = t('date');

    return (
        <Card display="flex" width="30%" bg="brand.primary" border="none" shadow="none" >
            <CardBody display="flex" gap="1rem" flexDirection="column" padding={"0"} >
                <Link href={`/blog/${ postSlug }`}>
                    <Box width="100%">
                        <Image
                            src={ thumbnail.url }
                            alt={ thumbnail.title }
                            width={ 300 }
                            height={ 200 }
                            blurDataURL={ thumbnail.url }
                            placeholder = 'blur'  
                        />
                    </Box>
                </Link>
                
                <Flex direction="column" gap="1rem" color={"brand.gray"}>
                    <Link href={`/blog/${ postSlug }`}>
                        <Text fontSize='xl' textAlign={"justify"}>
                        { postTitle }
                        </Text>
                    </Link>
                    <Flex direction="row" gap="1rem" >
                        <Text>
                             { `${date}${dateFormat(creationDate)}` }
                        </Text>
                        <Text color={"brand.pink"}>
                            {author.fullName}
                        </Text>
                        <Text >
                            {readingTime} min
                        </Text>
                    </Flex>
                    
                </Flex>
            </CardBody>
        </Card>
    )
}
