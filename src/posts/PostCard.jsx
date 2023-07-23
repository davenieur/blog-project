import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody,Text, Flex } from '@chakra-ui/react';
import { dateFormat } from '@/helpers/dateFormat';
import useTranslation from 'next-translate/useTranslation'

export const PostCard = (props) => {
    const { titleEN, titleES, author, readingTime, thumbnail, slugEN, slugES, creationDate } = props;
    const { t } = useTranslation('blog');
    
    const title = t('title', {titleES: titleES, titleEN: titleEN})

    // const { t } = useTranslation('common')
    // const label = t('label');

    return (
        <Card width="30em" bg="brand.primary" border="none" shadow="none">
            <CardBody display="flex" gap="1rem" flexDirection="column">
                <Link href={"/"}>
                    <Image
                        src={thumbnail.url}
                        alt={thumbnail.title}
                        priority={true} 
                        width={500} 
                        height={600} 
                    />
                
                </Link>
                
                <Flex direction="column" gap="1rem" color={"brand.gray"}>
                    <Text fontSize='xl'>
                       {title}
                    </Text>

                    <Flex direction="row" gap="1rem" >
                        <Text>
                            Fecha: { dateFormat(creationDate) }
                        </Text>
                        <Text>
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
