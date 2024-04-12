import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
            name: 'Vu Cong Duc',
            age: 23,
            about: 'I am a software engineer',
            avaUrl: 'https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a',
            themeColor: '#ff9051',
            pending: false,
            error: false,
        },
    reducers: {
        updateStart: (state) => {
            state.pending = true;
        },
        updateError:(state, action) => {
            state.pending = true;
            state.error = true;
        },
        updateSuccess: (state, action) => {
            state.pending = false;
            state.error = false;
            state.name = action.payload.name;       // TODO: Update the user's name
            state.age = action.payload.age;         // TODO: Update the user's age
            state.about = action.payload.about;     // TODO: Update the user's about
            state.avaUrl = action.payload.avaUrl;   //  TODO: Update the user's avaUrl
            state.themeColor = action.payload.themeColor; // TODO: Update the user's themeColor
        }
    }
});


export const {  updateStart,
                updateSuccess,
                updateError } = userSlice.actions;
export default userSlice.reducer;