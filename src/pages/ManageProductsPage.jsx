import { Box, Center, Checkbox, Container, Divider, Heading, Spinner, Stack, StackDivider, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import apiProducts from "../services/apiProducts";
import { UserContext } from "../contexts/UserContext";

export default function ManageProductsPage() {
    const [products, setProducts] = useState(undefined);
    const [name, setName] = useState("");
    const context = useContext(UserContext);

    function updateAvailability(id) {
        apiProducts.updateProductAvailability(context.user.token, id)
            .then(() => {
                console.log("sucesso");
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }

    useEffect(() => {

        apiProducts.getMyProducts(context.user.token)
            .then((res) => {
                setProducts(res.data[0].productsList);
                setName(res.data[0].sellerName)
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }, []);

    if (!products) {
        return (
            <PageContainer>
                <Spinner size='xl' />
            </PageContainer>
        )
    }

    return (
        <PageContainer>
            <PageSubtitle >
                Estes são os seus produtos, {name}
            </PageSubtitle>
            <Center height='20px'></Center>
            <Center height='20px'></Center>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={2}
                align='stretch'
            >
                {
                    products.map((p) => (
                        <Box padding="8px" borderRadius="8px" w="330px" h='40px' bg="#FFF6DC">
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
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 30px;
    margin-bottom: 70px;
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