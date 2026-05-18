import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/blogs",
});

export const getBlogs = () => API.get("/");
export const createBlog = (data) => API.post("/", data);