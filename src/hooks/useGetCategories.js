import { useState, useEffect, useMemo } from 'react';
import { getCategories } from '../../contentful/querys';

export const useGetCategories = () => {
    const [ categories, setCategories ] = useState([]);

    // Leemos las categorias 
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await getCategories();
                setCategories(categories);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCategories();
    }, []);

    // Memorizamos las categorías, así no es necesario realizar el fetch de forma
    const memorizedCategories = useMemo(() => categories, [categories]);

    return {
        memorizedCategories
    }
}
