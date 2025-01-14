import React from "react";
import Logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="fixed top-0 right-0 w-full z-10 bg-black/10 backdrop-blur-sm ">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-white font-bold text-2xl">
            <img src={Logo} alt="" className="w-10" />
            <span>OrbitX</span>
          </div>
          <div className="text-white">
            <ul className="flex item-center gap-6 text-xl py-4  ">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Galaxy</a>
              </li>
              <li>
                <a href="#">Satelite</a>
              </li>
            </ul>
          </div>
          <div className="">
            <button className="text-white border-2 bordr-white px-3 py-1 rounded-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
