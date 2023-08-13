import { Box, Button, Card, CardBody, CardFooter, Divider, Heading, Image, Spinner, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiProducts from "../services/apiProducts";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import apiWishlist from "../services/apiWishlist";

export default function ProductPage(props) {
    const id = useLocation().pathname.split("/")[useLocation().pathname.split("/").length - 1];
    const [product, setProduct] = useState(undefined);
    const { user } = useContext(UserContext);
    const { wishlistProducts, setWishlistProducts } = props;

    function addToWishlist() {
        const addTo = confirm(`Deseja adicionar ${product.name} à sua wishlist?`);
        if (!addTo) return;

        apiWishlist.insertProductIntoWishlist(user.token, id)
            .then(() => {
                setWishlistProducts([...wishlistProducts, product]);
                alert(`Adicionado com sucesso!`);
            })
            .catch((err) => {
                alert(err.response.data.message);
            });
    }

    useEffect(() => {
        apiProducts.getProduct(id)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }, []);

    return (
        <PageContainer>
            {(!product)
                ?
                <Spinner size='xl' />
                :
                <Card maxW='sm'>
                    <CardBody align="center">
                        <Image
                            width="175px"
                            src={product.photoUrl}
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{product.name}</Heading>
                            <Text>
                                {product.description}
                            </Text>
                            <Text color='#5B9A8B' fontSize='2xl'>
                                R$ {(product.currentPrice / 100).toFixed(2).replace(".", ",")}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>

                        <Stack>
                            <Text color='black' fontSize='md'>
                                Entre em contato com o vendedor:
                            </Text>
                            <Stack direction="row" justifyContent="space-between">
                                <Box>
                                    <Text color='#5B9A8B' fontSize='sm'>
                                        Nome: {product.sellerName}
                                    </Text>
                                    <Text color='#5B9A8B' fontSize='sm'>
                                        Telefone: {product.sellerPhone}
                                    </Text>
                                </Box>

                                <Button onClick={addToWishlist} colorScheme='teal' size='md'>
                                    Wishlist
                                </Button>
                            </Stack>

                        </Stack>
                    </CardFooter>
                </Card>}
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 30px;
    margin-bottom: 70px;
    padding: 0 20px;
`;