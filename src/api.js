import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com/users/matholi",
    
});

export default api;