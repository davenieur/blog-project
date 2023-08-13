import { DiscussionEmbed } from 'disqus-react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const PostComments = ( { slug, title } ) => {
    
    const disqusShortname = 'https-blog-project-rho-ten-vercel-app-blog'; 
    const disqusConfig = {
        url: `https://blog-project-rho-ten.vercel.app/blog/${slug}`,
        identifier: `${ slug }`,
        title: `${ title }`, 
    };

  
    return (
        <Box padding="4rem">
            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}  />
        </Box>
    );
}

PostComments.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}