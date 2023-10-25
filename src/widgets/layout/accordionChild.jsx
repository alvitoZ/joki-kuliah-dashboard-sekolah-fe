import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { ArcElement, Tooltip, Legend } from "chart.js";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { capitalizeFirstLetter } from "@/helpers/capitalize";

Chart.register(CategoryScale, ArcElement, Tooltip, Legend, ChartDataLabels);

export function AccordionChild({ nilai, sesi, index, expanded, handleChange }) {
  const dataPie = {
    labels: nilai.map((data) =>
      data.kategori ? capitalizeFirstLetter(data.kategori) : "-"
    ),

    datasets: [
      {
        label: "Grafik Total Nilai",
        data: nilai.map((data) => (data.nilai ? data.nilai : "-")),
        backgroundColor: ["pink", "yellow", "blue", "red", "green", "orange"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  const dataBar = {
    labels: nilai.map((data) =>
      data.kategori ? capitalizeFirstLetter(data.kategori) : "-"
    ),
    datasets: [
      {
        label: "Grafik Total Nilai",
        data: nilai.map((data) => (data.nilai ? data.nilai : "-")),
        backgroundColor: ["pink", "yellow", "blue", "red", "green", "orange"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <Accordion expanded={expanded === index} onChange={handleChange(index)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{sesi}</Typography>
      </AccordionSummary>
      <AccordionDetails>
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
                responsive: true,
                maintainAspectRatio: false,
                datalabels: {
                  formatter: (value, ctx) => {
                    let sum = 0;
                    let dataArr = ctx.chart.data.datasets[0].data;
                    dataArr.map((data) => {
                      sum += data;
                    });
                    let percentage = ((value * 100) / sum).toFixed(2) + "%";
                    return percentage;
                  },
                  color: "#FFF",
                },
              },
            }}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionChild;
