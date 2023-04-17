
import axios from "axios";


const AxiosInstance = axios.create({
    "baseURL": 'http://127.0.0.1:3000/api/v1',
    "headers": {
        "Content-Type": "application/json",
        "timeout": 3000,
    }
});

export default AxiosInstance;
