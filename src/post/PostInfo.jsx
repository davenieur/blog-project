import Image from 'next/image';
import PropTypes from 'prop-types';
import "@fontsource/mukta";
import { GridItem, Heading, Flex, Text, Divider, Box, useBreakpointValue } from '@chakra-ui/react';
import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import { CategoryItem } from '@/categories';
import { dateFormat } from '@/helpers';
import { AuthorTag } from '@/author';
import { ShareMenu } from '.';

export const PostInfo = (props) => {
    const { title, author, readingTime, featuredImage, creationDate, category, thumbnail, locale, postUrl } = props;

    const gridTemplateAreas = useBreakpointValue({
        base: `
            "postImage postImage"
            "info  info"
        `,
        md: `
            "postImage postImage"
            "info  info" 
        `,
        lg: `
            "postImage postImage"
            "info  info" 
        `,
        xl: `
            "info postImage"
            "info  postImage"
        `
    });

    return (
        <GridItem 
            display="grid"
            gridTemplateAreas={ gridTemplateAreas }
            area= "postInfo"
            gap="5rem"  
            padding="3rem" 
            color="brand.black"
          
        >
            <Flex direction="column" gap="2rem" gridArea="info">
                {/* Nombre del post */}
                <Heading as='h1' fontSize="4xl" fontFamily="mukta" color="brand.black" >
                    { title }
                </Heading>
                
                <Flex direction="row" gap="2rem" fontSize="md" align="center" fontWeight="light">

                    {/* Datos del autor */}
                    <AuthorTag
                        author = { author }
                        locale = { locale }
                    />
                    
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

                {/* Categoría del post */}
                <Box backgroundColor="brand.secondary" color="brand.black" width="fit-content" padding=".5rem 1rem" borderRadius="1rem" fontSize="md">
                    <CategoryItem { ...category }/>
                </Box>
                
                {/* Divider */}
                <Divider orientation='horizontal' variant="thick"/>

                {/* Menú para compartir el blog */}
                <ShareMenu 
                    postUrl={ postUrl }
                    thumbnail={ thumbnail }
                />
            </Flex>

          
            {/* Imagen del post */}
            <Flex width="30rem" position="relative" height="20rem" align="center" justify="center" gridArea="postImage">
                <Image
                    src={ featuredImage.url }
                    alt={ featuredImage.title }
                    width="500"
                    height="500"  
                />
            </Flex>
        </GridItem>
    )
}

PostInfo.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired, 
    readingTime: PropTypes.number.isRequired, 
    featuredImage: PropTypes.object.isRequired, 
    creationDate: PropTypes.string.isRequired, 
    category: PropTypes.object.isRequired, 
    thumbnail: PropTypes.object.isRequired, 
    locale: PropTypes.string.isRequired,
    postUrl: PropTypes.string.isRequired,
}