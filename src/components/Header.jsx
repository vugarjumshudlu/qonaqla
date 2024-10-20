import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddHomeIcon from "@mui/icons-material/AddHome";
import Filter from "./Filter";
import UserMenu from "./UserMenu";

function Header({ isScrolled }) {
  return (
    <div className="flex justify-center">
      <div
        className={`backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-400 flex justify-center w-full fixed top-0 z-50 text-white transition-all duration-300 ${
          isScrolled ? "max-w-full mt-0" : "max-w-[1200px] mt-6"
        } ${isScrolled ? "rounded-none border-none" : "rounded-xl"}`}
      >
        <div className="max-w-screen-xl w-full h-[70px] flex items-center px-5 justify-between">
          <div className="text-4xl font-extrabold font-[labora] tracking-wider">
            <Link className="text-white" to="/">
              qonaqla
            </Link>
          </div>

          {/* Kaydırılmadan önce Favori Evler ve Haqqımızda */}
          <div
            className={`flex-grow flex justify-center gap-5 items-center transition-all duration-300 ${
              isScrolled ? "opacity-0 hidden" : "opacity-100 visible"
            }`}
          >
            <Link to="/favorites">Favori Evler</Link>
            <Link to="/about">Haqqımızda</Link>
          </div>

          {/* Kaydırıldıktan sonra Filter */}
          <div
            className={`flex-grow transition-all duration-500 ${
              isScrolled
                ? "opacity-100 translate-y-0 flex justify-center"
                : "opacity-0 hidden translate-y-10"
            }`}
          >
            <Filter />
          </div>

          <div className="flex gap-5 items-center">
            <Link to="/createlisting">
              <button className="py-2 px-3 text-sm rounded-full border border-solid border-indigo-200 text-white cursor-pointer font-semibold shadow-xs transition-all duration-500 hover:bg-indigo-600 flex gap-2 items-center">
                <AddHomeIcon /> Evini Kirayə Ver
              </button>
            </Link>
            <UserMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider({ isScrolled }) {
  return (
    <div className="flex justify-center">
      <div className="w-full h-[550px] shadow-2xl bg-hero bg-cover bg-center overflow-hidden relative flex items-center justify-center">
        {/* Slider içinde Filter */}
        <div
          className={`absolute transition-all duration-500 ${
            isScrolled
              ? "opacity-0 translate-y-10"
              : "opacity-100 translate-y-0"
          }`}
        >
          <Filter />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="text-5xl font-[labora] text-white absolute left-1/2 bottom-20 transform -translate-x-1/2 z-20">
          A frame Evler
        </h1>
      </div>
    </div>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150); // 150 piksel üzerindeki kaydırmalar için etkinleştirme
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header isScrolled={isScrolled} />
      <Slider isScrolled={isScrolled} />
    </>
  );
}

export default App;
