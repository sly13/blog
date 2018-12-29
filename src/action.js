import axios from "axios";
const apiUrl = "http://localhost:8080";

//export const logout = () => localStorage.removeItem("authToken");

export const getCategories = () => axios.get(`${apiUrl}/category`);
export const createCategory = data => axios.post(`${apiUrl}/category`, data);
export const deleteCategory = id => axios.delete(`${apiUrl}/category/${id}`);

export const getPosts = () => axios.get(`${apiUrl}/post`);
export const getTrendingPost = () => axios.get(`${apiUrl}/post-trending`);
export const createPost = data => axios.post(`${apiUrl}/post`, data);
export const getPost = id => axios.get(`${apiUrl}/post/${id}`);
export const deletePost = id => axios.delete(`${apiUrl}/post/${id}`);

//export const getPostInfo = id => axios.get(`${apiUrl}/posts/${id}`);
