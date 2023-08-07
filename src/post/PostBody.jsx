import { Flex, Heading, Text } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';



const options = {
    renderMark: {
        [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children, id = 1) => <Heading as="h2" color="brand.tertiary" fontSize="3xl" id={id}>{children}</Heading>,
      [BLOCKS.PARAGRAPH]: (node, children) => <Text fontSize="md">{children}</Text>
    },
  };


export const PostBody = (props) => {
    const { body } = props;
    console.log(body);

    return (
        <Flex  alignSelf="center" gridArea="postBody" direction={"column"} gap={"2rem"} fontSize="lg"  padding="2rem" >

            { documentToReactComponents(body.json, options )}

        </Flex>
        
    )
}
