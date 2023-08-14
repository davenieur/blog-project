import Image from 'next/image';
import PropTypes from 'prop-types';
import "@fontsource/mukta";
import { GridItem, Heading, Flex } from '@chakra-ui/react';

export const CategoryInfo = (props) => {
    const { name, thumbnail } = props;

    return (
     
        <Flex 
            direction="column" 
            gap="2rem" 
            justify="center"
            gridArea= "categoryInfo" 
            padding="3rem" 
            color="brand.black"
            width="300"
            align="center"
       
        >
        
            {/* Imagen de la categoría */}
  
            <Image
                src={ thumbnail.url }
                alt={ thumbnail.title }
                width="300"
                height="300"
            /> 

            
            {/* Nombre de la categoría */}
            <Heading as='h1' fontSize="4xl" fontFamily="mukta" color="brand.gray" textAlign="center">
                { name }
            </Heading>

        
        </Flex>
    )
}

CategoryInfo.propTypes = {
    // thumbnail: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired
}