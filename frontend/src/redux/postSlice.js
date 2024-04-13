import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: 'post',   // name of the slice
    initialState: {     // initial state of the slice
        posts: [        // initial state of the posts
            {
                title: '',              // title of the post
                description: '',        // description of the post  
                tag: 0,                 // tag of the post
            },
        ],
    },
    reducers: {
        createPost: (state, action) => {
            state.posts = [...state.posts, action.payload];     // TODO: Create a new post
        }
    }
});

export const { createPost } = postSlice.actions;    // export the createPost action
export default postSlice.reducer;   // export the postSlice reducer