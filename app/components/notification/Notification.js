import React from "react";

const Notification = ({ isOpen, toggle }) => {
  return (
    <div
      className={`fixed inset-y-0 mt-[5.8rem] right-0 w-80 bg-gray-800 px-8 py-4 transition duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <h2 className="text-white text-2xl font-bold">Notification</h2>
    </div>
  );
};

export default Notification;
