/* "use client";

import React, { useEffect, useRef } from "react";

const Notification = ({ isOpen, toggle, setIsOpen }) => {
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);
  return (
    <div
      ref={notificationRef}
      className={`fixed inset-y-0 mt-[5.8rem] right-0 w-80 bg-gray-800 px-8 py-4 transition duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <h2 className="text-white text-2xl font-bold">Notification</h2>
    </div>
  );
};

export default Notification;
 */



"use client";

import React, { useEffect, useRef } from "react";

const Notification = ({ isOpen, toggle, setIsOpen }) => {
/*   const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]); */

  return (
    <div
      // ref={notificationRef}
      className={`fixed inset-y-0 mt-[5.8rem] right-0 w-80 bg-gray-800 px-8 py-4 transition duration-500 ease-in-out transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <h2 className="text-white text-2xl font-bold">Notification</h2>
    </div>
  );
};

export default Notification;
