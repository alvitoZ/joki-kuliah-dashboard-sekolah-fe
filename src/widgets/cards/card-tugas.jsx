import React, { useState } from "react";

const CardTugas = ({ id, abcde, text, isSelected, onClick }) => {
  const buttonClassName = isSelected ? "bg-red-700" : "";
  const coba = () => {
    onClick();
  };

  return (
    <div
      className={`border-[2px] border-black text-center text-sm font-bold ${buttonClassName}`}
      // onClick={() => setClicked("bg-red-700")}
      onClick={coba}
    >
      {/* <p>{abcde}) Gerak suatu benda dan lintasannya berupa garis lurus</p> */}
      <p>
        {abcde}) {text}
      </p>
    </div>
  );
};

export default CardTugas;
