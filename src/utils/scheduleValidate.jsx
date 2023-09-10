import * as yup from "yup";

export const validationSchema = yup
  .object({
    placeName: yup
      .string()
      .min(5, "Minimal 5 karakter")
      .max(100, "placeName cannot exceed more than 100 characters")
      .required("Field placeName Wajib di isi"),
    address: yup
      .string()
      .min(5, "address length should be at least 4 characters")
      .max(100, "address cannot exceed more than 100 characters")
      .required("Field name Wajib di isi"),
  })
  .required();

export const iniState = {
  placeName: "",
  address: "",
};
