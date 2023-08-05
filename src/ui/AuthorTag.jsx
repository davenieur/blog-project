import { Avatar, Tag, TagLabel } from "@chakra-ui/react";
import Link from "next/link";

export const AuthorTag = ( props ) => {
    
    const { author, locale } = props;
    return (
        <Link href={`/blog`} locale={ locale } >
            <Tag size='lg' bg={"brand.secondary"} color={"brand.black"} fontWeight="bold" borderRadius='full'>
                <Avatar
                    src={ author.photo.url }
                    size='xs'
                    name='Segun Adebayo'
                    ml={-1}
                    mr={2}
                />
                <TagLabel>{ author.fullName } </TagLabel>
            </Tag>
        </Link>
        
    )
}
