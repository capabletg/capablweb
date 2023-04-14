import React from "react";

export default function Toaster(props) {
  const { children, position = "center" } = props;
  return (
    <div
      id="toast-interactive"
      className={`w-full max-w-xs z-50 p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400 ${
        position === "top-left"
          ? "fixed top-5 left-5"
          : position === "top-right"
          ? "fixed top-5 right-5"
          : position === "bottom-left"
          ? "fixed bottom-5 left-5"
          : position === "bottom-right"
          ? "fixed bottom-5 right-5"
          : ""
      }`}
      role="alert"
    >
      {children}
    </div>
  );
}
