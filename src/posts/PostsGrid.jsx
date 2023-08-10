import { useState } from "react";
import { Flex, Divider } from "@chakra-ui/react";
import { Pagination, PostCard } from "./";
import { useGetPostsByCategory } from "@/hooks";
import PropTypes from 'prop-types';

export const PostsGrid = ( props ) => {
    const { slug, limit, locale, altLocale, showWrap } = props;
 
    // Controlamos el offset para las peticiones (parametro Skip)
    const [ offset, setOffset ] = useState(0);
    const { postsByCategory, totalPages } = useGetPostsByCategory(slug, offset, limit, locale, altLocale)
    
    // Decrementamos el offset
    const decrementOffset = () => {
        if (totalPages !== 1 && offset > 0) {
            setOffset((current) => current - 1);
        }
    };
    
    // Incrementamos el offset
    const incrementOffset = () => {
        if (totalPages !== 1 && offset < totalPages + 1) {
            setOffset((current) => current + 1);
        }
    };
    
    // En la ruta "/blog" se muestran los posts de 3 en 3, en /blog/[category] se muestran más posts
    const wrapProperty = showWrap ? "wrap" : "nowrap";
    const overflowProperty = showWrap ? "visible" : "hidden";

    return (
        <Flex direction="column" gap="4rem">
            <Flex alignItems={"flex-start"} justifyContent={"flex-start"} gap="4rem 2rem" wrap={ wrapProperty } overflow={ overflowProperty } >
                {
                    postsByCategory?.map(post => {
                        return(
                            <PostCard 
                                key={ post.slug }
                                { ...post }
                            />
                        )
                    })
                }
            </Flex>  

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
    limit: PropTypes.number.isRequired, 
    locale: PropTypes.string.isRequired, 
    altLocale: PropTypes.string.isRequired,
    showWrap: PropTypes.bool.isRequired
}