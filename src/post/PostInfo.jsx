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
    const { title, readingTime, featuredImage, creationDate, category, thumbnail, locale, postUrl } = props;

    const gridTemplateAreas = useBreakpointValue({
        base: `
            "postImage"
            "info"
        `,
        md: `
            "postImage"
            "info" 
        `,
        lg: `
            "postImage"
            "info" 
        `,
        xl: `
            "info postImage"
            "info  postImage"
        `
    });

    const imageHeight=  useBreakpointValue({ base: 100, md: 450, lg: 450, xl: 350 });
    const imageWidth=  useBreakpointValue({ base:  "100%", md: "100%", lg:"100", xl: 450 });

    const fontSize = useBreakpointValue({ base: "sm", md: "md", lg: "md", xl: "md" });
    const flexDirection = useBreakpointValue({ base: "column", md: "row", lg: "row", xl: "row"});

    const titleFontSize = useBreakpointValue({ base: "2xl", md: "4xl", lg: "4xl", xl: "4xl" });
    const gridTemplateColumns = useBreakpointValue({ base: "100%", md: "100%", lg: "100%", xl: ".7fr .5fr"})

    return (
        <GridItem 
            display="grid"
            gridTemplateAreas={ gridTemplateAreas }
            area= "postInfo"
            gap="2rem"  
            color="brand.black"
            gridTemplateColumns= { gridTemplateColumns }
        >
            <Flex direction="column" gap="2rem" gridArea="info">
                {/* Nombre del post */}
                <Heading as='h1' fontSize={ titleFontSize} fontFamily="mukta" color="brand.black" >
                    { title }
                </Heading>
                
                <Flex direction={ flexDirection } gap="1rem">
                    
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

                {/* Categoría del post */}
                <Box 
                    backgroundColor="brand.secondary" 
                    color="brand.black" 
                    width="fit-content" 
                    padding=".5rem 1rem" 
                    borderRadius="1rem" 
                    fontSize={ fontSize }
                >
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
            <Box position="relative" width= { imageWidth } height={ imageHeight } gridArea="postImage">
                <Image
                    src={ featuredImage.url }
                    alt={ featuredImage.title }
                    objectFit="cover"
                    layout="fill"
                />
            </Box>

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