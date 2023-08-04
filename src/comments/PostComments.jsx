import { DiscussionEmbed } from 'disqus-react';
import { useRouter } from 'next/router';

export const PostComments = ( { slug, title} ) => {
    const router = useRouter();

    // Obtener el path completo
    const fullPath = router.asPath;

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
