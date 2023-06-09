import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export const login = (loginData) =>
    axios.post(`${API_BASE_URL}/v1/auth/login`, loginData);
