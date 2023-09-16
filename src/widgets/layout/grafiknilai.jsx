import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { getMethod } from "@/service/auth";

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
      <div className="py-10 pl-10">
        <Link
          className="rounded-lg bg-green-400 p-1 px-20 text-white hover:bg-blue-500"
          to="/siswa/Latihan-Tugas"
        >
          kembali
        </Link>
      </div>
    </>
  );
}

export default GrafikNilai;
