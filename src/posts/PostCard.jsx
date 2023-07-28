import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody,Text, Flex } from '@chakra-ui/react';
import { dateFormat } from '@/helpers/dateFormat';
import useTranslation from 'next-translate/useTranslation'

export const PostCard = (props) => {
    const { titleES, titleEN, slugES, slugEN, author, readingTime, thumbnail, creationDate } = props;

    const { t } = useTranslation('post');
    
    const postTitle = t('title', { titleES, titleEN });
    const postSlug = t('slug', { slugES, slugEN });

    const date = t('date');

    return (
        <Card width="30em" bg="brand.primary" border="none" shadow="none">
            <CardBody display="flex" gap="1rem" flexDirection="column">
                <Link href={`/blog/${ postSlug }`}>
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
                       {postTitle}
                    </Text>

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
