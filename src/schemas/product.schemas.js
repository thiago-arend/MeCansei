import joi from "joi";

export const productSchema = joi.object({
    name: joi.string().required().messages({
        "string.empty": "O campo Nome é obrigatório!"
    }),
    description: joi.string().allow(""),
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