import { useEffect, useState } from "react";
import { Flex, Divider } from "@chakra-ui/react";
import { Pagination, PostCard } from "./";
import PropTypes from 'prop-types';

export const PostsGrid = ( props ) => {
    const { slug, filteredPosts, locale, altLocale, showWrap, queryFunction, totalPages } = props;

    // Controlamos el offset para las peticiones (parametro Skip)
    const [ offset, setOffset ] = useState(0);
    const [ posts, setPosts ] = useState(filteredPosts);

 
    // Cada vez que se cambie el slug o el offset
    useEffect(() => {
        const fetchPosts = async (slug) => {
            try {
                const posts = await queryFunction(slug, offset * 3, locale, altLocale);
                setPosts(posts);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPosts(slug, offset);
    }, [ slug, offset ])
    
    // Decrementamos el offset
    const decrementOffset = () => {
        if (offset > 0) {
            setOffset((current) => current - 1);
        }else if(offset === 0){
            setOffset(totalPages - 1);
        }
    };
    
    // Incrementamos el offset
    const incrementOffset = () => {
        if (offset < totalPages - 1) {
            setOffset((current) => current + 1);
        } else if(offset === totalPages - 1){
            setOffset(0);
        }
    };
    
    // En la ruta "/blog" se muestran los posts de 3 en 3, en /blog/[category] se muestran más posts
    const wrapProperty = showWrap ? "wrap" : "nowrap";
    const overflowProperty = showWrap ? "visible" : "hidden";
    
    return (
        <Flex direction="column" padding="0 6rem" gap="2rem">

            {/* Postcards */}
            <Flex alignItems={"flex-start"} justifyContent={"flex-start"} gap="4rem" wrap={ wrapProperty } overflow={ overflowProperty }>
                {
                    posts?.map(post => {
                        return(
                            <PostCard 
                                key={ post.slug }
                                { ...post }
                            />
                        )
                    })
                }
            </Flex>  

            {/* Paginación */}
            <Flex direction="row" gap="2rem" align="center" justify="center">
                <Divider orientation='horizontal' variant="thick"/> 
                <Pagination 
                    currentPage={ offset + 1 } 
                    totalPages={ totalPages }
                    incrementOffset = { incrementOffset }
                    decrementOffset = { decrementOffset }
                />
                <Divider orientation='horizontal' variant="thick"/> 
            </Flex>
        </Flex>
    )
}

PostsGrid.propTypes = {
    slug: PropTypes.string.isRequired, 
    locale: PropTypes.string.isRequired, 
    altLocale: PropTypes.string.isRequired,
    showWrap: PropTypes.bool.isRequired,
    filteredPosts: PropTypes.array.isRequired
}