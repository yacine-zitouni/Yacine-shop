import React from "react";

const Message = ({ message, type }) => {
  const color =
    type === "danger"
      ? "text-red-500 border-red-500 bg-red-100"
      : " text-blue-500 border-blue-500 bg-blue-100";
  return (
    <p className={` ${color}  border p-4 ml-0  m-4  font-medium `}>{message}</p>
  );
};

export default Message;
