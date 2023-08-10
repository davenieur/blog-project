import { useState } from "react"
import { Flex, IconButton, Text} from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export const Pagination = ({ totalPages, currentPage, incrementOffset, decrementOffset }) => {
    return (
            <Flex grid-area={"pages"} align={"center"} justify={"flex-end"} direction={"row"} gap={"1rem"} width="12rem">
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
