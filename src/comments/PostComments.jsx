import { DiscussionEmbed } from 'disqus-react';

export const PostComments = ( { slug, title} ) => {
    
    const disqusShortname = 'https-blog-project-rho-ten-vercel-app-blog'; 
    const disqusConfig = {
        url: `https://blog-project-rho-ten.vercel.app/blog/${slug}`,
        identifier: `${ slug }`,
        title: `${ title }`, 
    };

  
    return (
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    );
}
