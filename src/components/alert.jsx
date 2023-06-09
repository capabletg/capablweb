import React, { useEffect } from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import Toaster from "./toaster";
import useGeneralStore from "../store/generalStore";

export default function Alert() {
  const popupInfo = useGeneralStore((state) => state.toasterInfo);
  const isOpen = useGeneralStore((state) => state.show_toaster);
  const closeModal = useGeneralStore((state) => state.closeToaster);
  const resetPopupInfo = useGeneralStore((state) => state.resetToasterInfo);
  const {
    isSuccess,
    header,
    body,
    showCta,
    okHandler,
    okTitle,
    deniedHandler,
    deniedTitle,
    position,
    isAutoClose = true,
  } = popupInfo;

  useEffect(() => {
    if (isAutoClose) {
      setTimeout(() => {
        closeModal();
      }, 3000);
    }
  });

  return (
    <>
      {isOpen ? (
        <Toaster position={position}>
          <div className="flex">
            <div
              className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg dark:text-blue-300 dark:bg-blue-900 ${
                isSuccess
                  ? "text-green-500 bg-green-100"
                  : "text-red-500 bg-red-100"
              }`}
            >
              {isSuccess ? <FiThumbsUp /> : <FiThumbsDown />}
            </div>
            <div className="ml-3 text-sm font-normal">
              <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                {header}
              </span>
              <div className="mb-2 text-sm font-normal">{body}</div>
              {showCta ? (
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <a
                      href="javascript:void(0)"
                      onClick={okHandler}
                      className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                    >
                      {okTitle}
                    </a>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0)"
                      onClick={deniedHandler}
                      className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                    >
                      {deniedTitle}
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-interactive"
              aria-label="Close"
              onClick={() => {
                closeModal();
                resetPopupInfo();
              }}
            >
              <span className="sr-only">Close</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </Toaster>
      ) : null}
    </>
  );
}
