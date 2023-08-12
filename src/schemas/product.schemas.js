import joi from "joi";

export const productSchema = joi.object({
    name: joi.string().required().messages({
        "string.empty": "O campo Nome é obrigatório!"
    }),
    description: joi.string().allow(""),
    /*currentPrice: joi.number().min(0.01).required().messages({
        "number.empty": "O campo Preço é obrigatório!",
        "number.base": "O campo Preço deve ser um número!",
        "string.pattern.base": "O campo Preço deve conter apenas números, decimais ou não, e estritamente positivos!"

    }),*/
    currentPrice: joi.any(),
    category: joi.string().valid("DVD", "CD", "livro").required().messages({
        "any.only": "Você deve selecionar uma entre as categorias disponíveis!",
        "string.empty": "O campo categoria deve ser preenchido!"
    }),
    photoUrl: joi.string().uri().required().messages({
        "string.empty": "O campo Foto é obrigatório!",
        "string.uri": "O campo Foto deve conter uma Url válida!"
    })
});