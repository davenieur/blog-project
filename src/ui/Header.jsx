import { GridItem } from "@chakra-ui/react"

export const Header = (props) => {
    const { header } = props;

    return (
        <GridItem as="header" p={"2rem"} >
            {header}
        </GridItem>
    )
}
