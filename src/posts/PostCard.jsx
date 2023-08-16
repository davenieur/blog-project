import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody,Text, Flex, Box, useBreakpointValue } from '@chakra-ui/react';
import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import { dateFormat } from '@/helpers/dateFormat';
import { AuthorTag } from '@/author';
import PropTypes from 'prop-types';
import "@fontsource/mukta";
import { CategoryItem } from '@/categories';

export const PostCard = (props) => {
    const { title, slug, readingTime, thumbnail, creationDate, category, locale } = props;

    const fontSize = useBreakpointValue({ base: "sm", md: "md", lg: "md", xl: "md" });
    const flexDirection = useBreakpointValue({ base: "column", md: "row", lg: "row", xl: "row"});
    const imageHeight=  useBreakpointValue({ base: 250, md: 250, lg: 350, xl: 260 });

    return (
        <Card  bg="brand.primary" border="none" shadow="none" padding="0">
            <CardBody display="flex" flexDirection="column" gap="1rem" padding="0">
                {/* Imagen del post */}
                <Link href={`/blog/${ slug }`} locale={ locale }>
                    <Box position="relative" width="100%" height={ imageHeight }>
                        <Image
                            src={ thumbnail.url }
                            alt={ thumbnail.title }
                            objectFit="cover"
                            layout="fill"
                        />
                    </Box>
                </Link>
                
                <Flex direction= "column" gap="1rem" color="brand.gray" fontWeight="light">

                    {/* Categoría */}
                    <Box 
                        backgroundColor="brand.secondary" 
                        color="brand.primary" 
                        textAlign="center" 
                        padding=".5rem 1rem" 
                        transition=".25s"
                        _hover={{ backgroundColor: "brand.tertiary ", color: "brand.primary", }}
                        borderRadius=".5rem"
                        width="fit-content"
                        fontWeight="bold"
                        fontSize={ fontSize }
                    >
                        <CategoryItem name = { category.name } slug = { category.slug } locale = { locale } />
                    </Box>


                    {/* Titulo */}
                    <Link  href={`/blog/${ slug }`}  locale={ locale }>
                        <Text fontSize={ fontSize } textAlign={"justify"} fontFamily="mukta">
                            { title }
                        </Text>
                    </Link>
                    
                    {/* Información del post */}
                    <Flex direction={ flexDirection } gap="1rem" >
                        <Flex direction= { flexDirection} gap="1rem">
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

PostCard.propTypes = {
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    readingTime: PropTypes.number.isRequired,
    thumbnail: PropTypes.object.isRequired, 
    creationDate: PropTypes.string.isRequired
}