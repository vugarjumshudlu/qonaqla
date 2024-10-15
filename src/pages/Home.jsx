import React from "react";

function Home() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl w-full h-[600px] bg-hero bg-cover bg-center mt-10 rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="text-5xl text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          A frame Evler
        </h1>
      </div>
    </div>
  );
}

export default Home;
