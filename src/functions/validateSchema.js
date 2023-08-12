export default function validateSchema(schema, body) {
    const validation = schema.validate(body, { abortEarly: false, convert: false });
    if (validation.error) {
        return validation.error.details.map(det => det.message);
    }

    return undefined;
}