import axios from "axios";
import dotenv from "dotenv";

function createProduct(body, token) {
    const auth = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/products`, body, auth);
    return promise;
}

function listProducts(query="") {
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/products${query}`);
    return promise;
}

function getProduct(id) {
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`);
    return promise;
}

function getMyProducts(token) {
    const auth = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/me/products`, auth);
    return promise;
}

function updateProductAvailability(token, id){
    const auth = {
        headers: { Authorization: `Bearer ${token}` }
    };
    console.log(auth);
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/products/available/${id}`, auth);
    return promise;
}

const apiProducts = { getMyProducts, updateProductAvailability, getProduct, listProducts, createProduct };
export default apiProducts;