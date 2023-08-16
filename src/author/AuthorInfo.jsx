import Image from 'next/image';
import PropTypes from 'prop-types';
import "@fontsource/mukta";
import { Heading, Flex, useBreakpointValue, Grid, Box } from '@chakra-ui/react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderOptions } from '../../contentful/renderOptions';

export const AuthorInfo = (props) => {
    const { fullName, photo, biography } = props;

    const gridTemplateAreas = useBreakpointValue({
        base: `
            "authorImage"
            "info"
        `,
        md: `
            "authorImage"
            "info " 
        `,
        lg: `
            "authorImage"
            "info"
        `,
        xl: `
            "authorImage info"
            "authorImage  info"
        `
    });

    const imageHeight=  useBreakpointValue({ base: 260, md: 550, lg: 350, xl: 350 });
    const imageWidth=  useBreakpointValue({ base: "100%", md: "100%", lg:300, xl: 350 });

    const titleFontSize = useBreakpointValue({ base: "2xl", md: "4xl", lg: "4xl", xl: "4xl" });
    const gridTemplateColumns = useBreakpointValue({ base: "100%", md: "100%", lg: "100%", xl: ".4fr .5fr"})

    return (
    
        <Grid
            gridArea= "authorInfo" 
            gridTemplateAreas={ gridTemplateAreas }
            gap="2rem" 
            color="brand.black"
            gridTemplateColumns= { gridTemplateColumns }
          
        >
            

            {/* Imagen del autor */}
            <Box position="relative" width= { imageWidth } height={ imageHeight } gridArea="authorImage">
                <Image
                    src={photo.url}
                    alt={ photo.title }
                    objectFit="cover"
                    layout="fill"
                />
            </Box>
          
            <Flex direction="column" gap="2rem" width="80%" textAlign="justify">
                {/* Nombre del autor */}
                <Heading as='h1' fontSize= { titleFontSize } fontFamily="mukta" color="brand.black" >
                    { fullName }
                </Heading>

                {/* Biografía del autor */}
                { documentToReactComponents(biography.json, renderOptions() )}
            </Flex>
        </Grid>
    )
}

AuthorInfo.propTypes = {
    fullName: PropTypes.string.isRequired,
    photo: PropTypes.object.isRequired,
    biography: PropTypes.object.isRequired
}