import React from "react";
import Filter from "./Filter";

function Slider() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full h-[550px] shadow-2xl bg-hero bg-cover bg-center overflow-hidden relative flex items-center justify-center">
          {/* Siyah gölgeli arka plan */}
          <div className="absolute inset-0 bg-black/30 z-30"></div>
          
          {/* Filter bileşeni, z-index'i daha yüksek yapıldı */}
          <div className="absolute z-40">
            <Filter />
          </div>

          {/* Başlık */}
          <h1 className="text-5xl font-[labora] text-white absolute left-1/2 bottom-20 transform -translate-x-1/2 z-30">
            A frame Evler
          </h1>
        </div>
      </div>
    </>
  );
}

export default Slider;
