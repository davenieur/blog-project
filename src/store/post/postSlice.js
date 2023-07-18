import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        isLoadingPosts: true
    },
    reducers: {
        onLoadPosts: ( state , { payload } ) => {
            state.isLoadingEvents = false;
            // state.events = payload;
            payload.forEach( event => {
                const exists = state.events.some( dbEvent => dbEvent.id === event.id );
                if( !exists ){
                    state.events.push( event );
                }
            });
        },
    }
});
// Action creators are generated for each case reducer function
export const { onLoadPosts } = postSlice.actions;