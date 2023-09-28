import React, { useState, useEffect } from "react";
import { Card, CardBody, Typography, Input } from "@material-tailwind/react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { updateMethod, getMethod } from "@/service/auth";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export function EditNilai() {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [data, setData] = useState({
    nama: "",
    nilai: null,
    kategori: "",
  });

  useEffect(() => {
    getMethod.GetNilaiById(id).then((res) => {
      setData({
        nama: res.data.data.nama,
        nilai: res.data.data.nilai,
        kategori: res.data.data.kategori,
      });
    });
  }, []);

  const edit = (id, data) => {
    updateMethod.EditNilai(id, data).then((res) => {
      Swal.fire(`data berhasil di update`);
      Navigate("/guru/Nilai-Siswa");
    });
  };

  return (
    <CardBody className="mr-8 px-0 pb-2">
      <Card className="flex h-full w-full flex-col gap-8 p-10">
        <div className="py-4 pl-5 text-xl font-bold">
          <p>Halaman Edit Nilai</p>
        </div>
        <Input
          label="nama"
          defaultValue={data.nama}
          onChange={(e) => {
            setData({
              ...data,
              nama: e.target.value,
            });
          }}
        />
        <Input
          type="number"
          label="nilai"
          defaultValue={data.nilai}
          onChange={(e) => {
            setData({
              ...data,
              nilai: e.target.value,
            });
          }}
        />
        <Input
          label="kategori"
          defaultValue={data.kategori}
          onChange={(e) => {
            setData({
              ...data,
              kategori: e.target.value,
            });
          }}
        />
        <div
          className="w-fit rounded-lg border-2 border-green-200 text-blue-500 hover:cursor-pointer hover:text-green-300"
          onClick={() => edit(id, data)}
        >
          <button className="p-2">
            <BorderColorIcon />
            <span className="font-bold hover:cursor-pointer">Edit Nilai ?</span>
          </button>
        </div>
      </Card>
    </CardBody>
  );
}

export default EditNilai;
