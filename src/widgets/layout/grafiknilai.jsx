import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { getMethod } from "@/service/auth";

// export const Data = [
//   {
//     id: 1,
//     kategori: "C1",
//     nilai: 80000,
//     userLost: 823,
//   },
//   {
//     id: 2,
//     kategori: "C2",
//     nilai: 45677,
//     userLost: 345,
//   },
//   {
//     id: 3,
//     kategori: "C3",
//     nilai: 78888,
//     userLost: 555,
//   },
//   {
//     id: 4,
//     kategori: "C4",
//     nilai: 90000,
//     userLost: 4555,
//   },
//   {
//     id: 5,
//     kategori: "C5",
//     nilai: 4300,
//     userLost: 234,
//   },
//   {
//     id: 5,
//     kategori: "C6",
//     nilai: 4300,
//     userLost: 234,
//   },
// ];

Chart.register(CategoryScale);

export function GrafikNilai() {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    getMethod.GetNilaiGrafik().then((res) => {
      setChartData(res.data.data);
    });
  }, []);

  const dataPie = {
    labels: chartData.map((data) => data.kategori),
    datasets: [
      {
        label: "Grafik Total Nilai",
        data: chartData.map((data) => data.nilai),
        backgroundColor: ["pink", "yellow", "blue", "red", "green", "orange"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  const dataBar = {
    labels: chartData.map((data) => data.kategori),
    datasets: [
      {
        label: "Grafik Total Nilai",
        data: chartData.map((data) => data.nilai),
        backgroundColor: ["pink", "yellow", "blue", "red", "green", "orange"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <div className="flex h-auto  w-[25rem] ">
        <Bar
          data={dataBar}
          height={300}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Nilai Dari C1 sampai C6",
              },
            },
          }}
        />
        <Pie
          data={dataPie}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Nilai Dari C1 sampai C6",
              },
            },
          }}
        />
      </div>
      <div className="py-10">
        <Link
          className="rounded-lg bg-green-400 p-1 hover:bg-blue-500"
          to="/siswa/Latihan-Tugas"
        >
          kembali
        </Link>
      </div>
    </>
  );
}

export default GrafikNilai;
