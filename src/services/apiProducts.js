import axios from "axios";
import dotenv from "dotenv";

function createProduct(body, token) {
    const auth = {
        headers: {Authorization: `Bearer ${token}`}
    };
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/products`, body, auth);
    return promise;
}

const apiProducts = { createProduct };
export default apiProducts;