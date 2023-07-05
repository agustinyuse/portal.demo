import axios from "axios";

const api = axios.create({
  baseURL: "https://demochatgpt.onrender.com",
});

export const getAll = () => {
  return api.get("/all");
};

export const create = (data: any) => {
  return api.post("/create", data);
};

export const update = (id: number, data: any) => {
  return api.put(`/update/${id}`, data);
};

export const chat = (message: string) => {
  return api.post(`/chat`, { message });
};
