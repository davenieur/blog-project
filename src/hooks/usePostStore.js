import { useDispatch, useSelector } from "react-redux"
import { onLoadPosts } from "@/store/post/postSlice";
import { getPosts } from "../../contentful/querys/getPosts";

export const usePostStore = (props) => {
    const dispatch = useDispatch();
    const { posts } = useSelector( state => state.posts );

    const startLoadingPosts = async(locale, altLocale) => {

        try {
            const data = await getPosts(locale, altLocale);
            dispatch( onLoadPosts( data ) );

        } catch (error) {
            console.log('Error cargando posts');
            console.log(error);
        }
    }

    return {
        posts,
        startLoadingPosts
    }
}
