import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody,Text, Flex, Box } from '@chakra-ui/react';
import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import { dateFormat } from '@/helpers/dateFormat';
import { AuthorTag } from '@/ui';
import PropTypes from 'prop-types';
import "@fontsource/mukta";

export const PostCard = (props) => {
    const { title, slug, readingTime, thumbnail, creationDate } = props;
   
    return (
        <Card  bg="brand.primary" border="none" shadow="none" flex={"0 0 calc(33.33% - 2rem)"}>
            <CardBody display="flex" gap="1rem" flexDirection="column" padding={"0"} >
                <Link href={`/blog/${ slug }`}>
                    {/* Imagen del post */}
                    <Box width="100%" position={"relative"} height="18rem">
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
                <Flex direction="column" gap="1rem" color={"brand.gray"}>
                    {/* Titulo */}
                    <Link href={`/blog/${ slug }`}>
                        <Text fontSize='xl' textAlign={"justify"} fontFamily="mukta">
                        { title }
                        </Text>
                    </Link>
                    <Flex direction="row" gap="1rem" >
                        {/* Nombre del autor */}
                        <AuthorTag {...props} />

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
    creationDate: PropTypes.string.isRequired,
}