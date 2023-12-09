import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonPlusFill } from "react-icons/bs";
import DriverList from "../components/DriverList";
import Auth from "../components/Auth";

const showDrivers = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return !authenticated ? (
    <Auth authenticated={authenticated} setAuthenticated={setAuthenticated} />
  ) : (
    <>
      <div className="flex flex-row justify-between bg-[#d0e9e6] min-[425px]:h-[5rem] shadow-slate-400 shadow-lg w-full sticky top-0 z-30 bg-opacity-40 backdrop-blur backdrop-filter">
        <div className="font-SometypeMono italic text-[3rem] text-gray-700 ml-[2rem] h-full pt-1 flex-none max-[500px]:text-[2rem] max-[500px]:pt-4 max-[500px]:ml-1">
          Tuk<span className="text-[#4dff4d]">Tuk</span>.com
        </div>
        <div className="min-[550px]:hidden h-fit my-auto mr-4">
          <Link to="/addDriver">
            <BsFillPersonPlusFill className="text-[2rem] text-green-400" />
          </Link>
        </div>
        <div className="h-full mr-[1rem] flex flex-col justify-center max-[550px]:hidden">
          <Link to="/addDriver">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg border-r-2 border-gray-400">
              <div className="absolute inset-0 w-3 bg-gray-400 transition-all duration-[250ms] ease-out group-hover:w-full  border-x-2 border-gray-400"></div>
              <span className="relative text-[1.5rem] italic text-gray-700 group-hover:text-white font-Ubuntu font-semibold">
                Add Driver
              </span>
            </button>
          </Link>
        </div>
      </div>
      <DriverList />
    </>
  );
};

export default showDrivers;
