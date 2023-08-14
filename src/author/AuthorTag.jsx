import Link from "next/link";
import PropTypes from 'prop-types';
import { Avatar, Flex, Text } from "@chakra-ui/react";
import "@fontsource/mukta";

export const AuthorTag = ( props ) => {
    const { author, locale } = props;
    return (
        <Link href={`/blog/author/${ author.slug }`} locale={ locale } >
            <Flex color="brand.gray" fontWeight="light" >
                <Avatar
                    src={ author.photo.url }
                    size='xs'
                    name= { author.fullName }
                    ml={-1}
                    mr={2}
                    alt= {`${ author.fullName } avatar`}
                />
                <Text fontSize="sm" fontSize="mukta">{ author.fullName } </Text>
            </Flex>
        </Link>
    )
}

AuthorTag.propTypes = {
    author: PropTypes.object.isRequired,
    locale: PropTypes.string 
}