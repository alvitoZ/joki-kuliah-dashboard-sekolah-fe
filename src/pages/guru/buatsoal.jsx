import React, { useEffect, useState } from "react";
import {
  Input,
  Typography,
  IconButton,
  Select,
  Option,
} from "@material-tailwind/react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";
import { getMethod, postMethod } from "@/service/auth";
import Swal from "sweetalert2";
import Rte from "@/widgets/layout/Rte";

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
    data[index].soal = event;
    setSoal(data);
  };

  const handleFormSoalNomorChange = (event, index) => {
    let data = [...soal];
    data[index].nomor = parseInt(event.target.value);
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

  // const removeFieldsSoal = (index) => {
  //   let data = [...soal];
  //   data.splice(index, 1);
  //   setSoal(data);
  // };

  const addFieldsJawaban = (parentIndex) => {
    let data = [...soal];
    let object = {
      soal: "",
      status: false,
    };
    data[parentIndex].jawaban.push(object);

    setSoal(data);
  };

  // const removeFieldsJawaban = (parentIndex, childIndex) => {
  //   let data = [...soal];
  //   data[parentIndex].jawaban.splice(childIndex, 1);
  //   setSoal(data);
  // };
  //

  const handleFormJawabanChange = (event, parentIndex, childIndex) => {
    let data = [...soal];
    data[parentIndex].jawaban[childIndex].soal = event;
    setSoal(data);
  };
  const handleFormJawabanStatusChange = (event, parentIndex, childIndex) => {
    let data = [...soal];
    data[parentIndex].jawaban[childIndex].status = event.target.checked;
    setSoal(data);
  };
  //

  const sendData = (category, data) => {
    Swal.fire({
      title: "Post Soal ini?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Tambah!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `data berhasil ditambahkan`,
          icon: "success",
          confirmButtonText: "Tutup",
        }).then((_) => {
          postMethod.PostSoal(category, data).then((res) => {
            setSoal([
              {
                nomor: 0,
                soal: "",
                jawaban: [{ soal: "", status: false }],
              },
            ]);
          });
        });
      }
    });
  };

  const [temp, setTemp] = useState("");

  const [images, setImages] = React.useState([]);
  React.useEffect(() => {
    getMethod.GetImages().then((res) => {
      setImages(res.data.data);
    });
  }, []);

  return (
    <React.Fragment>
      <div className="grid gap-4 px-60">
        {/* <DialogPostImage /> */}
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

        {soal.map((parent, parentIndex) => {
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
                  value={parent.nomor ? parent.nomor : 0}
                  onChange={(event) =>
                    handleFormSoalNomorChange(event, parentIndex)
                  }
                  label="Nomor"
                />
                <div className="py-6">
                  <Rte
                    childData={parent.soal}
                    childFunc={(e) => handleFormSoalChange(e, parentIndex)}
                  />
                </div>
                <div className="flex gap-4 border-2 border-red-600">
                  <IconButton
                    color="blue"
                    onClick={() => addFieldsJawaban(parentIndex)}
                  >
                    <PlusCircleIcon {...icon} />
                  </IconButton>
                  <p className="text-blue-700">tambah jawaban</p>
                </div>
                {parent.jawaban.map((child, childIndex) => {
                  return (
                    <div className="pl-10" key={childIndex}>
                      <div className="border-2 border-red-600">
                        <Typography
                          variant="small"
                          className="flex items-center font-bold text-red-900"
                        >
                          Jawaban: {alphabet[childIndex]}
                        </Typography>

                        <div className="flex border-2 border-red-600">
                          <p>status</p>
                          <input
                            type="checkbox"
                            name="status"
                            value={child.status}
                            onChange={(event) =>
                              handleFormJawabanStatusChange(
                                event,
                                parentIndex,
                                childIndex
                              )
                            }
                          />
                        </div>
                        <div>
                          <div className="py-6">
                            <Rte
                              childData={child.soal}
                              childFunc={(e) =>
                                handleFormJawabanChange(
                                  e,
                                  parentIndex,
                                  childIndex
                                )
                              }
                            />
                          </div>
                        </div>
                        {/* <div className="flex gap-4 border-2 border-red-600">
                          <IconButton
                            color="yellow"
                            onClick={() =>
                              removeFieldsJawaban(parentIndex, childIndex)
                            }
                          >
                            <MinusCircleIcon {...icon} />
                          </IconButton>
                          <p className="text-yellow-600">hapus jawaban</p>
                        </div> */}
                      </div>
                    </div>
                  );
                })}

                {/* <div className="flex gap-4 border-2 border-red-600">
                  <IconButton
                    color="red"
                    onClick={() => removeFieldsSoal(parentIndex)}
                  >
                    <MinusCircleIcon {...icon} />
                  </IconButton>
                  <p className="text-red-900">hapus soal</p>
                </div> */}
              </div>
            </div>
          );
        })}
        <div
          onClick={() => sendData(temp, soal)}
          className="flex items-center justify-center rounded-lg bg-green-600 hover:bg-red-600"
        >
          <button className="w-fit p-2">Post Soal</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BuatSoal;

{
  /* <Input
value={parent.soal}
label="test"
onChange={(e) =>
  handleFormSoalChange(e.target.value, parentIndex)
}
/> */
}
