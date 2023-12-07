import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Grid, Spinner } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import apiWishlist from "../services/apiWishlist";
import { UserContext } from "../contexts/UserContext";

export default function WishlistPage(props) {
    const { wishlistProducts, setWishlistProducts } = props;
    const { user } = useContext(UserContext);

    useEffect(() => {

        apiWishlist.getUsersWishlist(user.token)
            .then((res) => {

                setWishlistProducts(res.data);
            });
    }, []);

    if (wishlistProducts && wishlistProducts.length === 0) {
        return (
            <PageContainer>
                <PageSubtitle >Ainda não existem produtos na sua wishlist...</PageSubtitle>
            </PageContainer>
        )
    }

    return (
        <PageContainer>
            {(wishlistProducts.length !== 0)
                ?
                <PageSubtitle >
                    Essa é a sua wishlist
                </PageSubtitle>
                :
                <PageSubtitle >
                    Parece que a sua wishlist está vazia...
                </PageSubtitle>
            }
            <Grid
                templateColumns="repeat(1, 1fr)"
                gap={3}
                height="auto"
                alignItems="center"
                justifyContent="center"
            >
                {
                    (!wishlistProducts)
                        ?
                        <Spinner size='xl' />
                        :
                        wishlistProducts.map((p) => <ProductCard 
                                                        product={p}
                                                        key={p.id}
                                                        wishlistProducts={wishlistProducts}
                                                        setWishlistProducts={setWishlistProducts} />)
                }

            </Grid>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px 0;
    padding: 0 20px;
    text-align: center;
`;

const PageSubtitle = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    font-size: 28px;
    text-align: center;
    color: #5B9A8B;
`;