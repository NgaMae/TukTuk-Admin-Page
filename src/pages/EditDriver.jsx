import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import admin from "../api/admin";

const EditDriver = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [licenseNo, setLicenseNo] = useState();
  const [NRC, setNRC] = useState();

  const update = async () => {
    const data = {
      name,
      userName,
      password,
      phoneNumber,
      address,
      NRC,
      licenseNo,
    };
    await admin
      .put(`/drivers/${id}`, data)
      .then(
        navigate("/"),
        toast.success("Information updated successfully!", {
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
        console.log(error.message);
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

  useEffect(() => {
    admin
      .get(`/drivers/${id}`)
      .then((res) => {
        setName(res.data.name);
        setUserName(res.data.userName);
        setPassword(res.data.password);
        setPhoneNumber(res.data.phoneNumber);
        setAddress(res.data.address);
        setLicenseNo(res.data.licenseNo);
        setNRC(res.data.NRC);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 font-Montserrat">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Update Information!
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 max-[425px]:text-sm">
            Change the information you want to update and keep the rest remain
            the same
          </p>
        </div>
        <form className="mx-auto mt-16 max-w-xl sm:mt-20 max-[425px]:text-sm">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold leading-6 text-indigo-600">
                Set Username
              </label>
              <div className="mt-2.5">
                <input
                  type="string"
                  value={userName}
                  required
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold leading-6 text-indigo-600">
                Set Password
              </label>
              <div className="mt-2.5">
                <input
                  type="string"
                  value={password}
                  required={true}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Driver Name
              </label>
              <div className="mt-2.5">
                <input
                  type="string"
                  value={name}
                  required={true}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center w-[5rem]">
                  <div className="w-full text-center opacity-50">09-</div>
                </div>
                <input
                  type="string"
                  value={phoneNumber}
                  required={true}
                  pattern="[0-9]{9}"
                  title="number only"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Address
              </label>
              <div className="mt-2.5">
                <input
                  type="string"
                  value={address}
                  required={true}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                License No.
              </label>
              <div className="mt-2.5">
                <input
                  type="string"
                  value={licenseNo}
                  required={true}
                  onChange={(e) => {
                    setLicenseNo(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                National Registeration Card No.
              </label>
              <div className="mt-2.5">
                <input
                  type="string"
                  value={NRC}
                  required={true}
                  tabIndex="1"
                  onChange={(e) => {
                    setNRC(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              onClick={update}
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update Information
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditDriver;
