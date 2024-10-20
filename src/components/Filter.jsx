import React from "react";
import SearchIcon from '@mui/icons-material/Search';

function Filter() {
  return (
    <div
      className="w-[500px] h-14 rounded-full text-lg bg-white backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-50 text-white z-30 sticky">
      <div className="w-full h-full grid grid-cols-4 pl-16 pr-5 gap-16">
        <input
          className="bg-transparent placeholder:text-white outline-none"
          type="text"
          placeholder="Ölkə"
        />
        <input
          className="bg-transparent placeholder:text-white outline-none"
          type="text"
          placeholder="Şəhər"
        />
        <input
          className="bg-transparent placeholder:text-white outline-none"
          type="text"
          placeholder="Ev Tipi"
        />
        <button className="flex justify-end items-center"><SearchIcon fontSize="large"/></button>
      </div>
    </div>
  );
}

export default Filter;
