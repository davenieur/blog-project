import { Flex, Divider } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderOptions } from '../../contentful/renderOptions';
import PropTypes from 'prop-types';

export const PostBody = (props) => {
    const { body } = props;


    return (
        <Flex gridArea="postBody" direction={"column"} padding="4rem">
             <Flex   direction={"column"} gap={"2rem"} fontSize="lg"  >

                { documentToReactComponents(body.json, renderOptions(body.links) )}

            </Flex>

            {/* Divider */}
            <Divider orientation='horizontal' variant="thick"/>
        </Flex>
    )
}

PostBody.propTypes = {
  body: PropTypes.object.isRequired
}