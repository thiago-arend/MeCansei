import apiProducts from "../services/apiProducts";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid, Spinner } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function HomePage(props) {
    const { products, setProducts, queryInput } = props;

    useEffect(() => {

        let searchString = "";
        if (queryInput) searchString = `?name=${queryInput}`
        apiProducts.listProducts(searchString)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }, []);

    if (products && products.length === 0) {
        return (
            <PageContainer>
                Ainda não existem produtos na loja ou para o filtro selecionado...
            </PageContainer>
        )
    }

    return (
        <PageContainer>
            <Grid
                templateColumns="repeat(1, 1fr)"
                gap={3}
                height="auto"
                alignItems="center"
                justifyContent="center"
            >
                {
                    (!products)
                        ?
                        <Spinner size='xl' />
                        :
                        products.map((p) => <Link key={p.id} to={`/produtos/${p.id}`} >
                                                <ProductCard product={p} />
                                            </Link>)
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
`;