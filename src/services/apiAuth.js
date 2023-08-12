import axios from "axios";
import dotenv from "dotenv";

function login(body) {
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/auth/signin`, body);
    return promise;
}

function signUp(body) {
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, body);
    return promise;
}

function signOut(token) {
    const auth = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const promise = axios.post(`${import.meta.env.VITE_API_URL}/auth/signout`, auth);
    return promise;
}

const apiAuth = { signOut, login, signUp };
export default apiAuth;