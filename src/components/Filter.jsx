import React from "react";

function Filter() {
  return (
    <div
      className="w-[700px] h-16 rounded-full bg-green-50 flex justify-center items-center backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-50 gap-10 text-white absolute z-50"
    >
      <div>
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
        <button>Axtar</button>
      </div>
    </div>
  );
}

export default Filter;
