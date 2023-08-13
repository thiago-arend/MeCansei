import { Button, Center, Input, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import apiAuth from "../services/apiAuth";
import handleForm from "../functions/handleForm";
import { signinSchema } from "../schemas/user.schemas";
import validateSchema from "../functions/validateSchema";

export default function SigninPage() {
    const { user, setUser } = useContext(UserContext);
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate("/home");
    }, []);

    function handleLogin(e) {
        e.preventDefault();

        const validationErrors = validateSchema(signinSchema, form);
        if (validationErrors) {
            let errorMsg = "";
            validationErrors.forEach(e => errorMsg += e + "\n");
            alert(errorMsg);
            return;
        }

        apiAuth.login(form)
            .then(res => {
                setUser(res.data); // token
                localStorage.removeItem("user");
                localStorage.setItem("user", JSON.stringify(res.data));

                navigate("/home");
            })
            .catch(err => {
                console.log(err.response.data);
                alert("Senha ou e-mail incorretos!");
            });
    }

    return (
        <PageContainer>
            <PageTitle>Me Cansei: </PageTitle>
            <PageSubtitle>Seu app do livramento!</PageSubtitle>

            <Center height='50px'></Center>

            <form onSubmit={handleLogin}>
                <Stack spacing={3}>
                    <PageCommand>Faça seu login!</PageCommand>
                    <Input
                        type="email"
                        name="email"
                        value={form.email}
                        placeholder="E-mail"
                        size="md"
                        _placeholder={{ opacity: 1, color: 'black' }}
                        onChange={(e) => handleForm(e, form, setForm)} />
                    <Input
                        type="password"
                        name="password"
                        value={form.password}
                        placeholder="Senha"
                        size="md"
                        _placeholder={{ opacity: 1, color: 'black' }}
                        onChange={(e) => handleForm(e, form, setForm)} />

                    <Center height='5px'></Center>

                    <Stack spacing={4} direction='row' align='center'>
                        <Button type="submit" colorScheme='teal' size='md'>
                            Login
                        </Button>
                        <Link to="/cadastro">
                            <Button colorScheme='teal' size='md'>
                                Ainda não é cadastrado?
                            </Button>
                        </Link>
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