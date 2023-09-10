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
      )
      .required("Field name Wajib di isi"),
    postalCode: yup
      .string()
      .min(5, "postalCode length should be at least 4 characters")
      .max(12, "postalCode cannot exceed more than 12 characters")
      .required("Field name Wajib di isi"),
    placeOfBirth: yup
      .string()
      .min(5, "placeOfBirth length should be at least 4 characters")
      .max(30, "placeOfBirth cannot exceed more than 30 characters"),
    // dateOfBirth: yup
    //   .date()
    //   .required()
    //   .typeError("Please select a valid date")
    //   .nullable(),
    address: yup
      .string()
      .min(4, "address length should be at least 4 characters")
      .max(30, "address cannot exceed more than 30 characters")
      .required("Field name Wajib di isi"),
    // unitId: yup.string().required("Field unitId Wajib di isi"),
    // jobId: yup.string().required("Field jobId Wajib di isi"),
    // subDistrictId: yup.string().required("Field subDistrictId Wajib di isi"),
    // villageId: yup.string().required("Field villageId Wajib di isi"),
    email: yup.string().email().required("Field name Wajib di isi"),
  })
  .required();

export const iniState = {
  name: "",
  password: "",
  passwordConfirmation: "",
  postalCode: "",
  // dateOfBirth: "",
  placeOfBirth: "",
  // unitId: "",
  // jobId: "",
  address: "",
  // subDistrictId: "",
  // villageId: "",
  email: "",
};
