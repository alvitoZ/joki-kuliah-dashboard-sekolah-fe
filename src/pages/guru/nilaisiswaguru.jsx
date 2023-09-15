import React, { useState, useEffect } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteMethod, getMethod } from "@/service/auth";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Search from "@/widgets/layout/Search";

export function NilaiSiswaGuru() {
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getMethod.GetNilais().then((res) => {
      setData(res.data.data);
    });
  }, [refresh]);

  const deleteById = (id) => {
    Swal.fire({
      title: "Hapus Nilai ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `data berhasil dihapus`,
          icon: "success",
          confirmButtonText: "Tutup",
        }).then((_) => {
          deleteMethod.DeleteNilaiById(id).then((res) => {
            setRefresh((v) => !v);
          });
        });
      }
    });
  };

  return (
    <CardBody className="mr-8 flex flex-col gap-4 px-0 pb-2">
      <Search />
      <Card className="h-full w-full overflow-y-auto">
        <div className="py-4 pl-5 text-xl font-bold">
          <p>Daftar nilai berdasarkan kategori</p>
        </div>
        <table className="w-[70%] table-auto text-left">
          <thead className="">
            <tr>
              {["Nama Siswa", "Total Nilai", "Kategori", "Aksi", ""].map(
                (head) => (
                  <th key={head} className="p-4 text-sm font-medium uppercase">
                    {head}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="text-left">
            {data.map(({ _id, nama, nilai, kategori }, i) => {
              return (
                <tr key={i}>
                  <td className="p-4">{nama}</td>
                  <td className="p-4">{nilai}</td>
                  <td className="p-4">{kategori}</td>
                  <td className="p-4">
                    <div className="flex flex-col gap-2">
                      <div>
                        <BorderColorIcon />
                        <span
                          className="font-bold text-gray-700 hover:cursor-pointer"
                          onClick={() => Navigate(`/guru/edit-nilai/${_id}`)}
                        >
                          edit
                        </span>
                      </div>
                      <div>
                        <DeleteIcon />
                        <span
                          className="font-bold text-red-500 hover:cursor-pointer"
                          onClick={() => deleteById(_id)}
                        >
                          Hapus
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </CardBody>
  );
}

export default NilaiSiswaGuru;
