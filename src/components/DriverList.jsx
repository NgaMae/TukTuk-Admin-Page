import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { Dialog } from "@headlessui/react";
import axios from "axios";
import AddButton from "../components/AddButton";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);
  let [isOpen, setIsOpen] = useState(false);
  const [mark, setMark] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/drivers")
      .then((res) => {
        setLoading(false);
        setDrivers(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [drivers]);

  const HandleDelete = () => {
    setIsOpen(false);
    axios.delete(`http://localhost:3000/drivers/${mark}`).catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {drivers.length == 0 && <AddButton />}

          <h1 className="text-center text-[3rem] font-SometypeMono m-2 max-[500px]:hidden text-gray-700">
            Driver List
          </h1>
          <table className="divide-y divide-gray-200 w-full font-Montserrat text-gray-700">
            <thead className="bg-gray-300">
              <tr className="text-left">
                <th className="py-3 w-[6rem] px-[2rem] max-[500px]:w-fit ">
                  No.
                </th>
                <th className="py-3  w-[12rem] max-[500px]:w-fit">Name</th>
                <th className="py-3  w-[12rem] max-[500px]:w-fit">
                  Phone Number
                </th>
                <th className="py-3  w-[12rem] max-[500px]:w-fit">Address</th>
                <th className="py-3 w-[19rem] max-md:hidden ">
                  National Registeration Card
                </th>
                <th className="py-3 w-[10rem] max-xl:hidden">License No</th>
                <th className="py-3 max-lg:hidden"> </th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200">
              {drivers.map((driver, index) => (
                <tr key={driver._id}>
                  <td className="py-4 w-[7rem] px-[2rem]">{index + 1}</td>
                  <td>{driver.name}</td>
                  <td>{driver.phoneNumber}</td>
                  <td>{driver.address}</td>
                  <td className="pr-0">{driver.NRC}</td>
                  <td className="max-xl:hidden">{driver.licenseNo}</td>
                  <td className="flex items-center justify-center max-lg:hidden">
                    <Link to={`/editDriver/${driver._id}`}>
                      <button className="hover:bg-gray-300 rounded-full">
                        <AiOutlineEdit className="text-blue-600 text-[1.5rem] m-5" />
                      </button>
                    </Link>
                    <Link to={`/showDetail/${driver._id}`}>
                      <button className="hover:bg-gray-300 rounded-full">
                        <AiOutlineExclamationCircle className="text-yellow-600 text-[1.5rem] m-5" />
                      </button>
                    </Link>
                    <button
                      className="hover:bg-gray-300 rounded-full"
                      onClick={() => {
                        setIsOpen(true);
                        setMark(driver._id);
                      }}
                    >
                      <AiOutlineDelete className="text-red-600 text-[1.5rem] m-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed w-full h-[100vh] top-0 bg-gray-400 flex items-center justify-center bg-opacity-5 backdrop-blur backdrop-filter"
      >
        <Dialog.Panel className="w-[25rem] flex justify-center flex-col bg-[#d0e9e6] bg-opacity-40 backdrop-blur rounded-3xl shadow-[20px_20px_20px_20px_rgba(0,0,0,0.3)] font-Montserrat">
          <Dialog.Title className="text-center text-4xl mt-[1rem]">
            Delete!
          </Dialog.Title>
          <Dialog.Description className="text-center text-xl m-[2rem]">
            Are you sure that you want to delete?
          </Dialog.Description>
          <div className="flex justify-around mb-[1rem]">
            {/* <button onClick={() => setIsOpen(false)}>Deactivate</button>
            <button onClick={() => setIsOpen(false)}>Cancel</button> */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="bg-red-500 px-4 py-2 rounded-md text-md text-white border-transparent border"
            >
              No, Cancel
            </button>
            <button
              className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
              onClick={HandleDelete}
            >
              Yes, Delete
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default DriverList;
