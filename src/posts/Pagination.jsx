import { Flex, IconButton, Text} from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import PropTypes from 'prop-types';

export const Pagination = ({ totalPages, currentPage, incrementOffset, decrementOffset }) => {
    return (
        <Flex grid-area="pages" align="center" justify="center" direction="row" gap="1rem" width="30rem">
            <IconButton
                isRound={true}
                variant='solid'
                background={"brand.gray"}
                color={"brand.primary"}
                aria-label='Back '
                fontSize='1.25rem'
                icon={<ArrowBackIcon />}
                _hover={{ backgroundColor: "brand.pink"}}
                onClick={ decrementOffset }
                
            />

            <Text>
                { currentPage } / { totalPages } 
            </Text>
            

            <IconButton
                isRound={true}
                variant='solid'
                background={"brand.gray"}
                color={"brand.primary"}
                aria-label='Foward'
                fontSize='1.25rem'
                icon={<ArrowForwardIcon />}
                _hover={{ backgroundColor: "brand.pink"}}
                onClick={  incrementOffset }

            />
        </Flex>
    )
}

Pagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    incrementOffset: PropTypes.func.isRequired,
    decrementOffset: PropTypes.func.isRequired,
}