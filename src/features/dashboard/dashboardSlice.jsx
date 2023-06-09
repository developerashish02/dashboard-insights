import { createSlice } from '@reduxjs/toolkit';
import { createNewEra, fetchData, fetchEventData, updateEraData } from './dashboard';

const dashboardSlice = createSlice({
    name: 'data',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(updateEraData.fulfilled, (state, action) => {
                const updateData = action.payload;
                console.log(updateData);
            })
            .addCase(createNewEra.fulfilled, (state, action) => {
                const createData = action.payload;
                console.log(createData);
            })
            .addCase(fetchEventData.fulfilled, (state, action) => {
                return action.payload;
            })
    },
});

export default dashboardSlice.reducer;