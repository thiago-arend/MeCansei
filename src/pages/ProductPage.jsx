import { Card, CardBody, CardFooter, Divider, Heading, Image, Spinner, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiProducts from "../services/apiProducts";
import styled from "styled-components";

export default function ProductPage() {
    const id = useLocation().pathname.split("/")[useLocation().pathname.split("/").length - 1];
    const [product, setProduct] = useState(undefined);
    console.log(product);

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
                            <Text color='#5B9A8B' fontSize='sm'>
                                Nome: {product.sellerName}
                            </Text>
                            <Text color='#5B9A8B' fontSize='sm'>
                                Telefone: {product.sellerPhone}
                            </Text>
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