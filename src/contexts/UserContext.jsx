import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const userFromLocalStorage = localStorage.getItem("user");
    const [user, setUser] = useState(JSON.parse(userFromLocalStorage));

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}