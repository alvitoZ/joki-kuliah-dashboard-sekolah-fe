import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import ContainerTugas from "@/widgets/cards/container-tugas";
import TugasGagal from "@/widgets/cards/tugas-gagal";
import { getMethod, postMethod } from "@/service/auth";
import { GrafikNilai } from "@/widgets/layout";
import { useNavigate } from "react-router-dom";

export function TugasSiswa() {
  const [soal, setSoal] = useState([]);
  const [hasil, setHasil] = useState({});
  const [layout, setLayout] = useState(false);
  const [kategoriC, setKategoriC] = useState(1);
  const [grafikNilai, setGrafikNilai] = useState(1);
  const [time, setTime] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    getMethod.SoalList(`c${kategoriC}`).then((res) => {
      setSoal(res.data.data);
      setTimeout(() => {
        setTime((v) => !v);
      }, 5000);
    });
  }, [kategoriC, layout]);
  // console.log(soal);

  const [jawaban, setJawaban] = useState([]);

  const handleFormChange = (data, i, _id, kategori) => {
    jawaban.push({
      _id: _id,
      kategori: kategori,
      jawaban: { soal: data[i].soal, status: data[i].status },
    });
    // console.log(jawaban);
  };

  const cobafilter = (jawaban) => {
    const ids = jawaban.map(({ _id }) => _id);
    const filtered = jawaban.filter(
      ({ _id }, index) => !ids.includes(_id, index + 1)
    );
    if (filtered.length >= soal.length) {
      postMethod.PostJawaban(filtered).then((res) => {
        setJawaban([]);
        setHasil(res.data);
        setLayout((v) => !v);
      });
    }
  };

  if (grafikNilai > 6) {
    return nav("/siswa/grafik-nilai");
  }

  const lanjut = () => {
    setGrafikNilai((e) => e + 1);
    setKategoriC((e) => (e <= 6 ? e + 1 : (e = 1)));
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
        <div className="max-w-xs overflow-hidden rounded bg-white ">
          <div className="px-6 py-4 shadow-lg">
            <p className="mb-2 text-lg font-bold text-red-900">Pilihan Ganda</p>
            <p className="mb-2 text-sm font-bold text-red-900">Nomor 1-20</p>
            {soal.map(({ jawaban, kategori, soal, _id }, id) => {
              return (
                <ContainerTugas
                  data={jawaban}
                  kategori={kategori}
                  _id={_id}
                  id={id}
                  soal={soal}
                  key={id}
                  atasFunc={handleFormChange}
                />
              );
            })}
          </div>
          <div className=" bg-black text-center text-base font-bold text-red-900 ">
            <button
              disabled={time}
              onClick={() => cobafilter(jawaban)}
              className="pb-2 hover:bg-blue-500 hover:text-white"
            >
              Kumpulkan Jawaban
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default TugasSiswa;
