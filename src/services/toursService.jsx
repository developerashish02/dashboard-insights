import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export const getAllEvent = () => {
    const token = localStorage.getItem("token");

    const headers = {
        Authorization: `Bearer ${token}`,
    }
    return axios.get(`${API_BASE_URL}/v1/event/ListAll`, { headers });

};


export const getAllEventListByEra = () => {
    const token = localStorage.getItem("token");

    const headers = {
        Authorization: `Bearer ${token}`,
    }

    return axios.get(`${API_BASE_URL}/v1/era/`, { headers })
}
