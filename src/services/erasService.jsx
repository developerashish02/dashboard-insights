import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export const createEra = (data) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios.post(`${API_BASE_URL}/v1/era/`, data, { headers });
};

export const updateEra = (data) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios.put(`${API_BASE_URL}/v1/era/`, data, { headers });
};


export const deleteEra = (eraId) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios.delete(`${API_BASE_URL}/v1/era/?eraId=${eraId}`, { headers })
}