import joi from "joi";

export const signupSchema = joi.object({
    name: joi.string().required().messages({ "string.empty": "O campo Nome deve ser preenchido!" }),
    phone: joi.string().min(10).max(11).required().messages({
        "string.empty": "O campo Telefone é obrigatório!",
        "string.min": "O campo Telefone deve ter entre 10 e 11 dígitos!",
        "string.max": "O campo Telefone deve ter entre 10 e 11 dígitos!"
    }),
    cpf: joi.string().length(11).pattern(/^[0-9]+$/).required().messages({
        "string.empty": "O campo Cpf é obrigatório!",
        "string.length": "O campo Cpf deve ter exatamente 11 dígitos!",
        "string.pattern.base": "O campo Cpf deve conter apenas números!"
    }),
    email: joi.string().email({ tlds: { allow: false } }).required().messages({
        "string.empty": "O campo E-mail é obrigatório!",
        "string.email": "O campo E-mail deve possuir o formato correto!",
    }),
    password: joi.string().min(6).required().messages({
        "string.empty": "O campo Senha é obrigatório!",
        "string.min": "O campo Senha deve possuir no mínimo 6 caracteres!",
    }),
    confirmPassword: joi.string().min(6).required().valid(joi.ref('password')).messages({
        "string.empty": "O campo Confirmação de Senha é obrigatório!",
        "string.min": "O campo Confirmação de Senha deve possuir no mínimo 6 caracteres!",
        "any.only": "O campos Senha e Confirmação não são idênticos!",
    })
});

export const signinSchema = joi.object({
    email: joi.string().email({ tlds: { allow: false } }).required().messages({
        "string.empty": "O campo E-mail é obrigatório!",
        "string.email": "O campo E-mail deve possuir o formato correto!",
    }),
    password: joi.string().min(6).required().messages({
        "string.empty": "O campo Senha é obrigatório!",
        "string.min": "O campo Senha deve possuir no mínimo 6 caracteres!",
    })
});