import { Flex } from '@chakra-ui/react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const PostBody = (props) => {
    const { body } = props;
    return (
        <Flex  gridArea="postBody" direction={"column"} gap={"2rem"} fontSize="lg" >

            { documentToReactComponents(body.json )}

        </Flex>
        
    )
}
