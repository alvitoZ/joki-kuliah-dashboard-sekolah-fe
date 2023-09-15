import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import ContainerTugas from "@/widgets/cards/container-tugas";
import TugasGagal from "@/widgets/cards/tugas-gagal";
import { getMethod, postMethod } from "@/service/auth";

export function TugasSiswa() {
  const [soal, setSoal] = useState([]);
  const [hasil, setHasil] = useState({});
  const [layout, setLayout] = useState(false);
  const [kategoriC, setKategoriC] = useState(1);
  useEffect(() => {
    getMethod.SoalList(`c${kategoriC}`).then((res) => {
      setSoal(res.data.data);
    });
  }, [kategoriC, layout]);

  const [jawaban, setJawaban] = useState([]);

  const handleFormChange = (data, i, nomor, kategori) => {
    jawaban.push({
      nomor: nomor,
      objectId: data[i]._id,
      kategori: kategori,
      jawaban: { soal: data[i].soal, status: data[i].status },
    });
  };

  const cobafilter = (jawaban) => {
    const ids = jawaban.map(({ nomor }) => nomor);
    const filtered = jawaban.filter(
      ({ nomor }, index) => !ids.includes(nomor, index + 1)
    );
    if (filtered.length >= soal.length) {
      postMethod.PostJawaban(filtered).then((res) => {
        setJawaban([]);
        setHasil(res.data);
        setLayout((v) => !v);
      });
    }
  };

  const lanjut = () => {
    setKategoriC((e) => e + 1);
    setLayout((v) => !v);
  };

  return (
    <div className="mt-10">
      <Typography
        variant="h5"
        className="flex items-center justify-start font-bold text-gray-800"
      >
        Kerjakan dan jawab pertanyaan berikut dengan benar!
      </Typography>
      <Typography
        variant="h6"
        className="flex items-center justify-end py-4 font-bold text-red-700"
      >
        Harap diperhatikan, ketika kamu sudah menjawab, maka otomatis pertanyaan
        tersebut akan menghilang
      </Typography>
      {layout ? (
        <TugasGagal
          hasilParent={lanjut}
          kategori={hasil.kategori}
          total_benar={hasil.total_benar}
          nilai={hasil.nilai}
        />
      ) : (
        <div className="max-w-xs overflow-hidden rounded bg-blue-gray-300 ">
          <div className="px-6 py-4 shadow-lg">
            <p className="mb-2 text-lg font-bold text-red-900">Pilihan Ganda</p>
            <p className="mb-2 text-sm font-bold text-red-900">Nomor 1-20</p>
            {soal.map((data, id) => {
              return (
                <ContainerTugas
                  data={data.jawaban}
                  kategori={data.kategori}
                  nomor={data.nomor}
                  id={id}
                  soal={data.soal}
                  key={id}
                  atasFunc={handleFormChange}
                />
              );
            })}
          </div>
          <div className="bg-black text-center text-base font-bold text-red-900">
            <p className="pb-2" onClick={() => cobafilter(jawaban)}>
              Kumpulkan Jawaban
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export default TugasSiswa;
