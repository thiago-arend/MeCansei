import { Button, Center, Input, Select, Stack, Textarea } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import handleForm from "../functions/handleForm";
import apiProducts from "../services/apiProducts";
import { UserContext } from "../contexts/UserContext";
import resetFormFields from "../functions/resetFormFields";
import validateSchema from "../functions/validateSchema";
import { productSchema } from "../schemas/product.schemas";

export default function CreateProductPage() {
    const [form, setForm] = useState({ name: "", description: "", photoUrl: "", category: "", currentPrice: "" });
    const navigate = useNavigate();
    const context = useContext(UserContext);

    useEffect(() => {
        const token = context.user.token;
        if (!token) navigate("/home");
    }, []);

    function handleCadastro(e) {
        e.preventDefault();

        const token = context.user.token;

        const validationErrors = validateSchema(productSchema, form);
        if (validationErrors) {
            let errorMsg = "";
            validationErrors.forEach(e => errorMsg += e + "\n");
            alert(errorMsg);
            return;
        }

        form.currentPrice = Number(form.currentPrice * 100);
        apiProducts.createProduct(form, token)
            .then(() => {
                navigate("/home");
            })
            .catch(err => {
                console.log(err.response.data);
            });
    }

    return (
        <PageContainer>

            <form onSubmit={handleCadastro}>
                <Stack spacing={3}>
                    <PageCommand>Cadastre um produto!</PageCommand>
                    <Input
                        type="text"
                        name="name"
                        value={form.name}
                        placeholder="Nome"
                        size="md"
                        _placeholder={{ opacity: 1, color: 'black' }}
                        onChange={(e) => handleForm(e, form, setForm)} />
                    <Textarea
                        placeholder="Descrição"
                        name="description"
                        value={form.description}
                        _placeholder={{ opacity: 1, color: 'black' }}
                        onChange={(e) => handleForm(e, form, setForm)} />
                    <Input
                        type="number"
                        name="currentPrice"
                        value={form.currentPrice}
                        step={0.01}
                        min={0.01}
                        placeholder="Preço"
                        size="md"
                        required
                        _placeholder={{ opacity: 1, color: 'black' }}
                        onChange={(e) => handleForm(e, form, setForm)} />
                    <Select
                        placeholder="Categoria"
                        name="category"
                        value={form.category}
                        _placeholder={{ opacity: 1, color: 'black' }}
                        onChange={(e) => handleForm(e, form, setForm)} >

                            <option value="CD">CD</option>
                            <option value="DVD">DVD</option>
                            <option value="livro">Livro</option>
                    </Select>
                    <Input
                        type="url"
                        name="photoUrl"
                        value={form.photoUrl}
                        placeholder="Foto"
                        size="md"
                        _placeholder={{ opacity: 1, color: 'black' }}
                        onChange={(e) => handleForm(e, form, setForm)} />

                    <Center height='5px'></Center>

                    <Stack spacing={4} direction='row' align='center'>
                        <Button type="submit" colorScheme='teal' size='md'>
                            Cadastrar
                        </Button>
                        <Button onClick={() => resetFormFields(form, setForm)} colorScheme='teal' size='md'>
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