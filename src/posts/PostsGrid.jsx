import { useEffect, useState, useMemo } from "react";

import { Flex } from "@chakra-ui/react";
import { Pagination, PostCard } from "./";
import { getPosts } from "../../contentful/querys";

export const PostsGrid = ( props ) => {
    const { slug } = props;
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
    }, [ slug ]);
    
    const memorizedPosts = useMemo(() => posts, [posts]);
    
    return (
        <>  
            <Flex gridArea={'posts'} wrap={true} alignItems={"flex-start"} justifyContent={"center"}>
                {
                    memorizedPosts.map(post => {
                       
                        return(
                            <PostCard 
                                key={ post.slugES }
                                { ...post }
                            />
                        )
                    })
                }
            </Flex>

            <Pagination 
                totalPosts={ memorizedPosts.length }
            />
        </>
        
    )
}
