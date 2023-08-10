import { Flex, Divider } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderOptions } from '../../contentful/renderOptions';
import PropTypes from 'prop-types';

export const PostBody = (props) => {
    const { body } = props;

    
    return (
        <Flex gridArea="postBody" direction={"column"}>
             <Flex  alignSelf="center"  direction={"column"} gap={"2rem"} fontSize="lg"  padding="2rem" >

                { documentToReactComponents(body.json, renderOptions )}

            </Flex>

            {/* Divider */}
            <Divider orientation='horizontal' variant="thick"/>
        </Flex>
    )
}

PostBody.propTypes = {
  body: PropTypes.object.isRequired
}