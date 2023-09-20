import React, { useEffect } from "react";
import { Select, Option } from "@material-tailwind/react";
import { useNavigate, Link } from "react-router-dom";

export function EditSoal() {
  const nav = useNavigate();
  const [temp, setTemp] = React.useState("");
  useEffect(() => {
    nav(`/guru/Edit-Soal${temp ? "/" + temp : ""}`);
  }, [temp]);

  return (
    <div className="p-28">
      <div className="flex gap-4 border-2 border-red-600 p-10">
        <p className="text-pink-600">Select Kategori</p>
        <Select
          size="lg"
          label="Pilih Kategori"
          color="blue"
          onChange={(e) => setTemp(e)}
        >
          <Option value="c1">c1</Option>
          <Option value="c2">c2</Option>
          <Option value="c3">c3</Option>
          <Option value="c4">c4</Option>
          <Option value="c5">c5</Option>
          <Option value="c6">c6</Option>
        </Select>
        {/* <Link to={"/guru/Edit-Soal"}>kembali</Link> */}
      </div>
    </div>
  );
}

export default EditSoal;
