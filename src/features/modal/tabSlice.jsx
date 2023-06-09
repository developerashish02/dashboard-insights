import { createSlice } from "@reduxjs/toolkit";


export const tabSlice = createSlice({
    name: "tabs",
    initialState: {
        value: 0
    },
    reducers: {
        setActiveTab: (state, action) => {
            state.value = action.payload;
            console.log(state.value);
        }
    }
})

export const { setActiveTab } = tabSlice.actions;

export default tabSlice.reducer; 