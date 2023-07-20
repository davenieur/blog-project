import { useDispatch, useSelector } from "react-redux"
import { onLoadPosts } from "@/store/post/postSlice";
import { getPosts } from "../../contentful/querys/getPosts";
import { client } from "../../contentful/contentfulApi";

export const usePostStore = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector( state => state.posts );

    const startLoadingPosts = async() => {
        try {
            const data = await getPosts();
            
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
