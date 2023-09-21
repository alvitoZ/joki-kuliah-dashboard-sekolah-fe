import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Typography,
  Input,
  Radio,
} from "@material-tailwind/react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { updateMethod, getMethod } from "@/service/auth";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export const PengaturanGuru = () => {
  const [data, setData] = useState({
    fullname: "",
    password: "",
    email: "",
  });
  const [id, setId] = useState("");

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getMethod.GetUser().then((res) => {
      setId(res.data.data._id);
      setData({
        fullname: res.data.data.fullname,
        password: res.data.data.password,
        email: res.data.data.email,
      });
    });
  }, [refresh]);

  const edit = (id, data) => {
    Swal.fire({
      title: `update profil ini?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, update!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `profil berhasil diupdate`,
          icon: "success",
          confirmButtonText: "Tutup",
        }).then((_) => {
          updateMethod.EditUser(id, data).then((res) => {
            setRefresh((v) => !v);
          });
        });
      }
    });
  };

  return (
    <CardBody className="mr-8 px-0 pb-2">
      <Card className="flex h-full w-full flex-col gap-8">
        <div className="py-4 pl-5 text-xl font-bold">
          <p>edit profil</p>
        </div>
        <Input
          label="fullname"
          defaultValue={data.fullname}
          onChange={(e) => {
            setData({
              ...data,
              fullname: e.target.value,
            });
          }}
        />
        <Input
          label="password"
          defaultValue={data.password}
          onChange={(e) => {
            setData({
              ...data,
              password: e.target.value,
            });
          }}
        />
        <Input
          label="email"
          defaultValue={data.email}
          onChange={(e) => {
            setData({
              ...data,
              email: e.target.value,
            });
          }}
        />
        <div className="flex flex-col items-start">
          <BorderColorIcon />
          <span
            className="font-bold text-gray-700 hover:cursor-pointer"
            onClick={() => edit(id, data)}
          >
            edit
          </span>
        </div>
      </Card>
    </CardBody>
  );
};

export default PengaturanGuru;
