import React from "react";
import useGeneralStore from "../../../store/generalStore";

export default function Modal(moduleData = []) {
  const isOpen = useGeneralStore((state) => state.show_modal);
  const closeModal = useGeneralStore((state) => state.closeModal);
  console.log(moduleData);
  return (
    <>
      {isOpen && (
        <div className="fixed z-[49] top-0 left-0 w-full h-screen bg-black bg-opacity-60" />
      )}
      {isOpen && (
        <>
          <div className="justify-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-4  mx-4  max-w-lg overflow-y-scroll">
              {/*content*/}
              <div className="  border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">{`${moduleData?.moduleData?.name}`}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => closeModal()}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <h5>{`${moduleData?.moduleData?.heading1}`}</h5>
                  {moduleData?.moduleData?.content1?.map((content, index) => (
                    <p
                      className="my-4 text-slate-800 text-sm leading-relaxed"
                      key={index}
                    >
                      {index + 1}. {content}
                    </p>
                  ))}
                </div>
                <div className="relative p-6 flex-auto">
                  <h5>{`${moduleData?.moduleData?.heading2}`}</h5>
                  {moduleData?.moduleData?.content2?.map((content, index) => (
                    <p
                      className="my-4 text-slate-800 text-sm leading-relaxed"
                      key={index}
                    >
                      {index + 1}. {content}
                    </p>
                  ))}
                </div>
                <div className="relative p-6 flex-auto">
                  <h5>{`${moduleData?.moduleData?.heading3}`}</h5>
                  {moduleData?.moduleData?.content3?.map((content, index) => (
                    <p
                      className="my-4 text-slate-800 text-sm leading-relaxed"
                      key={index}
                    >
                      {index + 1}. {content}
                    </p>
                  ))}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => closeModal()}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
