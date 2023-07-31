import { GridItem, Heading, Flex, Text, Divider, Tag, TagLabel, Avatar } from '@chakra-ui/react';
import useTranslation from "next-translate/useTranslation";
import { dateFormat } from '@/helpers';
import { CategoryItem } from '@/categories';
import { ShareMenu } from '.';
import Image from 'next/image';

export const PostInfo = (props) => {
    const { titleES, titleEN, slugES, slugEN, author, readingTime, featuredImage, creationDate, category, thumbnail } = props;
    console.log(author)
    const { t } = useTranslation('post');
    
    const postTitle = t('title', { titleES, titleEN });
    const postSlug = t('slug', { slugES, slugEN });

    const date = t('date');
    const auth = t('author');

    return (
        <GridItem area={ "postInfo"} display={"flex"} flexDirection={"row"} gap={"2rem"} >
            <Flex direction={"column"} gap={"1.5rem"} >
                <Heading as='h1' fontSize={"3xl"}>
                    { postTitle }
                </Heading>
                
                <Flex direction="row" gap="2rem" fontSize={"sm"} align={"center"}>
                    <Tag size='lg' bg={"brand.tertiary"} color={"brand.primary"} borderRadius='full'>
                        <Avatar
                            src={ author.photo.url }
                            size='xs'
                            name='Segun Adebayo'
                            ml={-1}
                            mr={2}
                        />
                        <TagLabel>{ author.fullName } </TagLabel>
                    </Tag>

                    <Text>
                            { dateFormat(creationDate) }
                    </Text>

                    <Text >
                        {readingTime} min 
                    </Text>
                </Flex>

                <CategoryItem { ...category }/>

                <Divider orientation='horizontal' />

                <ShareMenu 
                    postSlug={ postSlug }
                    thumbnail={ thumbnail }
                />
            </Flex>

          

            <Flex width="20rem" alignItems={"center"} justify={"center"}>
                <Image
                    src={ featuredImage.url }
                    alt={ featuredImage.title }
                    width={300}
                    height={200}
                    placeholder = 'blur'  
                    blurDataURL={ featuredImage.url }
                />
            </Flex>
        </GridItem>
    )
}
