import Image from 'next/image';
import PropTypes from 'prop-types';
import "@fontsource/mukta";
import { Heading, Flex, Box } from '@chakra-ui/react';

export const CategoryInfo = (props) => {
    const { name } = props;

    return (
     
        <Flex 
            direction="column" 
            gap="2rem" 
            justify="center"
            gridArea= "categoryInfo" 
            padding="3rem" 
            color="brand.black"
            width="300"
       
        >
        
            {/* Imagen de la categoría */}
        
            <Box position={"relative"} height="18rem">
                {/* <Image
                    src={ thumbnail.url }
                    alt={ thumbnail.title }
                    fill = "true"
                    blurDataURL={ thumbnail.url }
                    placeholder = 'blur'  
                /> */}
            </Box>

            
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