import React from "react";
import GridLoader from "react-spinners/GridLoader";

const Loading = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center h-[88vh] fixed">
        <GridLoader color="gray" />
      </div>
    </>
  );
};

export default Loading;
