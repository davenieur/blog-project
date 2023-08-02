import { useEffect, useState, useMemo } from "react";

import { Flex } from "@chakra-ui/react";
import { Pagination, PostCard } from "./";
import { getPosts, getCategories } from "../../contentful/querys";


export const PostsGrid = ( { children, props } ) => {
    const { locale, slug, limit } = props;
    const [ posts, setPosts ] = useState([]);


    // Controlamos el offset para las peticiones (parametro Skip)
    const [ offset, setOffset ] = useState(0);
    const [ maxOffset, setMaxOffset ] = useState(1);
    
    const incrementOffset = () => {
        setOffset((current) => (current > 1 ? current - 1 : maxOffset ));

    }

    

    // Lectura de todos los post publicados en el sitio
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const posts = await getPosts(slug, offset * 3, limit);
                setPosts(posts);
                setMaxOffset( Math.ceil( posts.length / 3 ) );
            } catch (error) {
                console.error(error);
            }
        };
        fetchPosts();
    }, [ slug ]);
    
    const memorizedPosts = useMemo(() => posts, [posts]);
    
    return (
        <>  
            <Flex wrap={true} alignItems={"flex-start"} justifyContent={"flex-start"} flexWrap={"wrap"} gap={"2rem"}>
        
                {
                    memorizedPosts.map(post => {
                       
                        return(
                            <PostCard 
                                key={ post.slug }
                                { ...post }
                            />
                        )
                    })
                }
            </Flex>
                
            
            <Flex direction={"row"} align={"center"} gap={"2rem"}>
                { children }

                {/* <Pagination 
                    totalPosts={ memorizedPosts.length }
                /> */}
            </Flex>
            
        </>
        
    )
}
