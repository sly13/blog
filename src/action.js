import axios from "axios";
const apiUrl = "http://localhost:8080";

//export const logout = () => localStorage.removeItem("authToken");

export const getCategories = () => axios.get(`${apiUrl}/category`);
export const createCategory = data => axios.post(`${apiUrl}/category`, data);
export const deleteCategory = id => axios.delete(`${apiUrl}/category/${id}`);

export const getNewsByCategory = slug =>
  axios.get(`${apiUrl}/post/category/${slug}`);
export const getPosts = () => axios.get(`${apiUrl}/post`);
export const getPriorityPosts = () => axios.get(`${apiUrl}/post-priority`);
export const getTrendingPost = () => axios.get(`${apiUrl}/post-trending`);
export const createPost = data => axios.post(`${apiUrl}/post`, data);
export const getPost = slug => axios.get(`${apiUrl}/post/${slug}`);
export const getMoreNews = id => axios.get(`${apiUrl}/post-more`);
export const getPopularNews = () => axios.get(`${apiUrl}/post-popular`);
export const deletePost = id => axios.delete(`${apiUrl}/post/${id}`);

export const createSubscriber = email =>
  axios.post(`${apiUrl}/subscribe`, email);

//export const getPostInfo = id => axios.get(`${apiUrl}/posts/${id}`);
