import axios from "axios";
import { API_URL } from "../env/api_url_constant";


const userService = {
  getUsers: () => {
    return axios.get(`${API_URL}users`);
  },
  getBlogs: () => {
    return axios.get(`${API_URL}blogs`);
  },
  postBlogs: (payload) => {
    // {
    //   username
    //   email
    //   title
    //   description
    //   city
    //   createdAt - //new date toISOstring
    //   likescount - //default 0
    // }
    return axios.post(`${API_URL}blogs`, payload);
  }
};

export default userService;


