import React, { useRef } from "react";
import TukTukLogo from "../assets/TukTukLogo.png";
import { connect } from "react-redux";
import toggleBoolean from "./action";
import {store} from "./store"

const Auth = ({ setAuthenticated,isBooleanTrue, toggleBoolean }) => {
  return (
    <div className="w-full h-[100vh] absolute z-50 flex justify-center items-center bg-sunset bg-cover max-[600px]:bg-[100%]">
      <img src={TukTukLogo} alt="TukTuk" className="absolute max-[600px]:top-0" />
      {/* Password input */}

      { /* {@Media(600 & 600-)} */}
      <input 
      className="bg-transparent text-white absolute block h-8 text-[4rem] w-[60vw] left-[6.2rem] tracking-[1.51rem] border-none border-transparent focus:ring-0 mx-auto cursor-auto caret-transparent min-[601px]:hidden"
      type="password"
      autoFocus="yes"
      maxLength={4}
      onChange={(e) => {
        if (e.target.value.length == 4) {
          if (import.meta.env.VITE_PASSWORD == e.target.value)
            setTimeout(() => {
              setAuthenticated(true);
              store.dispatch(toggleBoolean());
            }, 500);
          else
            setTimeout(() => {
              e.target.value = "";
            }, 500);
        }
      }}
       />


      { /* {@Media(600+)} */}
      <form>
        <input
          className="bg-transparent text-white z-50 relative block h-[5rem] text-[6.2rem] tracking-[4.7rem] border-none border-transparent focus:ring-0 mx-auto cursor-auto w-[30rem] -top-[3px] left-[2.54rem] caret-transparent max-[600px]:hidden"
          type="password"
          autoFocus="yes"
          maxLength={4}
          onChange={(e) => {
            if (e.target.value.length == 4) {
              if (import.meta.env.VITE_PASSWORD == e.target.value)
                setTimeout(() => {
                  setAuthenticated(true);
                  store.dispatch(toggleBoolean());
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

{/*@media(600 & 600-)*/}
<div className="w-full h-4 flex flex-row justify-center top-4 relative min-[601px]:hidden">
  <div className="w-8 m-2 h-1 rounded-full bg-slate-100"></div>
  <div className="w-8 m-2 h-1 rounded-full bg-slate-100"></div>
  <div className="w-8 m-2 h-1 rounded-full bg-slate-100"></div>
  <div className="w-8 m-2 h-1 rounded-full bg-slate-100"></div>
</div>


{/*@media(600+)*/}
      <div className="flex-row flex justify-center absolute max-[600px]:hidden">
        <div className="w-[5rem] h-[5rem] bg-yellow-300 relative rounded-sm flex items-center justify-center mx-4">
          <div className="w-[24px] h-[24px] bg-gray-400 rounded-full"></div>
        </div>
        <div className="w-[5rem] h-[5rem] bg-yellow-300 relative rounded-sm flex items-center justify-center mx-4">
          <div className="w-[24px] h-[24px] bg-gray-400 rounded-full"></div>
        </div>
        <div className="w-[5rem] h-[5rem] bg-yellow-300 relative rounded-sm flex items-center justify-center mx-4">
          <div className="w-[24px] h-[24px] bg-gray-400 rounded-full"></div>
        </div>
        <div className="w-[5rem] h-[5rem] bg-yellow-300 relative rounded-sm flex items-center justify-center mx-4">
          <div className="w-[24px] h-[24px] bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isBooleanTrue: state.isBooleanTrue,
  };
};

export default connect(mapStateToProps, { toggleBoolean })(Auth);
