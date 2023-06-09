import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpen: false,
    isEdite: false,
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state) => {
            state.isModalOpen = true;
        },

        closeModal: (state) => {
            state.isModalOpen = false;
        },
        openEditeForm: (state) => {
            !state
            console.log(state)
        },
    }
})


export const { openModal, closeModal, openEditeForm, closeEditeForm } = modalSlice.actions;

export default modalSlice.reducer; 