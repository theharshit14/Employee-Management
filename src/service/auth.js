import axios from "axios";

const authService = {
    postSignup : function postSignup (payload) {
        return axios.post("http://localhost:3001/user", payload)
    }
}

export default authService;