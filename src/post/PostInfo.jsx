import { GridItem, Heading, Flex, Text } from '@chakra-ui/react';
import useTranslation from "next-translate/useTranslation";
import { dateFormat } from '@/helpers';
import { CategoryItem } from '@/categories';

export const PostInfo = (props) => {
    const { titleES, titleEN, slugES, slugEN, author, readingTime, thumbnail, creationDate, category } = props;

    const { t } = useTranslation('post');
    
    const postTitle = t('title', { titleES, titleEN });
    const postSlug = t('slug', { slugES, slugEN });

    const date = t('date');
    const auth = t('author');

    return (
        <GridItem area={ "postInfo"} display={"flex"} flexDirection={"column"} gap={"1rem"} >
            <Heading as='h1' fontSize={"3xl"}>
                { postTitle }
            </Heading>
            
            <Flex direction="row" gap="2rem" >
                <Text>
                        { dateFormat(creationDate) }
                </Text>
                <Text>
                    {/* { `${ auth }${ author.fullName }` } */}
                </Text>
                <Text >
                    {readingTime} min
                </Text>
            </Flex>

            <CategoryItem { ...category }/>

        </GridItem>
    )
}
