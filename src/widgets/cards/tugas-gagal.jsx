import React, { useEffect, useState } from "react";
import axios from "axios";

const TugasGagal = ({ kategori, total_benar, nilai, hasilParent }) => {
  return (
    <div className="max-w-xs overflow-hidden rounded bg-blue-gray-300">
      <div className="h-8 text-center text-base font-bold"></div>
      <div className="bg-black text-center text-base font-bold text-red-900">
        <p className="pb-2">Kumpulkan Jawaban</p>
      </div>
      <div
        className="flex flex-col gap-3 p-6
      "
      >
        <p className="text-base font-bold text-gray-800">Detail Nilai</p>
        <p className="text-base font-bold text-gray-800">
          Total Nilai Kamu: {nilai ? nilai : 0}%
        </p>
        <p className="text-base font-bold text-gray-800">
          Total jawaban benar: {total_benar ? total_benar : 0}
        </p>
        <p className="text-base font-bold text-gray-800">
          Kategori Penilaian: {kategori ? kategori : ""}
        </p>
        {nilai === 10 ? (
          <p
            className="text-base font-bold text-gray-800"
            onClick={() => hasilParent()}
          >
            Lanjut
          </p>
        ) : (
          <p className="text-base font-bold text-gray-800">
            Komentar: Kamu sepertinya mengalami kesulitan dalam menganalisa
            pertanyaan, kalo ada yg mau ditanya silahkan diskusikan dengan Guru
            mu, Oke!
          </p>
        )}
      </div>
    </div>
  );
};

export default TugasGagal;
