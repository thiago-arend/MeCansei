import { IconButton, Menu, MenuButton, MenuItem, MenuList, Select, filter } from "@chakra-ui/react";
import { IoFunnelOutline } from "react-icons/io5";
import apiProducts from "../services/apiProducts";

export default function SearchBarFilter(props) {
    const { setProducts } = props;

    function filterProducts(type) {
        let searchQuery = "?";
        (type === 0) && (searchQuery += `orderMaxPrice=true`);
        (type === 1) && (searchQuery += `orderMinPrice=true`);
        (type === 2) && (searchQuery += `category=DVD`);
        (type === 3) && (searchQuery += `category=CD`);
        (type === 4) && (searchQuery += `category=livro`);

        apiProducts.listProducts(searchQuery)
            .then((res) => {

                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }

    return (
        <Menu colorScheme="pink">
            <MenuButton
                color="#5B9A8B"
                colorScheme="#FFF6DC"
                size="100px"
                as={IconButton}
                aria-label='Options'
                icon={<IoFunnelOutline />}
            />
            <MenuList>
                <MenuItem onClick={() => filterProducts(0)} fontFamily="Raleway" fontSize="16px">
                    Maior Preço
                </MenuItem>
                <MenuItem onClick={() => filterProducts(1)} fontFamily="Raleway" fontSize="16px">
                    Menor Preço
                </MenuItem>
                <MenuItem onClick={() => filterProducts(2)} fontFamily="Raleway" fontSize="16px">
                    Categoria DVD's
                </MenuItem>
                <MenuItem onClick={() => filterProducts(3)} fontFamily="Raleway" fontSize="16px">
                    Categoria CD's
                </MenuItem>
                <MenuItem onClick={() => filterProducts(4)} fontFamily="Raleway" fontSize="16px">
                    Categoria Livros
                </MenuItem>
            </MenuList>
        </Menu>
    )
}