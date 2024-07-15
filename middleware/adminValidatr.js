const yup = require("yup");
const { uploadchat, fileupload } = require("../controllers/adminController");

const resgisteradminValidationSchema = yup.object().shape({
    mobileno: yup
        .number()
        .min(10, 'First name is too Short!')
        .max(11, 'Too Long!')
        .required('Required Mobile number'),
    pin: yup
        .number()
        .min(6, 'Last name is too Short!')
        .max(6, 'Too Long!')
        .required('Required pin')
});

const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required email")
        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
    password: yup
        .string()
        .matches(/^.{8,}$/, 'Password must be at least 8 characters long.')
        .required('Password is required.'),
})

module.exports = { resgisteradminValidationSchema, loginValidationSchema }