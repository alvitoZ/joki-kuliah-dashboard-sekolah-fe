const c = [
  {
    nomor: "1",
    soal: "",
  },
  {
    nomor: "2",
    soal: "",
  },
  {
    nomor: "3",
    soal: "",
  },
  {
    nomor: "4",
    soal: "",
  },
];
const c2 = [
  {
    nomor: "1",
    soal: "ktiannnnnn",
    jawaban: [
      { soal: "1", status: "1" },
      { soal: "2", status: "2" },
      { soal: "3", status: "3" },
      { soal: "4", status: "4" },
    ],
  },
  //   {
  //     nomor: "2",
  //     soal: "kitann",
  //     jawaban: [
  //       { soal: "1", status: "1" },
  //       { soal: "2", status: "2" },
  //       { soal: "3", status: "3" },
  //       { soal: "4", status: "4" },
  //     ],
  //   },
];
const c3 = [
  {
    nomor: "1",
    soal: "ktiannnnnn",
    jawaban: [{ soal: "1", status: "1" }],
  },
  {
    nomor: "2",
    soal: "ktiannnnnn",
    jawaban: [{ soal: "1", status: "1" }],
  },
];

// const removeFieldsJawaban = (parentIndex, childIndex) => {
//   let data = [...c];
//   //   data[childIndex];
//   let jawaban = data[parentIndex].jawaban[childIndex];
//   data.splice(jawaban, 1);
//   // setSoal(data);
//   return { data, jawaban, parentIndex, childIndex };
// };

const removeFieldsSoal2 = (index) => {
  let data = [...c];
  data.splice(index, 1);
  return data;
};
// console.log(removeFieldsSoal2(2));

const c4 = [
  {
    nomor: 0,
    soal: "",
    jawaban: [
      { soal: "kjkj", status: false },
      { soal: "", status: false },
    ],
  },
  {
    nomor: 0,
    soal: "",
    jawaban: [
      { soal: "", status: false },
      { soal: "", status: false },
      { soal: "", status: false },
    ],
  },
  {
    nomor: 0,
    soal: "",
    jawaban: [{ soal: "", status: false }],
  },
];

const removeFieldsJawaban = (parentIndex, childIndex) => {
  let data = [...c4];
  //   data[childIndex];
  let jawaban = data[parentIndex].jawaban[childIndex];
  data[parentIndex].jawaban.splice(childIndex, 1);
  // setSoal(data);
  return { data: c4[0].jawaban, jawaban, parentIndex, childIndex };
};
console.log(removeFieldsJawaban(0, 1));

const addFieldsJawaban = (parentIndex) => {
  let data = [...c3];

  let object = {
    soal: "",
    status: "",
  };

  data[parentIndex].jawaban.push(object);
  let jawaban = data[parentIndex].jawaban;
  let jawaban2 = data[1].jawaban;

  return {
    data,
    jawaban,
    jawaban2,
  };
};

// console.log(addFieldsJawaban(0));

let alphabet = "abcdefghijklmnopqrstuvwxyz";
// alphabet = [...alphabet[0]];
// console.log(alphabet[0]);

const coba = [
  {
    coba: "meong",
    kitan: "kitan",
  },
];

// console.log(coba[0].kitan);s
