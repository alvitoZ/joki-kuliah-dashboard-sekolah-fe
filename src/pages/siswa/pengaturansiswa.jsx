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

export const PengaturanSiswa = () => {
  const [data, setData] = useState({
    fullname: "",
    password: "",
    email: "",
    gender: "",
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
        gender: res.data.data.gender,
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
          <Typography as="span" variant="small" className="text-left font-bold">
            Jenis Kelamin : {data.gender === "0" ? "laki-laki" : "perempuan"}
          </Typography>
          <div className="">
            <div className="flex- flex items-center">
              <Radio
                onChange={(e) =>
                  setData({
                    ...data,
                    gender: e.target.value,
                  })
                }
                id="rbpriauser"
                name="color"
                value={0}
                color="red"
              />
              <Typography>Laki-Laki</Typography>
            </div>
            <div className="flex flex-row items-center">
              <Radio
                id="rbwanitauser"
                name="color"
                color="red"
                onChange={(e) =>
                  setData({
                    ...data,
                    gender: e.target.value,
                  })
                }
                value={1}
              />
              <Typography>Perempuan</Typography>
            </div>
          </div>
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

export default PengaturanSiswa;
