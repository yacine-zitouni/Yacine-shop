import React from "react";

const TableLoader = () => {
  return (
    <div className="rounded-md w-full border h-80 animate-pulse ">
      <div className="h-9 loader bg-gray-100 rounded-none border-b"></div>
      <div className="h-12 loader rounded-none border-b"></div>
      <div className="h-12  border-b"></div>
      <div className="h-12  loader rounded-none border-b"></div>
      <div className="h-12  border-b"></div>
      <div className="h-12 loader rounded-none "></div>
    </div>
  );
};

export default TableLoader;
