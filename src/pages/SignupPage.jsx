import { Button, Center, Divider, Input, Stack } from "@chakra-ui/react";
import styled from "styled-components";

export default function SignupPage() {
    return (
        <PageContainer>
            <PageTitle>Me Cansei: </PageTitle>
            <PageSubtitle>Seu app do livramento!</PageSubtitle>

            <Center height='50px'></Center>

            <Stack spacing={3}>
                <PageCommand>Faça seu cadastro!</PageCommand>
                <Input placeholder="Nome" size="md" _placeholder={{ opacity: 1, color: 'black' }} />
                <Input placeholder="E-mail" size="md" _placeholder={{ opacity: 1, color: 'black' }} />
                <Input placeholder="Senha" size="md" _placeholder={{ opacity: 1, color: 'black' }} />
                <Input placeholder="Confirme a senha" size="md" _placeholder={{ opacity: 1, color: 'black' }} />
                <Input placeholder="CPF" size="md" _placeholder={{ opacity: 1, color: 'black' }} />
                <Input placeholder="Telefone" size="md" _placeholder={{ opacity: 1, color: 'black' }} />

                <Center height='5px'></Center>

                <Stack spacing={4} direction='row' align='center'>
                    <Button colorScheme='teal' size='md'>
                        Cadastrar
                    </Button>
                    <Button colorScheme='teal' size='md'>
                        Apagar campos
                    </Button>
                </Stack>
            </Stack>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    background-color: #FFF6DC;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    text-align: center;
    margin: 30px 20px;
    padding: 30px 0;
    border-radius: 20px;
`;

const PageTitle = styled.h1`
    
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    font-size: 36px;
    text-align: center;
    color: #5B9A8B;
`;

const PageSubtitle = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    font-size: 28px;
    text-align: center;
    color: #5B9A8B;
`;

const PageCommand = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 22px;
    text-align: left;
    color: #2B2730;
`;