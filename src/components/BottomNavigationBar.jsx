import { Link, useLocation } from "react-router-dom";
import { BottomNavbarStyle } from "./NavbarStyle";

export default function BottomNavigationBar() {
    const location = useLocation().pathname;

    return (
        (location !== "/" && location !== "/cadastro") && 
        <BottomNavbarStyle>
            <Link to="/home">Home</Link><div></div>
            <Link to="/produtos/cadastrar">Cadastrar produto</Link><div></div>
            <Link to="/produtos/gerenciar">Gerenciar produtos</Link><div></div>
            <Link to="/wishlist">Wishlist</Link>
        </BottomNavbarStyle>
    )
}