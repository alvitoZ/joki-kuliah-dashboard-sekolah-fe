import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Button,
  Typography,
  IconButton,
  Select,
  Option,
} from "@material-tailwind/react";
import {
  PlusIcon,
  XMarkIcon,
  TrashIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/outline";

import { useState, useEffect } from "react";
import { postMethod } from "@/service/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export function BuatSoal() {
  //data
  // const [detailStock, setDetailStock] = useState([{ title: "", stock: "" }]);
  // const [data, setData] = useState({
  //   title: "",
  //   detail_stock: null,
  // });

  const [jawaban, setJawaban] = useState([{ soal: "", status: "" }]);
  const [soal, setSoal] = useState([
    {
      nomor: "",
      soal: "",
      jawaban: [{ soal: "", status: "" }],
    },
  ]);

  const handleFormJawabanChange = (event, parentIndex, childIndex) => {
    let data = [...soal[parentIndex].jawaban];
    data[childIndex][event.target.name] = event.target.value;
    setSoal(data);
  };

  const addFieldsJawaban = (parentIndex) => {
    let object = {
      soal: "",
      status: "",
    };

    setSoal([...soal[parentIndex].jawaban, object]);
  };

  const removeFieldsJawaban = (parentIndex, childIndex) => {
    let data = [...soal[parentIndex].jawaban];
    data.splice(childIndex, 1);
    setSoal(data);
  };
  // console.log(jawaban);

  //

  const handleFormSoalChange = (event, index) => {
    let data = [...soal];
    data[index][event.target.name] = event.target.value;
    setSoal(data);
  };

  const addFieldsSoal = () => {
    let object = {
      nomor: "",
      soal: "",
      jawaban: [
        {
          soal: "",
          status: "",
        },
      ],
    };

    setSoal([...soal, object]);
  };

  const removeFieldsSoal = (index) => {
    let data = [...soal];
    data.splice(index, 1);
    setSoal(data);
  };
  console.log(soal);
  //

  //post data
  // useEffect(() => {
  //   setData({ ...data, detail_stock: detailStock });
  // }, [detailStock]);

  // const sendData = () => {
  //   postMethod.CreateStockDarah(data).then((res) => {
  //     setDetailStock([{ title: "", stock: "" }]);
  //   });
  // };

  return (
    <React.Fragment>
      <div className="grid gap-4">
        <Typography variant="h6">Jenis Golongan Darah</Typography>
        <Select
          size="lg"
          label="Pilih Golongan Darah"
          color="blue"
          // onChange={(e) => setData({ ...data, title: e })}
        >
          <Option value="C1">C1</Option>
          <Option value="C2">C2</Option>
          <Option value="C3">C3</Option>
          <Option value="C4">C4</Option>
          <Option value="C5">C5</Option>
          <Option value="C6">C6</Option>
        </Select>
        <Typography variant="h6" className="-mb-2">
          Detail Sel Darah
        </Typography>

        <IconButton color="red" onClick={addFieldsSoal}>
          <PlusCircleIcon {...icon} />
        </IconButton>
        {soal.map((form, index) => {
          return (
            <div key={index} className="flex gap-10">
              <div>
                <Typography
                  variant="h6"
                  className="flex items-center text-red-900"
                >
                  Soal: {index + 1}
                </Typography>
              </div>
              <div className="">
                <div className="">
                  <Typography
                    variant="h6"
                    className="flex items-center text-red-900"
                  >
                    Soal: {index + 1}
                  </Typography>
                  <Input
                    name="nomor"
                    onChange={(event) => handleFormSoalChange(event, index)}
                    label="Nomor"
                    value={form.nomor}
                  />
                  <Input
                    name="soal"
                    onChange={(event) => handleFormSoalChange(event, index)}
                    value={form.soal}
                    label="Soal Di Nomor ini"
                  />
                  {form.jawaban.map((e, i) => {
                    return (
                      <div className="pl-10" key={i}>
                        <Typography
                          variant="small"
                          className="flex items-center text-red-900"
                        >
                          Jawaban: {i + 1}
                        </Typography>
                        <Input
                          name="status"
                          onChange={(event) =>
                            handleFormJawabanChange(event, index)
                          }
                          value={e.status}
                          label="Status"
                        />
                        <Input
                          name="soal"
                          onChange={(event) =>
                            handleFormJawabanChange(event, index)
                          }
                          value={e.soal}
                          label="Teks Di status ini"
                        />
                        <div>
                          <IconButton
                            color="red"
                            onClick={() => removeFieldsJawaban(index, i)}
                          >
                            <MinusCircleIcon {...icon} />
                          </IconButton>
                          <IconButton
                            color="red"
                            onClick={() => addFieldsJawaban(index)}
                          >
                            <PlusCircleIcon {...icon} />
                          </IconButton>
                        </div>
                      </div>
                    );
                  })}
                  <IconButton
                    color="red"
                    onClick={() => removeFieldsSoal(index)}
                  >
                    <MinusCircleIcon {...icon} />
                  </IconButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default BuatSoal;

{
  /* {jawaban.map((form, index) => {
          return (
            <div key={index}>
              <div className="flex flex-row gap-2">
                <Typography
                  variant="h6"
                  className="flex items-center text-red-900"
                >
                  Jawaban: {index + 1}
                </Typography>
              </div>
              <div key={index} className="flex items-center justify-between">
                <div>
                  <Input
                    name="soal"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.soal}
                  />
                  <Input
                    name="status"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.status}
                  />
                </div>
                <IconButton color="red" onClick={() => removeFields(index)}>
                  <MinusCircleIcon {...icon} />
                </IconButton>
              </div>
            </div>
          );
        })} */
}
