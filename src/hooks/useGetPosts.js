import { useState, useEffect, useMemo } from 'react';
import { getTotalPosts } from '../../contentful/querys';

export const useGetPosts = (slug, locale, altLocale, queryFunction, limit, parameter, offset) => {
    const [ posts, setPosts ] = useState([]);
    const [ totalPosts, setTotalPosts ] = useState(0);
    const [ totalPages, setTotalPages ] = useState(1);

     // Cada vez que se cambie el slug, offset y el locale
     useEffect(() => {
        const fetchPosts = async () => {
            try {
                const posts = await queryFunction(slug, offset * limit, locale, altLocale, limit);
                setPosts(posts);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPosts();
    }, [ limit, locale, slug, offset ]);

    // Obtenemos el número total de posts
    useEffect(() => {
        const getTotalPages = async () => {
           
            // Obtenemos el total de posts
            const totalPosts = await getTotalPosts(slug,parameter);
            setTotalPosts(totalPosts);
            
            const totalPages = Math.ceil(totalPosts / limit);
            setTotalPages(totalPages);
        };
        getTotalPages();

    }, []);

    // Obtenemos el número total de páginas
    useEffect(() => {
         // Obtenemos el total de páginas para realizar la páginación
         const totalPages = Math.ceil(totalPosts / limit);

         setTotalPages(totalPages);
    }, [ limit ])

    const memorizedPosts = useMemo(() => posts, [posts]);

    return {
        memorizedPosts,
        totalPages
    }
}
