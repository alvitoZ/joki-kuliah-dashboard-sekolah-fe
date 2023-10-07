import * as React from "react";
import { useState, useEffect } from "react";
import { getMethod } from "@/service/auth";
import { Card, CardBody } from "@material-tailwind/react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { filterNameKategori, loop } from "@/helpers/filterkategori";

Chart.register(CategoryScale);

export function KelompokGrafik() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    getMethod.GetNilais().then((res) => {
      setChartData(res.data.data);
    });
  }, []);

  const data = loop(filterNameKategori(chartData));

  const dataPie = {
    labels: ["C1", "C2", "C3", "C4", "C5", "C6"],
    datasets: [
      {
        label: "Grafik Total Nilai",
        data: data.map((data) => data),
        backgroundColor: ["pink", "yellow", "blue", "red", "green", "orange"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  const dataBar = {
    labels: ["C1", "C2", "C3", "C4", "C5", "C6"],
    datasets: [
      {
        label: "Grafik Total Nilai",
        data: data.map((data) => data),
        backgroundColor: ["pink", "yellow", "blue", "red", "green", "orange"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="py-5">
      <Card className="">
        <CardBody className="">
          <div className="flex h-auto w-[50vw] flex-wrap">
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
        </CardBody>
      </Card>
    </div>
  );
}

export default KelompokGrafik;
