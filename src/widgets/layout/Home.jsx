import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Input,
  Radio,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ListRegister } from "@/widgets/layout/ListRegister";
import { postMethod } from "@/service/auth";

export function Home() {
  const split = `1. masukkan nama lengkap - 2.masukkan email - 3.masukkan password - 4.konfirmasi password sebelumnya - 5.pilih role optional`;

  return (
    <div className="bgImage container mx-auto p-16">
      <Card className="w-full max-w-full p-4">
        <Typography variant="lead" className="py-4 text-start font-bold">
          Tata Cara Register siswa
        </Typography>
        {split
          .split("-")
          .slice(0, 4)
          .map((e, i) => {
            return (
              <p key={i} className="p-2">
                {e}
              </p>
            );
          })}
        <p className="p-2">5.pilih gender</p>
        <Link to="/auth/register/siswa" className="text-red-600">
          register siswa
        </Link>
        <Typography variant="lead" className="py-4 text-start font-bold">
          Tata Cara Register guru
        </Typography>
        {split.split("-").map((e, i) => {
          return (
            <p key={i} className="p-2">
              {e}
            </p>
          );
        })}
        <Link to="/auth/register/guru" className="text-red-600">
          register guru
        </Link>
        <Typography variant="lead" className="py-4 text-start font-bold">
          Tata Cara Register admin
        </Typography>
        {split.split("-").map((e, i) => {
          return (
            <p key={i} className="p-2">
              {e}
            </p>
          );
        })}
        <Link to="/auth/register/admin" className="text-red-600">
          register admin
        </Link>
        <Typography variant="lead" className="py-4 text-start font-bold">
          Tata Cara Login admin/siswa/guru
        </Typography>
        {split
          .split("-")
          .slice(0, 3)
          .map((e, i) => {
            return (
              <p key={i} className="p-2">
                {e}
              </p>
            );
          })}
        <Link to="/auth/sign-in" className="text-red-600">
          Login
        </Link>
      </Card>
    </div>
  );
}

export default Home;
