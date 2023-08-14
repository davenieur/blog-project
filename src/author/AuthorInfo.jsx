import Image from 'next/image';
import PropTypes from 'prop-types';
import "@fontsource/mukta";
import { GridItem, Heading, Flex } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderOptions } from '../../contentful/renderOptions';

export const AuthorInfo = (props) => {
    const { fullName, photo, biography } = props;

    return (
    
        <Flex 
            direction="row" 
            gap="2rem" 
            align="flex-start"
            gridArea= "authorInfo" 
            display="flex" 
            alignItems="center" 
            flexDirection="row" 
            color="brand.black"
        >
            

            {/* Imagen del autor */}
            <Image
                src={ photo.url }
                alt={ photo.title }
                width="320"
                height="320"
            />
        

            <Flex direction="column" gap="2rem" width="80%" textAlign="justify">
                {/* Nombre del autor */}
                <Heading as='h1' fontSize="4xl" fontFamily="mukta" color="brand.black" >
                    { fullName }
                </Heading>

                {/* Biografía del autor */}
                { documentToReactComponents(biography.json, renderOptions() )}
            </Flex>
        </Flex>
    )
}

AuthorInfo.propTypes = {
    fullName: PropTypes.string.isRequired,
    photo: PropTypes.object.isRequired,
    biography: PropTypes.object.isRequired,
    locale: PropTypes.string.isRequired,
}