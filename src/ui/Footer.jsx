import { GridItem } from "@chakra-ui/react"

export const Footer = (props) => {
    const { footer } = props;
    
    return (
        <GridItem as="footer" bg="brand.footer" area={'footer'} padding="2rem" display="flex" justifyContent="center" alignItems="center">
          {footer}
        </GridItem>
    )
}
