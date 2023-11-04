import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const AddButton = () => {
  return (
    <>
      <div className="h-[88vh] w-full flex items-center justify-center">
        <Link to={"/addDriver"}>
          <div className=" text-gray-400 hover:text-gray-600 border-dashed border-2 border-gray-500 w-fit flex flex-col items-center rounded-lg py-[1rem] px-[4rem] hover:border-green-950">
            <h1 className=" p-2 text-[1.5rem] max-[500px]:text-[1rem]">
              There is no driver yet! Let add one
            </h1>
            <BsFillPlusCircleFill className=" text-[5rem] max-[500px]:text-[3rem] m-[1rem]" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default AddButton;
