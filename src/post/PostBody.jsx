import { Flex, Heading, Text, Divider } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

const options = {
    renderMark: {
        [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children ) => {
        // Asignamos un ID a cada uno de los headers
        const headerId = node.content[0].value.replace(/\s+/g, '-').toLowerCase();
        return <Heading as="h2" id={ headerId } color="brand.gray" fontSize="3xl">{children}</Heading>
      },
      
      [BLOCKS.PARAGRAPH]: (node, children) => <Text fontSize="md">{children}</Text>
    },
  };


export const PostBody = (props) => {
    const { body } = props;
    const content = body.json.content
    
    return (
        <Flex gridArea="postBody" direction={"column"}>
             <Flex  alignSelf="center"  direction={"column"} gap={"2rem"} fontSize="lg"  padding="2rem" >

                { documentToReactComponents(body.json, options )}

            </Flex>

            {/* Divider */}
            <Divider orientation='horizontal' variant="thick"/>
        </Flex>

       
        
    )
}
