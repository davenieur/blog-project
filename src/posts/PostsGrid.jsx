import { useEffect, useState, useMemo } from "react";

import { Flex } from "@chakra-ui/react";
import { PostCard } from "./";
import { getPosts } from "../../contentful/querys";

export const PostsGrid = ( props ) => {
    const { locale, altLocale, slug, altSlug } = props;
    const [ posts, setPosts ] = useState([]);
    
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const posts = await getPosts(slug);
                setPosts(posts);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPosts();
    }, [ locale ]);
    
    // const memorizedPosts = useMemo(() => posts, [posts]);
    
    return (
        <Flex gridArea={'posts'} wrap={true}>
            {
                posts.map(post => {
                    console.log(post)
                    return(
                        <PostCard 
                            key={ post.slugES }
                            { ...post }
                        />
                    )
                })
            }
      </Flex>
    )
}
