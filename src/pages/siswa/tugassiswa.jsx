import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import ContainerTugas from "@/widgets/cards/container-tugas";
import TugasGagal from "@/widgets/cards/tugas-gagal";
import { getMethod, postMethod } from "@/service/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { resultArr, jumlah, filterJawaban } from "@/helpers/filterjawaban";

export function TugasSiswa() {
  const [soal, setSoal] = useState([]);
  const [layout, setLayout] = useState(false);
  const [kategoriC, setKategoriC] = useState(1);
  let [nilai, setNilai] = useState(0);
  const [grafikNilai, setGrafikNilai] = useState(1);
  const nav = useNavigate();

  useEffect(() => {
    getMethod.SoalList(`c${kategoriC}`).then((res) => {
      setSoal(res.data.data);
    });
  }, [kategoriC, layout]);

  const [jawaban, setJawaban] = useState([]);
  const [allJawaban, setAllJawaban] = useState([]);

  const handleFormChange = (data, i, _id, kategori) => {
    jawaban.push({
      _id: _id,
      kategori: kategori,
      jawaban: { soal: data[i].soal, status: data[i].status },
    });
  };

  const cobafilter = (jawaban) => {
    const ids = jawaban.map(({ _id }) => _id);
    const filtered = jawaban.filter(
      ({ _id }, index) => !ids.includes(_id, index + 1)
    );
    if (filtered.length >= soal.length) {
      // postMethod.PostJawaban(filtered).then((res) => {

      allJawaban.push({
        kategori: "c" + kategoriC,
        jawaban: filtered,
      });

      setJawaban([]);

      setLayout((v) => !v);
      // });
    }
  };

  const coba = (jawaban) => {
    const ids = jawaban.map(({ _id }) => _id);
    const filtered = jawaban.filter(
      ({ _id }, index) => !ids.includes(_id, index + 1)
    );
    if (filtered.length >= soal.length) {
      // setJawaban([]);
      Swal.fire({
        title: `dengan ini maka session sekarang akan berakhir dengan nilai tergantung berapa soal yang sudah dikerjakan`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, akhiri!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `nilai berhasil dikirimkan kembali ke session baru`,
            icon: "success",
            confirmButtonText: "Tutup",
          }).then((_) => {
            allJawaban.push({
              kategori: "c" + kategoriC,
              jawaban: filtered,
            });
            postMethod.PostJawaban(resultArr(allJawaban)).then((res) => {
              window.location.reload();
            });
          });
        }
      });
    }
  };

  if (grafikNilai === 7) {
    setAllJawaban([]);
    setGrafikNilai(1);
    postMethod.PostJawaban(resultArr(allJawaban)).then((res) => {
      nav("/siswa/grafik-nilai");
    });
  }

  const lanjut = () => {
    setGrafikNilai((e) => e + 1);
    setNilai((c) => (c === 5 ? 0 : c + 1));
    setKategoriC((c) => (c === 6 ? 1 : c + 1));
    setLayout((v) => !v);
  };

  return (
    <div className="mt-10">
      {/* <h1 onClick={() => setC((c) => (c === 6 ? 1 : c + 1))}>a</h1>
      <h2>{c}</h2>
      <h1 onClick={() => setC((c) => c - 1)}>b</h1> */}

      <div>
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
          Harap diperhatikan, ketika kamu sudah menjawab, maka otomatis
          pertanyaan tersebut akan menghilang
        </Typography>
        {layout ? (
          <TugasGagal
            hasilParent={lanjut}
            kategori={"c" + kategoriC}
            nilai={jumlah(filterJawaban(allJawaban[nilai])).nilai}
            total_benar={filterJawaban(allJawaban[nilai]).benar.length}
          />
        ) : (
          <div className="max-w-xs overflow-hidden rounded bg-white ">
            <div className="px-6 py-4 shadow-lg">
              <p className="mb-2 text-lg font-bold text-red-900">
                Pilihan Ganda
              </p>
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
            <div className="rounded-lg border-2 bg-blue-gray-800 hover:border-red-500">
              <div className="flex justify-evenly p-2 text-white">
                <button
                  onClick={() => cobafilter(jawaban)}
                  className="bg-red-500 py-2 px-4 hover:bg-blue-500"
                >
                  Lanjut?
                </button>
                <button
                  onClick={() => coba(jawaban)}
                  className="bg-green-300 py-2 px-4 hover:bg-blue-500 "
                >
                  Selesai?
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default TugasSiswa;
