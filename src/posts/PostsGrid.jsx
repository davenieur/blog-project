import { useEffect } from "react";

import { Flex } from "@chakra-ui/react";
import { PostCard } from "./";
import { usePostStore } from "@/hooks/usePostStore";

export const PostsGrid = () => {
    const { posts, startLoadingPosts } = usePostStore();

    useEffect(() => {
        startLoadingPosts()
    }, []);

    return (
        <Flex wrap={true}>
            {
                posts.map(post => {
                    return(
                        <PostCard 
                            key={post.slugES}
                            {...post}
                        />
                    )
                })
            }
      </Flex>
    )
}
