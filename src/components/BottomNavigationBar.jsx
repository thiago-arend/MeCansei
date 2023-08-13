import { Link, useLocation } from "react-router-dom";
import { BottomNavbarStyle } from "../styles/NavbarStyle";

export default function BottomNavigationBar(props) {
    const { wishlistProducts } = props;
    const location = useLocation().pathname;

    return (
        (location !== "/" && location !== "/cadastro") &&
        <BottomNavbarStyle>
            <Link to="/home">Home</Link><div></div>
            <Link to="/produtos/cadastrar">Cadastrar produto</Link><div></div>
            <Link to="/produtos/gerenciar">Gerenciar produtos</Link><div></div>
            <Link to="/wishlist">{`Wishlist (${wishlistProducts.length})`}</Link>
        </BottomNavbarStyle>
    )
}