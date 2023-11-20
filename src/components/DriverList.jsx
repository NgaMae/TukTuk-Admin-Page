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
import { toast } from "react-toastify";
import { AiOutlineMore } from "react-icons/ai";
import admin from "../api/admin";

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);
  let [isOpen, setIsOpen] = useState(false);
  const [mark, setMark] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    admin
      .get("/drivers")
      .then((res) => {
        setLoading(false);
        setDrivers(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [drivers]);

  const HandleDelete = async () => {
    setIsOpen(false);
    await admin
      .delete(`/drivers/${mark}`)
      .then(
        toast.success("Driver deleted successfully", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      )
      .catch((error) => {
        console.log(error);
        toast.error("Error occur!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* {drivers.length == 0 && <AddButton />} */}
          {drivers?.length ? (
            <>
              <h1 className="text-center text-[3rem] font-SometypeMono m-2 max-[500px]:hidden text-gray-700">
                Driver List
              </h1>

              <table className="divide-y divide-gray-200 w-full font-Montserrat text-gray-700 max-[425px]:text-sm">
                <thead className="bg-gray-300">
                  <tr className="text-left">
                    <th className="py-3 w-[6rem] px-[2rem] max-[500px]:w-fit max-[750px]:w-fit max-[750px]:px-1">
                      No.
                    </th>
                    <th className="py-3  w-[12rem] max-[500px]:w-fit">Name</th>
                    <th className="py-3  w-[12rem] max-[500px]:w-fit">
                      Phone Number
                    </th>
                    <th className="py-3  w-[12rem] max-[500px]:w-fit">
                      Address
                    </th>
                    <th className="py-3 w-[19rem] max-[750px]:hidden">
                      National Registeration Card
                    </th>
                    <th className="py-3 w-[10rem] max-xl:hidden">License No</th>
                    <th className="py-3 max-lg:hidden"> </th>
                    <th className="py-3 min-[1024px]:hidden"></th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200">
                  {drivers.map((driver, index) => (
                    <tr key={driver._id}>
                      <td className="py-4 w-[6rem] px-[2rem] max-[750px]:w-fit max-[750px]:px-1">
                        {index + 1}
                      </td>
                      <td>{driver.name}</td>
                      <td>{driver.phoneNumber}</td>
                      <td>{driver.address}</td>
                      <td className="pr-0 max-[750px]:hidden">{driver.NRC}</td>
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
                      <td className="min-[1024px]:hidden">
                        <AiOutlineMore className="text-2xl" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <AddButton />
          )}
        </>
      )}

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed w-full h-[100vh] top-0 bg-gray-400 flex items-center justify-center bg-opacity-5 backdrop-blur backdrop-filter"
      >
        <Dialog.Panel className="w-[25rem] flex justify-center flex-col bg-[#d0e9e6] bg-opacity-40 backdrop-blur rounded-3xl shadow-[20px_20px_20px_20px_rgba(0,0,0,0.3)] font-Montserrat max-[425px]:w-[20rem]">
          <Dialog.Title className="text-center text-4xl mt-[1rem] max-[425px]:text-2xl">
            Delete!
          </Dialog.Title>
          <Dialog.Description className="text-center text-xl m-[2rem] max-[425px]:text-sm">
            Are you sure that you want to delete?
          </Dialog.Description>
          <div className="flex justify-around mb-[1rem]">
            {/* <button onClick={() => setIsOpen(false)}>Deactivate</button>
            <button onClick={() => setIsOpen(false)}>Cancel</button> */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="bg-red-500 px-4 py-2 rounded-md text-md text-white border-transparent border max-[425px]:text-sm"
            >
              No, Cancel
            </button>
            <button
              className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold max-[425px]:text-sm"
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
