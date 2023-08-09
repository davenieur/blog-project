import { useEffect, useState, useMemo } from "react";

import { Flex } from "@chakra-ui/react";
import { Pagination, PostCard } from "./";
import { getPosts, getCategories } from "../../contentful/querys";


export const PostsGrid = ( props ) => {
    const { locale, altLocale, slug, limit } = props;
    const [ posts, setPosts ] = useState([]);

    // Controlamos el offset para las peticiones (parametro Skip)
    const [ offset, setOffset ] = useState(0);
    const [ maxOffset, setMaxOffset ] = useState(1);
    
    const incrementOffset = () => {
        setOffset((current) => (current > 1 ? current - 1 : maxOffset ));
    }

    // Cargamos los posts con base a sus diferentes parámetros (slug, offset, limit, locale, altLocale);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const posts = await getPosts(slug, offset * 3, limit, locale, altLocale);
                setPosts(posts);
                setMaxOffset( Math.ceil( posts.length / 3 ) );
            } catch (error) {
                console.error(error);
            }
        };
        fetchPosts();
    }, [ slug ]);
    
    // Memorizamos los posts para optimizar
    const memorizedPosts = useMemo(() => posts, [posts]);

    // Si se muestra los posts por categoria se aplica el wrap y se remueve el overflow = hidden
    // Si se muestra los posts en la página principal (index) el wrap se remueve y se aplica el overflow = hidden
    const wrapContent = limit === 9 ?  'wrap' : '';
    const overFlow = limit > 3 ? '' : 'hidden';

    return (
        <Flex alignItems={"flex-start"} justifyContent={"flex-start"} gap="4rem 2rem"  wrap={ wrapContent } overflow={ overFlow }>
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
      
    )
}
