import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import ManageProductsPage from "./pages/ManageProductsPage";
import WishlistPage from "./pages/WishlistPage";
import { ChakraProvider } from "@chakra-ui/react";
import BottomNavigationBar from "./components/BottomNavigationBar";
import UserProvider from "./contexts/UserContext";
import SearchBarComponent from "./components/SearchBarComponent";
import { useEffect, useState } from "react";

export default function App() {
  const [queryInput, setQueryInput] = useState("");
  const [products, setProducts] = useState(undefined);
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    setWishlistProducts([...wishlistProducts]);
  }, []);

  return (
    <ChakraProvider>
      <UserProvider>
        <BrowserRouter>
          <SearchBarComponent setProducts={setProducts} setQueryInput={setQueryInput} queryInput={queryInput} />
          <Routes>
            <Route path="/" element={<SigninPage />} />
            <Route path="/cadastro" element={<SignupPage />} />
            <Route path="/home" element={<HomePage wishlistProducts={wishlistProducts} setWishlistProducts={setWishlistProducts} queryInput={queryInput} products={products} setProducts={setProducts} />} />
            <Route path="/produtos/:id" element={<ProductPage wishlistProducts={wishlistProducts} setWishlistProducts={setWishlistProducts} />} />
            <Route path="/produtos/cadastrar" element={<CreateProductPage />} />
            <Route path="/produtos/gerenciar" element={<ManageProductsPage />} />
            <Route path="/wishlist" element={<WishlistPage wishlistProducts={wishlistProducts} setWishlistProducts={setWishlistProducts} />} />
          </Routes>
          <BottomNavigationBar wishlistProducts={wishlistProducts} />
        </BrowserRouter>
      </UserProvider>
    </ChakraProvider>
  )
}