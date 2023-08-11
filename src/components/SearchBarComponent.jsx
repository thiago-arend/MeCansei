import { Input } from "@chakra-ui/react";
import { SearchBar } from "../styles/NavbarStyle";
import { IoSearch, IoFunnelOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { useLocation } from "react-router-dom";

export default function SearchBarComponent() {
    const location = useLocation().pathname;

    return (
        (location === "/home") && 
        <SearchBar>
                <VscAccount />
                <Input width="240px" placeholder="Senha" size="md" _placeholder={{ opacity: 1, color: 'black' }} />
                <IoSearch />
                <IoFunnelOutline />
        </SearchBar>
    )
}