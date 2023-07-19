import { useState, useEffect } from "react"
import { Flex } from "@chakra-ui/react";
import { getPosts } from "../../contentful/querys/getPosts";
import { PostCard } from "./PostCard";
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
                            key={post.slug}
                            {...post}
                        />
                    )
                })
            }
      </Flex>
    )
}
