import { useState, useEffect, useMemo } from 'react';
import { getCategories } from '../../contentful/querys';

export const useGetCategories = (locale, altLocale) => {
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
        try {
            const categories = await getCategories(locale, altLocale);
            setCategories(categories);
        } catch (error) {
            console.error(error);
        }
        };
        fetchCategories();
    }, [ locale ]);

    const memorizedCategories = useMemo(() => categories, [categories]);

    return {
        memorizedCategories
    }
}
