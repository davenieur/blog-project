import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        isLoadingPosts: true
    },
    reducers: {
        onLoadPosts: ( state , { payload } ) => {
            state.isLoadingPosts = false;
    
            payload.forEach( post => {
                const exists = state.posts.some( content => content.slug === post.slug );
                if( !exists ){
                    state.posts.push( post );
                }
            });
        },
    }
});
// Action creators are generated for each case reducer function
export const { onLoadPosts } = postSlice.actions;