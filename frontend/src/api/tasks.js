import axios from "axios";

const API_URL = "http://localhost:3000/tasks";

export const fetchTasks = () => axios.get(API_URL);

export const createTask = (task) => axios.post(API_URL, task);

export const updateTask = (id, updates) =>
  axios.patch(`${API_URL}/${id}`, updates);

export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);

export const filterTasks = (status) => axios.get(`${API_URL}?status=${status}`);

export const searchTasks = (query) => axios.get(`${API_URL}?search=${query}`);
