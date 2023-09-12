import { Card, CardBody, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { updateMethod, getMethod } from "@/service/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Pengaturan = () => {
  //
  const nav = useNavigate();
  const [postData, setPostData] = useState({
    fullname: "",
    password: "",
    image: null,
  });
  //

  const [imgData, setImgData] = useState(null);
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      setPostData({
        ...postData,
        image: e.target.files[0],
      });
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const changeEmail = (id, data) => {
    updateMethod.UpdateEmail(id, data).then((res) => {});
  };

  const [data, setData] = useState({
    _id: "",
    fullname: "",
    password: "",
    email: "",
    gender: "",
    role: "",
    image: "",
  });

  const [email, setEmail] = useState({
    email: "",
  });

  useEffect(() => {
    getMethod.GetUser().then((res) => {
      setData(res.data.data);
    });
  }, []);

  const editProfil = (id, data) => {
    updateMethod.EditProfil(id, data).then((res) => {
      nav("/admin/pengaturan");
    });
  };
  return (
    <div className="flex flex-col gap-4">
      <Card className="">
        <CardBody className="flex flex-row gap-4">
          <SearchIcon />
          <div>mencari sesuatu....</div>
        </CardBody>
      </Card>
      <div className="w-fit rounded-md bg-red-600">
        <div className="px-2 py-1 text-white">
          <PersonIcon />
          <span>Edit Informasi Akun</span>
        </div>
      </div>
      <Card className="">
        <CardBody className="flex flex-row gap-4">
          <div className="flex flex-col gap-8">
            <p className="font-bold text-gray-600">Informasi Profil</p>
            <div className="flex items-center gap-4">
              <img
                className="max-h-40 w-40"
                src={
                  imgData
                    ? imgData
                    : `http://localhost:3001/images/${data.image}`
                }
                alt="your image"
              />
              <div className="flex flex-col items-center rounded-md bg-red-600">
                <p className="pt-2 text-white">Upload Foto</p>
                <input
                  type="file"
                  className="p-2 text-white"
                  onChange={onChangePicture}
                />
              </div>
              <div className="flex h-fit items-center rounded-sm bg-gray-600 text-white">
                <p
                  className="py-1 px-2"
                  onClick={() =>
                    setImgData(`http://localhost:3001/images/${data.image}`)
                  }
                >
                  hapus
                </p>
              </div>
            </div>
            <p>Maksimal ukuran file 1 MB</p>
          </div>
        </CardBody>
      </Card>
      <Card className="flex flex-row justify-start gap-4">
        <CardBody className="flex w-[70%] flex-col gap-4">
          <Typography
            as="span"
            variant="small"
            className=" text-left font-bold"
          >
            NAMA
          </Typography>
          <Input
            color="red"
            type="text"
            size="lg"
            className={`form-control`}
            defaultValue={data.fullname}
            onChange={(e) =>
              setPostData({
                ...postData,
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
          <div>
            <Input
              color="red"
              type="text"
              size="lg"
              className={`form-control`}
              defaultValue={data.email}
            />
            <div className="flex gap-1">
              <input
                type="text"
                className="border-2 border-gray-700"
                placeholder="Email baru"
                onChange={(e) =>
                  setEmail({
                    email: e.target.value,
                  })
                }
              />
              <button
                className=" bg-blue-gray-300 text-black"
                onClick={() => changeEmail(data._id, email)}
              >
                <p className="p-[4px] text-sm">Update Email</p>
              </button>
            </div>
          </div>
          <Typography
            as="span"
            variant="small"
            className=" text-left font-bold"
          >
            PASSWORD
          </Typography>
          <Input
            color="red"
            type="text"
            size="lg"
            className={`form-control`}
            defaultValue={data.password}
            onChange={(e) =>
              setPostData({
                ...postData,
                password: e.target.value,
              })
            }
          />
          <Typography
            as="span"
            variant="small"
            className=" text-left font-bold"
          >
            ROLE
          </Typography>
          <div className="w-fit rounded-md bg-red-600">
            <div className="px-2 py-1 text-white">
              <PersonIcon />
              <span>{data.role}</span>
            </div>
          </div>
        </CardBody>
        <div className="flex w-[30%] flex-col gap-4 pt-6">
          <Typography
            as="span"
            variant="small"
            className=" text-left font-bold"
          >
            JENIS KELAMIN
          </Typography>
          <div className="h-4 w-10 rounded-lg bg-green-400"></div>
          <div>
            <button
              className="bg-red-500"
              onClick={() => editProfil(data._id, postData)}
            >
              Edit Profil
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Pengaturan;
