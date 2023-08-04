import { useState } from "react"
import { Flex, IconButton} from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export const Pagination = ( { totalPosts }) => {

    const [ currentPage, setPage ] = useState(1)

    const totalPages = Math.ceil(totalPosts / 3);

    const handleLeft = () => {
        setPage((currentPage) => (currentPage > 1 ? currentPage - 1 : totalPages ));
    }

    const handleRight = () => {
        setPage((currentPage) => (currentPage < totalPages  ? currentPage + 1 : 1));
    }

    return (
        
            <Flex grid-area={"pages"} align={"center"} justify={"flex-end"} direction={"row"} gap={"1rem"}>
                <IconButton
                    isRound={true}
                    variant='solid'
                    background={"brand.gray"}
                    color={"brand.primary"}
                    aria-label='Back '
                    fontSize='1rem'
                    icon={<ArrowBackIcon />}
                    _hover={{ backgroundColor: "brand.pink"}}
                    onClick={ handleLeft }
                    
                />
               
                { currentPage } / { totalPages } 

                <IconButton
                    isRound={true}
                    variant='solid'
                    background={"brand.gray"}
                    color={"brand.primary"}
                    aria-label='Foward'
                    fontSize='1rem'
                    icon={<ArrowForwardIcon />}
                    _hover={{ backgroundColor: "brand.pink"}}
                    onClick={ handleRight }

                />


            </Flex>
    )
}
