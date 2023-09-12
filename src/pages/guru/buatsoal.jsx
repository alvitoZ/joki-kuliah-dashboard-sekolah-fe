import React from "react";
import {
  Input,
  Typography,
  IconButton,
  Select,
  Option,
} from "@material-tailwind/react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import { postMethod } from "@/service/auth";
import Swal from "sweetalert2";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export function BuatSoal() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [soal, setSoal] = useState([
    {
      nomor: 0,
      soal: "",
      jawaban: [{ soal: "", status: false }],
    },
  ]);

  const handleFormSoalChange = (event, index) => {
    let data = [...soal];
    data[index][event.target.name] = event.target.value;
    setSoal(data);
  };

  const handleFormSoalNomorChange = (event, index) => {
    let data = [...soal];
    data[index][event.target.name] = parseInt(event.target.value);
    setSoal(data);
  };

  const addFieldsSoal = () => {
    let object = {
      nomor: 0,
      soal: "",
      jawaban: [
        {
          soal: "",
          status: false,
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

  const addFieldsJawaban = (parentIndex) => {
    let data = [...soal];
    let object = {
      soal: "",
      status: false,
    };
    data[parentIndex].jawaban.push(object);

    setSoal(data);
  };

  const removeFieldsJawaban = (parentIndex, childIndex) => {
    let data = [...soal];
    data[parentIndex].jawaban.splice(childIndex, 1);
    setSoal(data);
  };

  //

  const handleFormJawabanChange = (event, parentIndex, childIndex) => {
    let data = [...soal];
    data[parentIndex].jawaban[childIndex][event.target.name] =
      event.target.value;
    setSoal(data);
  };
  const handleFormJawabanStatusChange = (event, parentIndex, childIndex) => {
    let data = [...soal];
    data[parentIndex].jawaban[childIndex][event.target.name] =
      event.target.checked;
    setSoal(data);
  };
  //

  const sendData = (category, data) => {
    postMethod.PostSoal(category, data).then((res) => {
      Swal.fire(`${res.data.msg}`);
      setSoal([
        {
          nomor: 0,
          soal: "",
          jawaban: [{ soal: "", status: false }],
        },
      ]);
    });
  };

  const [temp, setTemp] = useState("");

  return (
    <React.Fragment>
      <div className="grid gap-4 px-60">
        <div className="flex gap-4 border-2 border-red-600">
          <IconButton color="pink" onClick={addFieldsSoal}>
            <PlusCircleIcon {...icon} />
          </IconButton>
          <p className="text-pink-600">tambah soal</p>
        </div>
        <Select
          size="lg"
          label="Pilih Kategori"
          color="blue"
          value={temp}
          onChange={(e) => setTemp(e)}
        >
          <Option value="c1">c1</Option>
          <Option value="c2">c2</Option>
          <Option value="c3">c3</Option>
          <Option value="c4">c4</Option>
          <Option value="c5">c5</Option>
          <Option value="c6">c6</Option>
        </Select>

        {soal.map((form, parentIndex) => {
          return (
            <div key={parentIndex} className="flex gap-10">
              <div className="">
                <Typography
                  variant="h6"
                  className="flex items-center text-red-900"
                >
                  Soal: {parentIndex + 1}
                </Typography>
                <Input
                  name="nomor"
                  onChange={(event) =>
                    handleFormSoalNomorChange(event, parentIndex)
                  }
                  label="Nomor"
                  type="number"
                  value={form.nomor}
                />
                <Input
                  name="soal"
                  onChange={(event) => handleFormSoalChange(event, parentIndex)}
                  value={form.soal}
                  label="Soal Di Nomor ini"
                />
                <div className="flex gap-4 border-2 border-red-600">
                  <IconButton
                    color="blue"
                    onClick={() => addFieldsJawaban(parentIndex)}
                  >
                    <PlusCircleIcon {...icon} />
                  </IconButton>
                  <p className="text-blue-700">tambah jawaban</p>
                </div>
                {form.jawaban.map((e, childIndex) => {
                  return (
                    <div className="pl-10" key={childIndex}>
                      <Typography
                        variant="small"
                        className="flex items-center font-bold text-red-900"
                      >
                        Jawaban: {alphabet[childIndex]}
                      </Typography>

                      <div className="flex">
                        <p>status</p>
                        <input
                          type="checkbox"
                          name="status"
                          onChange={(event) =>
                            handleFormJawabanStatusChange(
                              event,
                              parentIndex,
                              childIndex
                            )
                          }
                        />
                      </div>
                      <Input
                        name="soal"
                        onChange={(event) =>
                          handleFormJawabanChange(
                            event,
                            parentIndex,
                            childIndex
                          )
                        }
                        value={e.soal}
                        label="Teks Di status ini"
                      />
                      <div className="flex gap-4 border-2 border-red-600">
                        <IconButton
                          color="yellow"
                          onClick={() =>
                            removeFieldsJawaban(parentIndex, childIndex)
                          }
                        >
                          <MinusCircleIcon {...icon} />
                        </IconButton>
                        <p className="text-yellow-600">hapus jawaban</p>
                      </div>
                    </div>
                  );
                })}

                <div className="flex gap-4 border-2 border-red-600">
                  <IconButton
                    color="red"
                    onClick={() => removeFieldsSoal(parentIndex)}
                  >
                    <MinusCircleIcon {...icon} />
                  </IconButton>
                  <p className="text-red-900">hapus soal</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="py-10">
          <button onClick={() => sendData(temp, soal)}>Post Soal</button>
        </div>
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
