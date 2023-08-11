import Image from 'next/image';
import PropTypes from 'prop-types';
import "@fontsource/mukta";
import { GridItem, Heading, Flex, Text, Divider, Box } from '@chakra-ui/react';
import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import { CategoryItem } from '@/categories';
import { dateFormat } from '@/helpers';
import { AuthorTag } from '@/ui';
import { ShareMenu } from '.';

export const PostInfo = (props) => {
    const { title, author, readingTime, featuredImage, creationDate, category, thumbnail, locale, postUrl } = props;


    return (
        <GridItem area={ "postInfo"} display={"flex"} alignItems={"center"} justifyContent="center" flexDirection={"row"} gap={"5rem"}  padding={"3rem"} >
            <Flex direction={"column"} gap={"2rem"} width={"40%"}>
                {/* Nombre del post */}
                <Heading as='h1' fontSize={"4xl"} fontFamily="mukta">
                    { title }
                </Heading>
                
                <Flex direction="row" gap="2rem" fontSize={"md"} align={"center"} color={"brand.gray"}>
                    {/* Datos del autor */}
                    <AuthorTag author={ ...author } locale={ locale} />

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
            <Flex width="30%" position={"relative"} height={"20rem"} align="center" justify="center">
                <Image
                    src={ featuredImage.url }
                    alt={ featuredImage.title }
                    fill = "true"
                    blurDataURL={ featuredImage.url }
                    placeholder = 'blur'  
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