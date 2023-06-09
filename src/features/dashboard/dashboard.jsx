import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllEvent, getAllEventListByEra } from "../../services/toursService";
import { updateEra, deleteEra, createEra } from "../../services/erasService";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
    const response = await getAllEventListByEra();
    const data = await response.data;
    return data.payload?.eraList?.eras;
});

export const updateEraData = createAsyncThunk(
    "data/updateEraData",
    async (updateData) => {
        const response = await updateEra(updateData);
        const data = await response.data;
        return data;
    }
);

export const createNewEra = createAsyncThunk(
    "data/createEraData",
    async (createData) => {
        const response = await createEra(createData);
        const data = await response.data;
        return data;
    }
);

export const deleteEras = createAsyncThunk("data/deleteEra", async (era_id) => {
    const response = await deleteEra(era_id);
    const data = await response.data;
    return data;
});

export const fetchEventData = createAsyncThunk("data/fetchEvents", async () => {
    const response = await getAllEvent();
    const data = await response.data;
    console.log(data, "Events..")
    return data?.payload?.eventList?.results;
});
