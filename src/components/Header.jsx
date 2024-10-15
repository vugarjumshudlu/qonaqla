import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-[#257C7F] flex justify-center">
      <div className="max-w-screen-xl w-full h-[60px] grid grid-cols-3 items-center px-5 text-white">
        <div className="text-4xl font-extrabold mr-10 font-[labora] tracking-wider">
          <Link className="hover:text-[#FF6500]" to="/">
            qonaqla
          </Link>
        </div>
        <div className="flex gap-10 shrink-0">
          <Link to="/favorites">Favori Evlər</Link>
          <Link to="/about">Haqqımızda</Link>
        </div>
        <div className="flex gap-5 shrink-0 flex items-center">
          <Link className="" to="/createlisting">
            <button className="bg-white text-[#FF6500] hover:bg-[#FF6500] hover:text-white w-36 h-8 rounded-lg">Evini Kirayə Ver</button>
          </Link>
          <Link to="/login">Giriş</Link>
          <Link to="/register">Qeydiyyat</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
