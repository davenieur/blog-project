import { GridItem, Flex } from "@chakra-ui/react"
import { LanguageToggle } from "./LanguageToggle";

export const Header = (props) => {
    const { header } = props;

    return (
        <GridItem as="header" padding="2rem 4rem"  width={"100vw"}>
            <Flex justifyContent="space-between" alignItems="center">
                {/* Colocar {header} a la izquierda */}
                {header}

                {/* Colocar LanguageToggle a la derecha */}
                <LanguageToggle />
            </Flex>
        </GridItem>
    )
}
