import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { getMethod, postMethod } from "@/service/auth";

export const DataSiswa = () => {
  const [regis, setRegis] = useState({
    fullname: "",
    password: "",
    email: "",
    gender: "0",
    role: "siswa",
    image: "",
  });
  const handleRegister = (data) => {
    postMethod.Register(data).then((res) => {});
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    getMethod.GetUsers("siswa").then((res) => {
      setData(res.data.data);
    });
  }, []);
  return (
    <CardBody className="mr-8 px-0 pb-2">
      <Card className="h-full w-full overflow-y-auto">
        <div className="flex flex-col gap-8 py-8 pl-8">
          <p className="font-medium text-red-400">
            Anda diwajibkan untuk menjaga kerahasiaan data siswa agar tidak
            terjadi penyalahgunaan !
          </p>
          <p className="text-lg font-medium text-gray-600">
            Data Siswa yang terdaftar di website ini.
          </p>
        </div>
        <p className="font-medium text-red-400">Data tidak ditemukan !</p>
        <div className="flex flex-col">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="dark:border-neutral-500 min-w-full table-fixed border text-left text-sm font-light">
                <thead className="dark:border-neutral-500 border-b font-medium">
                  <tr>
                    {[
                      "No.",
                      "Nama",
                      "Email",
                      "Password",
                      "Tanggal Registrasi",
                    ].map((head) => (
                      <th
                        key={head}
                        className="dark:border-neutral-500 border-r px-6 py-4 text-sm font-medium uppercase"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map(({ email, fullname, password, createdAt }, i) => {
                    return (
                      <tr key={i} className="dark:border-neutral-500 border-b">
                        <td className="dark:border-neutral-500 whitespace-nowrap border-r px-6 py-4 font-medium">
                          {i + 1}
                        </td>
                        <td className="dark:border-neutral-500 whitespace-nowrap border-r px-6 py-4">
                          {fullname}
                        </td>
                        <td className="dark:border-neutral-500 whitespace-nowrap border-r px-6 py-4">
                          {email}
                        </td>
                        <td className="dark:border-neutral-500 whitespace-nowrap border-r px-6 py-4">
                          {password}
                        </td>
                        <td className="dark:border-neutral-500 whitespace-nowrap border-r px-6 py-4">
                          {createdAt}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Card className="flex w-full items-center justify-center">
          <CardBody className="mb-4 flex w-full flex-col gap-4 px-52">
            <Typography
              as="span"
              variant="small"
              className=" text-left font-bold"
            >
              NAMA LENGKAP
            </Typography>
            <Input
              color="red"
              type="text"
              label="Masukkan nama siswa"
              size="lg"
              className={`form-control`}
              onChange={(e) =>
                setRegis({
                  ...regis,
                  fullname: e.target.value,
                })
              }
            />
            <Typography
              as="span"
              variant="small"
              className=" text-left font-bold"
            >
              EMAIL
            </Typography>
            <Input
              color="red"
              type="text"
              label="Masukkan email"
              size="lg"
              className={`form-control`}
              onChange={(e) =>
                setRegis({
                  ...regis,
                  email: e.target.value,
                })
              }
            />
            <Typography
              as="span"
              variant="small"
              className="text-left font-bold"
            >
              PASSWORD
            </Typography>
            <Input
              color="red"
              type={"password"}
              label="Masukkan Kata Sandi"
              size="lg"
              className={`form-control `}
              onChange={(e) =>
                setRegis({
                  ...regis,
                  password: e.target.value,
                })
              }
            />
            <Button
              color="red"
              variant="gradient"
              fullWidth
              onClick={() => handleRegister(regis)}
            >
              Daftar
            </Button>
          </CardBody>
        </Card>
      </Card>
    </CardBody>
  );
};

export default DataSiswa;
