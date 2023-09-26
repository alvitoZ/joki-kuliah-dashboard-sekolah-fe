import React, { useState, useEffect } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { getMethod } from "@/service/auth";

export function NilaiSiswa() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMethod.GetNilai().then((res) => {
      setData(res.data.data);
    });
  }, []);

  return (
    <CardBody className="mr-8 px-0 pb-2">
      <Card className="flex h-full w-full flex-col gap-4 overflow-y-auto p-10">
        <div className="text-xl font-bold">
          <p>Daftar nilai berdasarkan kategori</p>
        </div>
        <table className="w-[100%] table-auto text-left">
          <thead className="">
            <tr>
              {["Nama Siswa", "Total Nilai", "Kategori"].map((head) => (
                <th key={head} className="py-4 text-sm font-medium uppercase">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-left">
            {data.map(({ nama, nilai, kategori }, i) => {
              return (
                <tr
                  key={i}
                  className={`${
                    i % 2 ? "bg-blue-gray-300" : "bg-white"
                  } hover:bg-blue-gray-400
                  `}
                >
                  <td className="py-2">{nama}</td>
                  <td className="py-2">{nilai}</td>
                  <td className="py-2">{kategori}</td>
                  {/* <td className="hidden p-4">
                    <div className="flex flex-col gap-2">
                      <div>
                        <BorderColorIcon />
                        <span className="font-bold text-gray-700">edit</span>
                      </div>
                      <div>
                        <DeleteIcon />
                        <span className="font-bold text-red-500">Hapus</span>
                      </div>
                    </div>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </CardBody>
  );
}

export default NilaiSiswa;
