import axios from "axios";
import dotenv from "dotenv";

function createProduct(body, token) {
    const auth = {
        headers: {Authorization: `Bearer ${token}`}
    };
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/products`, body, auth);
    return promise;
}

function listProducts() {
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/products`);
    return promise;
}

function getProduct(id) {
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`);
    return promise;
}

const apiProducts = { getProduct, listProducts, createProduct };
export default apiProducts;