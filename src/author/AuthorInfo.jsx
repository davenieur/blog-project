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
            "authorImage authorImage"
            "info  info"
        `,
        md: `
            "authorImage authorImage"
            "info  info" 
        `,
        lg: `
            "authorImage info"
            "authorImage  info"
        `,
        xl: `
            "authorImage info"
            "authorImage  info"
        `
    });

    return (
    
        <Grid
            gridArea= "authorInfo" 
            gridTemplateAreas={ gridTemplateAreas }
            gap="2rem" 
            color="brand.black"
        >
            

            {/* Imagen del autor */}
            <Box gridArea="authorImage">
                <Image src={photo.url} alt={ photo.title } width={ 500 } height={ 300 } objectFit="cover" />
            </Box>
          
            <Flex direction="column" gap="2rem" width="80%" textAlign="justify">
                {/* Nombre del autor */}
                <Heading as='h1' fontSize="4xl" fontFamily="mukta" color="brand.black" >
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