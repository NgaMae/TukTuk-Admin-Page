import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const ShowDetail = () => {
  const { id } = useParams();

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [licenseNo, setLicenseNo] = useState();
  const [NRC, setNRC] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/drivers/${id}`)
      .then((res) => {
        setName(res.data.name);
        setUserName(res.data.userName);
        setPassword(res.data.password);
        setPhoneNumber(res.data.phoneNumber);
        setAddress(res.data.address);
        setLicenseNo(res.data.licenseNo);
        setNRC(res.data.NRC);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 className="text-4xl text-center m-5 font-Montserrat w-full">
        Details
      </h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="w-fit bg-gray-200 rounded-xl mx-auto flex flex-row">
            <div className="flex flex-col m-10 text-right">
              <label className="m-5">Username</label>
              <label className="m-5">Password</label>
              <label className="m-5">Name</label>
              <label className="m-5">Phone Number</label>
              <label className="m-5">Address</label>
              <label className="m-5">License Number</label>
              <label className="m-5">NRC</label>
            </div>
            <div className="flex flex-col m-10">
              <label className="m-5">{userName}</label>
              <label className="m-5">{password}</label>
              <label className="m-5">{name}</label>
              <label className="m-5">{phoneNumber}</label>
              <label className="m-5">{address}</label>
              <label className="m-5">{licenseNo}</label>
              <label className="m-5">{NRC}</label>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShowDetail;
