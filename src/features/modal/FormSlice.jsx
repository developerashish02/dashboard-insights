import { createSlice } from "@reduxjs/toolkit";

const values = {
    eraFrom: "",
    eraTo: "",
    accentColor: "",
    prefix: "",
};
export const formSlice = createSlice({
    name: "form",
    initialState: {
        values,
        formMode: 'create'
    },
    reducers: {
        setFormValues: (state, action) => {
            state.values = action.payload;
        },
        setFormMode: (state, action) => {
            state.formMode = action.payload;
        }
    },
});

export const { setFormValues, setFormMode } = formSlice.actions;

export default formSlice.reducer;
