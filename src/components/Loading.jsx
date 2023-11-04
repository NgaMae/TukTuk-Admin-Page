import React from "react";
import GridLoader from "react-spinners/GridLoader";

const Loading = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center h-[88vh] fixed">
        <GridLoader color="#4dff4d" size={20} />
      </div>
    </>
  );
};

export default Loading;
