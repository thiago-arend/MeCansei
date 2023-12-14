import { Box, Center, Checkbox, Stack, StackDivider, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import apiProducts from "../services/apiProducts";
import { UserContext } from "../contexts/UserContext";

export default function ManageProductsPage() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const { user } = useContext(UserContext);

    function updateAvailability(id) {
        apiProducts.updateProductAvailability(user.token, id)
            .then(() => {
                return;
            });
    }

    useEffect(() => {
        if (!user) navigate("/");

        apiProducts.getMyProducts(user.token)
            .then((res) => {
                setProducts((res.data.productsList[0] === null) ? [] : res.data.productsList);
                setName(res.data.sellerName);
            });
    }, []);

    return (
        <PageContainer>
            {(products.length !== 0)
                ?
                <PageSubtitle >
                    Estes são os seus produtos, {name}
                </PageSubtitle>
                :
                <PageSubtitle >
                    Parece que você não cadastrou produtos ainda, {name}
                </PageSubtitle>
            }
            <Center height='20px'></Center>
            <Center height='20px'></Center>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={2}
                align='stretch'
            >
                {
                    products.map((p) => (
                        <Box key={p.id} padding="8px" borderRadius="8px" w="330px" maxH='60px' bg="#FFF6DC">
                            <Stack alignItems="center" color="#5B9A8B" direction="row" justifyContent="space-between">
                                <Box>{`[${p.category}] - ${p.name}`}</Box>
                                <Box><Checkbox
                                    borderColor="#5B9A8B"
                                    onChange={() => updateAvailability(p.id)}
                                    defaultChecked={p.isAvailable ? true : false}>Disponível</Checkbox></Box>
                            </Stack>
                        </Box>)
                    )

                }

            </VStack>
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