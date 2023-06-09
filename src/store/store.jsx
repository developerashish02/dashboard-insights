import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../features/modal/modalSlice";
import loginSlice from "../features/authentication/loginSlice";
import tabSlice from "../features/modal/tabSlice";
import formSlice from "../features/modal/FormSlice";
import dashboardSlice from "../features/dashboard/dashboardSlice"

// import { formSlice } from "../features/modal/FormSlice";


const store = configureStore({
    reducer: {
        modal: modalSlice,
        login: loginSlice,
        tabs: tabSlice,
        form: formSlice,
        data: dashboardSlice
    }
})

export default store; 