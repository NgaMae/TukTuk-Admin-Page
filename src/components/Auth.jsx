import React, { useRef } from "react";
import TukTukLogo from "../assets/TukTukLogo.png";

const Auth = ({ setAuthenticated }) => {
  return (
    <div className="w-full h-[100vh] absolute z-50 flex justify-center items-center bg-sunset bg-cover max-[600px]:hidden">
      <img src={TukTukLogo} alt="TukTuk" className="absolute" />
      {/* Password input */}
      <form>
        <input
          className="bg-transparent text-white z-50 relative block h-[5rem] text-8xl tracking-[4.57rem] border-none border-transparent focus:ring-0 mx-auto cursor-auto w-[30rem] -top-[9px] left-[2.53rem] caret-transparent"
          type="password"
          autoFocus="yes"
          maxLength={4}
          onChange={(e) => {
            if (e.target.value.length == 4) {
              if (import.meta.env.VITE_PASSWORD == e.target.value)
                setTimeout(() => {
                  setAuthenticated(true);
                }, 500);
              else
                setTimeout(() => {
                  e.target.value = "";
                }, 500);
            }
          }}
        ></input>
      </form>

      {/* password input cover */}
      <div className="flex-row flex justify-center absolute">
        <div className="w-[5rem] h-[5rem] bg-green-500 relative rounded-sm flex items-center justify-center mx-4">
          <div className="w-[24px] h-[24px] bg-gray-500 rounded-full"></div>
        </div>
        <div className="w-[5rem] h-[5rem] bg-green-500 relative rounded-sm flex items-center justify-center mx-4">
          <div className="w-[24px] h-[24px] bg-gray-500 rounded-full"></div>
        </div>
        <div className="w-[5rem] h-[5rem] bg-green-500 relative rounded-sm flex items-center justify-center mx-4">
          <div className="w-[24px] h-[24px] bg-gray-500 rounded-full"></div>
        </div>
        <div className="w-[5rem] h-[5rem] bg-green-500 relative rounded-sm flex items-center justify-center mx-4">
          <div className="w-[24px] h-[24px] bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
