import axios from "axios";
import { API_URL } from "../env/api_url_constant";


const authService = {
    postSignup : (payload) => {
        return axios.post(`${API_URL}user`, payload);
    },
    signin : (payload) => {
        return axios.get(`${API_URL}user`, {params:{
            email: payload.email
        }});
    }
}

export default authService;