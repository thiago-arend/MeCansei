import { Input } from "@chakra-ui/react";
import { SearchBar } from "../styles/NavbarStyle";
import { IoSearch, IoFunnelOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { useLocation, useNavigate } from "react-router-dom";
import apiProducts from "../services/apiProducts";
import SearchBarFilter from "./SearchBarFilter";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import apiAuth from "../services/apiAuth";

export default function SearchBarComponent(props) {
    const location = useLocation().pathname;
    const { setQueryInput, queryInput, setProducts } = props;
    const context = useContext(UserContext);
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate();

    function loadQuery(e, value) {
        e.preventDefault();

        const queryValue = `?name=${value}`;
        apiProducts.listProducts(queryValue)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }

    function logOff() {
        const conf = confirm("Deseja sair do app?");
        if (conf) {
            apiAuth.signOut(context.user.token)
                .then(() => {
                    localStorage.removeItem("user");
                    setUser(undefined);
                    navigate("/");
                })
                .catch((err) => {
                    console.log(err.response.data);
                })
        }
    }

    return (
        (location === "/home") &&
            <SearchBar>
                <VscAccount onClick={logOff} />
                <Input
                    width="240px"
                    value={queryInput}
                    type="text"
                    onChange={(e) => {
                        setQueryInput(e.target.value);
                        loadQuery(e, e.target.value);
                    }}
                    borderColor="#5B9A8B"
                    color="black"
                    placeholder="Pesquise um item..."
                    size="md"
                    _placeholder={{ opacity: 1, color: 'black' }} />
                <SearchBarFilter setProducts={setProducts} />
            </SearchBar>
    )
}