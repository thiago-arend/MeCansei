import { Input } from "@chakra-ui/react";
import { SearchBar } from "../styles/NavbarStyle";
import { IoSearch, IoFunnelOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

export default function SearchBarComponent() {
    return (
        <SearchBar>
                <VscAccount />
                <Input width="240px" placeholder="Senha" size="md" _placeholder={{ opacity: 1, color: 'black' }} />
                <IoSearch />
                <IoFunnelOutline />
        </SearchBar>
    )
}