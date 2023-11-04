import React from "react";
import { Link } from "react-router-dom";
import { BsFillPersonPlusFill } from "react-icons/bs";
import DriverList from "../components/DriverList";
import Loading from "../components/Loading";

const showDrivers = () => {
  return (
    <>
      <div className="flex flex-row justify-between bg-[#d0e9e6] h-[5rem] shadow-slate-400 shadow-lg w-full sticky top-0 z-30 bg-opacity-40 backdrop-blur backdrop-filter">
        <div className="font-SometypeMono italic text-[3rem] text-gray-700 ml-[2rem] h-full pt-1 flex-none max-[500px]:text-[2rem] max-[500px]:pt-4 max-[500px]:ml-1">
          TukTuk.com
        </div>
        <div className="min-[500px]:hidden h-fit my-auto mr-4">
          <Link to="/addDriver">
            <BsFillPersonPlusFill className="text-[2rem] text-green-400" />
          </Link>
        </div>
        <div className="h-full mr-[1rem] flex flex-col justify-center max-[500px]:hidden">
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
