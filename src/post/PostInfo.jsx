import { GridItem, Heading, Flex, Text, Divider, Tag, TagLabel, Avatar, Box } from '@chakra-ui/react';
import useTranslation from "next-translate/useTranslation";
import { dateFormat } from '@/helpers';
import { CategoryItem } from '@/categories';
import { ShareMenu } from '.';
import Image from 'next/image';

export const PostInfo = (props) => {
    // const { titleES, titleEN, slugES, slugEN, author, readingTime, featuredImage, creationDate, category, thumbnail } = props;
    const { title, altTitle, slug, altSlug, author, readingTime, featuredImage, creationDate, category, thumbnail } = props;


    // Traducimos el contenido del post
    // const { t } = useTranslation('post');
    // const postTitle = t('title', { titleES, titleEN });
    // const postSlug = t('slug', { slugES, slugEN });

    // const date = t('date');
    // const auth = t('author');

    return (
        <GridItem area={ "postInfo"} display={"flex"} alignItems={"center"} justifyContent="center" flexDirection={"row"} gap={"2rem"} >
            <Flex direction={"column"} gap={"2rem"} padding={"2rem"} width={"fit-content"}>
                <Heading as='h1' fontSize={"4xl"}>
                    { title }
                </Heading>
                
                <Flex direction="row" gap="2rem" fontSize={"xl"} align={"center"}>
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
                    postSlug={ slug }
                    thumbnail={ thumbnail }
                />
            </Flex>

          
            {/* Imagen del post */}
            <Image
                src={ featuredImage.url }
                alt={ featuredImage.title }
                width={500}
                height={300}
                loading='eager'
                
            />
        </GridItem>
    )
}
