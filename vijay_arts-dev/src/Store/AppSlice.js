//create your slices here
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    //name your slice
    name: "user",
    //initial value of slice
    initialState: {
        value: "Hi Saapo"
    }
    ,
    // Reducers here i.e your operations on values
    reducers: {
        updateUserMessage: (state, action) => {
            state.value = action.payload;
        }
    }
})

// Export the actions
export const { updateUserMessage } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;

//now saapo wrap your whole application with provider in app.js or you can in index.js
