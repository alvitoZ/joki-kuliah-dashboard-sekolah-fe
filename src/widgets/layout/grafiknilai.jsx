import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Pie } from "react-chartjs-2";

export const Data = [
  {
    id: 1,
    kategori: "C1",
    nilai: 80000,
    userLost: 823,
  },
  {
    id: 2,
    kategori: "C2",
    nilai: 45677,
    userLost: 345,
  },
  {
    id: 3,
    kategori: "C3",
    nilai: 78888,
    userLost: 555,
  },
  {
    id: 4,
    kategori: "C4",
    nilai: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    kategori: "C5",
    nilai: 4300,
    userLost: 234,
  },
  {
    id: 5,
    kategori: "C6",
    nilai: 4300,
    userLost: 234,
  },
];

Chart.register(CategoryScale);

export function GrafikNilai() {
  const [chartData, setChartData] = useState({});
  const data = {
    labels: Data.map((data) => data.kategori),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.nilai),
        backgroundColor: ["pink", "yellow", "blue", "red", "black", "orange"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="h-auto w-[25rem]">
      <Pie
        data={data}
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
  );
}

export default GrafikNilai;
