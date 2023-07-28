import { Text } from "@chakra-ui/react";

export const BreadCrumb = (props) => {
    const { name } = props || {};

    return (
        <>
            <Text> 
                &gt;
            </Text>

            <Text color={"brand.tertiary"}> 
                { name  }
            </Text>
        </>
    )
}
