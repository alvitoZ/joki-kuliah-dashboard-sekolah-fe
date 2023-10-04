import React, { useState, useEffect } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteMethod, getMethod } from "@/service/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Search from "@/widgets/layout/Search";

export function NilaiKelompokSiswa() {
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
      <Card className="flex h-full w-full flex-col items-start justify-start overflow-y-auto px-8">
        <div className="py-4 text-xl font-bold">
          <p>Daftar nilai berdasarkan kategori</p>
        </div>

        <div className="flex flex-col overflow-x-auto">
          <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="dark:border-neutral-500 border-b font-medium">
                    <tr>
                      {["No", "C1", "C2", "C3", "C4", "C5", "C6"].map(
                        (head, i) => {
                          return (
                            <th key={i} scope="col" className="px-6 py-4">
                              {head}
                            </th>
                          );
                        }
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(({ student_name, nilai, _id }, i) => {
                      return (
                        <tr
                          key={i}
                          className="dark:border-neutral-500 border-b"
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {i + 1}
                          </td>
                          {nilai.map(({ nilai }, index) => {
                            return (
                              <td
                                key={index}
                                className="whitespace-nowrap px-6 py-4 font-medium"
                              >
                                {student_name}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </CardBody>
  );
}

export default NilaiKelompokSiswa;
