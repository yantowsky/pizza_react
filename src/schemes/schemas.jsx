import * as Yup from 'yup';

const basicSchema = Yup.object().shape({
    firstName: Yup.string().trim().matches(/^([^0-9]*)$/gm, "Letters only").required("A first name is required"),
    phoneNum: Yup.string().phone("UA", "Please enter a valid phone number").required("A phone number is required"),
    address: Yup.string().trim().max(50, "Maximum number of characters exceeded").required("An address is required")
});

export default basicSchema;