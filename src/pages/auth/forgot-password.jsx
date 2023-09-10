import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

//using api
import { postMethod } from "@/service/auth";
//end api

export function ForgotPassword() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  //

  //
  const iniState = {
    phone: "",
    password: "",
  };
  const [initialValues, setInitialValue] = useState(iniState);
  const validationSchema = yup
    .object({
      phone: yup
        .string()
        .required("Email Wajib di isi")
        .min(8, "Minimal 5 karakter")
        .max(12, "Minimal 12 karakter"),
      password: yup
        .string()
        .min(4, "Password length should be at least 4 characters")
        .max(12, "Password cannot exceed more than 12 characters"),
    })
    .required();
  const {
    register,
    watch,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });
  const handleLogin = (data) => {
    postMethod
      .LoginAdmin(data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.Data.token);
        nav("/dashboard/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <img className="h-30 w-full " src="/img/Banner.png" alt="Banner" />
          <div className="flex flex-col gap-2">
            <Typography variant="h5" className="mt-2 text-center font-bold">
              Lupa Password
            </Typography>
            <Typography
              variant="small"
              className="mt-0 text-center font-normal"
            >
              Masukkan email untuk reset password
            </Typography>
          </div>
          <CardBody className="-mt-2 flex flex-col gap-4">
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  color="red"
                  type="text"
                  {...register("phone")}
                  // label="Masukkan No. Handphone / Username"
                  label="Masukkan Email"
                  icon={
                    <i
                      className={`fa-solid fa-mobile-screen-button`}
                      style={{ color: "#ff0000" }}
                    />
                  }
                  size="lg"
                  className={`form-control ${
                    errors.username?.message
                      ? "border-red-500"
                      : "border-green-500"
                  }`}
                />
                {errors.phone && (
                  <p className="font-bold text-red-800">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <Button
                color="red"
                variant="gradient"
                fullWidth
                type="submit"
                onClick={() => console.log(errors)}
              >
                Reset Password
              </Button>
            </form>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="small" className="flex justify-center ">
              Sudah punya akun?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="red"
                  className="ml-1 font-bold"
                >
                  Login
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default ForgotPassword;
