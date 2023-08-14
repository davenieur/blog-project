import { useState, useEffect, useMemo } from 'react';
import { getTotalPosts } from '../../contentful/querys';

export const useGetPosts = (slug, locale, altLocale, queryFunction, limit, parameter, offset) => {
    const [ posts, setPosts ] = useState([]);
    const [ totalPages, setTotalPages ] = useState(1);

     // Cada vez que se cambie el slug, offset y el locale
     useEffect(() => {
        const fetchPosts = async () => {
            try {
                const posts = await queryFunction(slug, offset * 9, locale, altLocale);
                setPosts(posts);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPosts();
    }, [ locale, slug, offset ]);

    // Obtenemos el número total de páginas
    useEffect(() => {
        const getTotalPages = async () => {
            try {
                // Obtenemos el total de posts
                const totalPosts = await getTotalPosts(slug,parameter);
                
                // Obtenemos el total de páginas para realizar la páginación
                const totalPages = Math.ceil(totalPosts / limit)

                setTotalPages(totalPages);

            } catch (error) {
                console.error(error);
            }
        };
        getTotalPages();
    }, []);


    const memorizedPosts = useMemo(() => posts, [posts]);

    return {
        memorizedPosts,
        totalPages
    }
}
