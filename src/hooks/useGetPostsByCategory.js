import { useState, useEffect, useMemo } from 'react';
import { getPostsByCategory } from '../../contentful/querys';

export const useGetPostsByCategory = (slug, offset, limit, locale, altLocale) => {
    const [ postsByCategory, setPostsByCategory ] = useState([]);
    const [ totalPages, setTotalPages ] = useState(1);

    // Se hace el fetch cuando carga el componente y obtenemos el número total de posts
    useEffect(() => {
        const fetchPostsByCategory = async () => {
        try {
            const posts = await getPostsByCategory( slug, offset, locale, altLocale );

            // Número total de páginas
            const totalPages = Math.ceil(posts.length / limit);
            setTotalPages(totalPages);
            
        } catch (error) {
            console.error(error);
        }
        };
        fetchPostsByCategory();
    }, [])


    // Cada vez que se modifica el offset
    useEffect(() => {
        const fetchPostsByCategory = async () => {
        try {
            const posts = await getPostsByCategory( slug, offset * 3, locale, altLocale );
            setPostsByCategory(posts);
        } catch (error) {
            console.error(error);
        }
        };
        fetchPostsByCategory();
    }, [ offset ]);

   

    return {
        postsByCategory,
        totalPages
    }
}
