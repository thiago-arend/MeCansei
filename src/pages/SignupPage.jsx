import { Button, Center, Divider, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import handleForm from "../functions/handleForm";
import apiAuth from "../services/apiAuth";

export default function SignupPage() {
    const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "", cpf: "", phone: "" });
    const navigate = useNavigate();

    function handleCadastro(e) {
        e.preventDefault();

        if (!passwordMatch(form.password, form.confirmPassword)) return alert("As senhas não são idênticas.");
        console.log(form);

        apiAuth.signUp(form)
            .then(() => {
                navigate("/");
            })
            .catch(err => {
                console.log(err.response.data);
            });
    }

    function passwordMatch(p1, p2) {
        return p1 && p2 && p1 === p2;
    }

    return (
        <PageContainer>
            <PageTitle>Me Cansei: </PageTitle>
            <PageSubtitle>Seu app do livramento!</PageSubtitle>

            <Center height='50px'></Center>

            <form onSubmit={handleCadastro}>
                <Stack spacing={3}>
                    <PageCommand>Faça seu cadastro!</PageCommand>
                    <Input
                        placeholder="Nome"
                        type="text"
                        name="name"
                        value={form.name}
                        size="md"
                        _placeholder={{ opacity: 1, color: 'black' }}
                        onChange={(e) => handleForm(e, form, setForm)} />
                    <Input
                        placeholder="E-mail"
                        type="email"
                        name="email"
                        value={form.email}
                        size="md"
                        _placeholder={{ opacity: 1, color: 'black' }}
                        onChange={(e) => handleForm(e, form, setForm)} />
                    <Input
                        placeholder="Senha"
                        type="password"
                        name="password"
                        value={form.password}
                        size="md"
                        _placeholder={{ opacity: 1, color: 'black' }}
                        onChange={(e) => handleForm(e, form, setForm)} />
                    <Input
                        placeholder="Confirme a senha"
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        size="md"
                        _placeholder={{ opacity: 1, color: 'black' }}
                        onChange={(e) => handleForm(e, form, setForm)} />
                    <Input
                        placeholder="CPF"
                        type="number"
                        name="cpf"
                        value={form.cpf}
                        size="md"
                        _placeholder={{ opacity: 1, color: 'black' }}
                        onChange={(e) => handleForm(e, form, setForm)} />
                    <Input
                        placeholder="Telefone"
                        type="number"
                        name="phone"
                        value={form.phone}
                        size="md"
                        _placeholder={{ opacity: 1, color: 'black' }}
                        onChange={(e) => handleForm(e, form, setForm)} />

                    <Center height='5px'></Center>

                    <Stack spacing={4} direction='row' align='center'>
                        <Button type="submit" colorScheme='teal' size='md'>
                            Cadastrar
                        </Button>
                        <Button colorScheme='teal' size='md'>
                            Apagar campos
                        </Button>
                    </Stack>
                </Stack>
            </form>
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