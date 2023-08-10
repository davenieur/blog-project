import { useState, useEffect } from 'react';
import { getPostsByCategory } from '../../contentful/querys';

export const useGetPostsByCategory = (slug, offset, limit, locale, altLocale) => {
    const [ postsByCategory, setPostsByCategory ] = useState([]);
    const [ totalPages, setTotalPages ] = useState(1);
    

    useEffect(() => {
        const fetchPostsByCategory = async (slug) => {
            try {
                const posts = await getPostsByCategory(slug, offset * 3, locale, altLocale);
                setPostsByCategory(posts);
            } catch (error) {
                console.error(error);
            }
        };
    
        if (offset === 0) {
            // Primera llamada, calculamos el número total de páginas
            const fetchTotalPosts = async () => {
                try {
                    const totalPosts = await getPostsByCategory(slug, 0, locale, altLocale);
                    const totalPages = Math.ceil(totalPosts.length / limit);
                    setTotalPages(totalPages);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchTotalPosts();
        }
    
        // Llamada para obtener los posts basados en slug y offset
        fetchPostsByCategory(slug, offset);
    
    }, [slug, offset]);
    
    return {
        postsByCategory,
        totalPages
    }
}
