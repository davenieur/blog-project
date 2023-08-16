import { Flex, Divider, useBreakpointValue } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderOptions } from '../../contentful/renderOptions';
import PropTypes from 'prop-types';

export const PostBody = (props) => {
    const { body } = props;

    const fontSize = useBreakpointValue({ base: "sm", md: "md", lg: "md", xl: "md" });
    const imageHeight =  useBreakpointValue({ base:  140, md: 300, lg: 350, xl: 600 });

    return (
        <Flex gridArea="postBody" direction={"column"} gap="2rem">
            <Flex direction={"column"} gap={"2rem"} fontSize={ fontSize }  >

                { documentToReactComponents(body.json, renderOptions(body.links, imageHeight) )}

            </Flex>

            {/* Divider */}
            <Divider orientation='horizontal' variant="thick"/>
        </Flex>
    )
}

PostBody.propTypes = {
  body: PropTypes.object.isRequired
}