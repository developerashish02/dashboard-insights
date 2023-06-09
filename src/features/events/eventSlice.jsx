import { createSlice } from "@reduxjs/toolkit";
import { fetchEventData } from "./events";

const eventSlice = createSlice({
    name: "events",
    initialState: {
        events: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEventData.fulfilled, (state, actions) => {
                return actions.payload;
            })
    }

})

export default eventSlice.reducer;      