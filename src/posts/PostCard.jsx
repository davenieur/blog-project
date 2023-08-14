import Image from 'next/image';

import { Card, CardBody,Text, Flex, Box, Link } from '@chakra-ui/react';
import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import { dateFormat } from '@/helpers/dateFormat';
import { AuthorTag } from '@/author';
import PropTypes from 'prop-types';
import "@fontsource/mukta";
import { CategoryItem } from '@/categories';

export const PostCard = (props) => {
    const { title, slug, readingTime, thumbnail, creationDate, category, locale } = props;
    
    return (
        <Card  bg="brand.primary" border="none" shadow="none" >
            <CardBody display="flex" flexDirection="column" padding="0">
                 {/* Categoría */}
                <Box 
                    backgroundColor="brand.secondary" 
                    color="brand.primary" 
                    textAlign="center" 
                    padding="1rem" 
                    _hover={{ backgroundColor: "brand.tertiary ", color: "brand.primary", transition: ".25s"}}
                >
                    <CategoryItem name = { category.name } slug = { category.slug } locale = { locale } />
                </Box>

                <Link href={`/blog/${ slug }`}>

                    {/* Imagen del post */}
                    <Box position={"relative"} height="14rem">
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
                <Flex direction="column" gap="1rem" color="brand.gray" height="100%" padding="1rem" fontWeight="light">
                    
                    <Flex direction="row" gap="1rem" justify="space-between">
                        {/* Nombre del autor */}
                        <AuthorTag {...props} />
                        
                        {/* Fecha de publicación */}
                        <Flex direction="row" align="center" gap=".5rem">
                            <CalendarIcon />
                            
                            <Text>
                                { dateFormat(creationDate) }
                            </Text>
                        </Flex>
                    </Flex>

                      {/* Titulo */}
                    <Link  href={`/blog/${ slug }`}>
                        <Text fontSize='lg' textAlign={"justify"} fontFamily="mukta">
                            { title }
                        </Text>
                    </Link>
              
                    {/* Tiempo de lectura */}
                    <Flex direction="row" align="center" gap=".5rem">
                        <TimeIcon />

                        <Text >
                            {readingTime} min 
                        </Text>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    )
}

PostCard.propTypes = {
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    readingTime: PropTypes.number.isRequired,
    thumbnail: PropTypes.object.isRequired, 
    creationDate: PropTypes.string.isRequired
}