import * as yup from "yup";

export const validationSchema = yup
  .object({
    name: yup
      .string()
      .min(5, "Minimal 5 karakter")
      .max(30, "name cannot exceed more than 30 characters")
      .required("Field name Wajib di isi"),
    password: yup
      .string()
      .min(5, "Minimal 5 karakter")
      .max(30, "Password cannot exceed more than 30 characters")
      .required("Password is required"),
    passwordConfirmation: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "confirmation password must be same as password"
      ),
    email: yup.string().email().required("Field email Wajib di isi"),
  })
  .required();

export const iniState = {
  name: "",
  password: "",
  passwordConfirmation: "",
  email: "",
};
