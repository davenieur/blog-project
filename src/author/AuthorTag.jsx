import Link from "next/link";
import PropTypes from 'prop-types';
import { Avatar, Flex, Text } from "@chakra-ui/react";
import "@fontsource/mukta";

export const AuthorTag = ( props ) => {
    const { author, locale } = props;
    return (
        <Link href={`/blog/author/${ author.slug }`} locale={ locale } >
            <Flex 
                backgroundColor="brand.primary"
                color="brand.gray"
                fontWeight="bold" 
                transition=".5s"
                width="fit-content" 
                padding=".5rem 1rem" 
                borderRadius="1rem" 
                align="center"
                _hover={{ backgroundColor: "brand.tertiary", color: "brand.primary"  }}
            >
                <Avatar
                    src={ author.photo.url }
                    size='xs'
                    name= { author.fullName }
                    ml={-1}
                    mr={2}
                    alt= {`${ author.fullName } avatar`}
                />
                <Text fontSize="sm" fontFamily="mukta">{ author.fullName } </Text>
            </Flex>
        </Link>
    )
}

AuthorTag.propTypes = {
    author: PropTypes.object.isRequired,
    locale: PropTypes.string 
}