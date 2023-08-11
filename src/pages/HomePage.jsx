import apiProducts from "../services/apiProducts";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid, Spinner } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function HomePage() {
    const [products, setProducts] = useState(undefined);
    console.log(products);

    useEffect(() => {
        apiProducts.listProducts()
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }, []);

    return (
        <PageContainer>
            <Grid
                templateColumns="repeat(2, 1fr)"
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
                        products.map((p) => <Link to={`/produtos/${p.id}`} ><ProductCard product={p} key={p.id} /></Link>)
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