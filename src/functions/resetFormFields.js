export default function resetFormFields(form, setForm) {

    const auxObj = {...form};
    Object.keys(form).forEach(key => {
        auxObj[key] = "";
    });

    setForm(auxObj);
}