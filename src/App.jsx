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

export default function App() {

  return (
    <ChakraProvider>
      <UserProvider>
        <BrowserRouter>
          <SearchBarComponent />
          <Routes>
            <Route path="/" element={<SigninPage />} />
            <Route path="/cadastro" element={<SignupPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/produtos/:id" element={<ProductPage />} />
            <Route path="/produtos/cadastrar" element={<CreateProductPage />} />
            <Route path="/produtos/gerenciar" element={<ManageProductsPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
          </Routes>
          <BottomNavigationBar />
        </BrowserRouter>
      </UserProvider>
    </ChakraProvider>
  )
}