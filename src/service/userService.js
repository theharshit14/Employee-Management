import axios from "axios";
import { API_URL } from "../env/api_url_constant";

const userService = {
  getUsers: () => {
    return axios.get(`${API_URL}users`);
  },
};

export default userService;
