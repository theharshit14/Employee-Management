import axios from "axios";
import { API_URL } from "../env/api_url_constant";

const authService = {
    postSignup : (payload) => {
        return axios.post(`${API_URL}users`, payload);
    },
    signin : (payload) => {
        return axios.get(`${API_URL}users`, {params:{
            email: payload.email
        }});
    },

    forgotPassword : (id, payload) => {
        return axios.put(`${API_URL}users/${id}`, payload);
    }
    
}

export default authService;