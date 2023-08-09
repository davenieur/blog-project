import Link from "next/link";
import PropTypes from 'prop-types';
import { Avatar, Tag, TagLabel } from "@chakra-ui/react";

export const AuthorTag = ( props ) => {
    
    const { author, locale } = props;
    return (
        <Link href={`/blog`} locale={ locale } >
            <Tag size='lg' bg={"brand.gray"} color={"brand.primary"} fontWeight="bold" borderRadius='full'>
                <Avatar
                    src={ author.photo.url }
                    size='xs'
                    name= { author.fullName }
                    ml={-1}
                    mr={2}
                    alt= {`${ author.fullName } avatar`}
                />
                <TagLabel>{ author.fullName } </TagLabel>
            </Tag>
        </Link>
    )
}

AuthorTag.propTypes = {
    author: PropTypes.object.isRequired,
    locale: PropTypes.string 
}