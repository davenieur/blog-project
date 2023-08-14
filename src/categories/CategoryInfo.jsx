import Image from 'next/image';
import PropTypes from 'prop-types';
import "@fontsource/mukta";
import { GridItem, Heading, Flex } from '@chakra-ui/react';

export const CategoryInfo = (props) => {
    const { name, thumbnail } = props;

    return (
        <GridItem 
            area= "categoryInfo" 
            display="flex" 
            flexDirection="column" 
            gap="1rem"  
            padding="3rem" 
            color="brand.black"
            
        >
            <Flex direction="column" gap="2rem" align="center">
                {/* Imagen de la categoría */}
                
                    <Image
                        src={ thumbnail.url }
                        alt={ thumbnail.title }
                        width="200"
                        height="200"
                    />
            

                <Flex direction="column" gap="2rem" width="80%" textAlign="center" align="center">
                    {/* Nombre de la categoría */}
                    <Heading as='h1' fontSize="4xl" fontFamily="mukta" color="brand.gray" >
                        { name }
                    </Heading>

                </Flex>
            </Flex>

           
        </GridItem>
    )
}

CategoryInfo.propTypes = {
    thumbnail: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired
}