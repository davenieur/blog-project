import { Flex, Heading } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';



const Bold = ({ children }) => <span className="bold">{children}</span>;

const options = {
    renderMark: {
        [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => <Heading as="h2" color="brand.secondary" fontSize="3xl">{children}</Heading>,
    },
  };


export const PostBody = (props) => {
    const { body } = props;
    return (
        <Flex  alignSelf="center" gridArea="postBody" direction={"column"} gap={"2rem"} fontSize="lg"  padding="2rem" >

            { documentToReactComponents(body.json, options )}

        </Flex>
        
    )
}
