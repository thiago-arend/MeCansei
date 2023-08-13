import axios from "axios";
import dotenv from "dotenv";

/*function createWishlist(token) {
    const auth = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/products/wishlist`, {}, auth);
    return promise;
}*/

function insertProductIntoWishlist(token, prodId) {
    const auth = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/products/${prodId}/wishlist`, {}, auth);
    return promise;
}

function deleteProductFromWishlist(token, prodId) {
    const auth = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const promise = axios.delete(`${import.meta.env.VITE_API_URL}/products/${prodId}/wishlist`, auth);
    return promise;
}

function getUsersWishlist(token) {
    const auth = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/wishlist/me`, auth);
    return promise;
}

const apiWishlist = { insertProductIntoWishlist, deleteProductFromWishlist, getUsersWishlist };
export default apiWishlist;