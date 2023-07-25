import { useEffect } from "react";

import { Flex } from "@chakra-ui/react";
import { PostCard } from "./";
import { usePostStore } from "@/hooks/usePostStore";

export const PostsGrid = ( props ) => {
    const { locale, altLocale, slug, altSlug } = props;
    const { posts, startLoadingPosts } = usePostStore();

    useEffect(() => {
        startLoadingPosts(locale, altLocale)
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
