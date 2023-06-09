import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllEvent } from "../../services/toursService";

export const fetchEventData = createAsyncThunk("data/fetchEvents", async () => {
    const response = await getAllEvent();
    const data = await response.data;
    return data;
})