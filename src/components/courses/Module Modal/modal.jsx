import React from "react";
import useGeneralStore from "../../../store/generalStore";

export default function Modal(moduleData = []) {
  const isOpen = useGeneralStore((state) => state.show_modal);
  const closeModal = useGeneralStore((state) => state.closeModal);
  return (
    <>
      {isOpen && (
        <div className="fixed z-[49] top-0 left-0 w-full h-screen bg-black bg-opacity-60" />
      )}
      {isOpen && (
        <>
          <div className="justify-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative min-w-[75%] my-4  mx-4 overflow-auto max-w-2xl scrollbar scrollbar-thumb-[#C1C1C1] scrollbar-track-gray-200">
              {/*content*/}
              <div className="  border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  {moduleData?.moduleData?.moduleData?.modulename ? (
                    <h3 className="text-lg font-semibold">{`${moduleData?.moduleData?.moduleData?.name} : ${moduleData?.moduleData?.moduleData?.modulename}`}</h3>
                  ) : (
                    <h3 className="text-lg font-semibold">{`${moduleData?.moduleData?.moduleData?.name}`}</h3>
                  )}
                  <button
                    className="p-1 ml-auto bg-transparent text-black opacity-90 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => closeModal()}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <h5>{`Modules Covered`}</h5>
                  {moduleData?.moduleData?.moduleDataExtended.map(
                    (content, index) => (
                      <p
                        className="my-4 text-slate-800 text-sm leading-relaxed"
                        key={index}
                      >
                        {index + 1}. {content}
                      </p>
                    )
                  )}
                </div>
                <div className="relative p-6 flex-auto">
                  <h5>{`${moduleData?.moduleData?.moduleData?.heading1}`}</h5>
                  {moduleData?.moduleData?.moduleData?.content1?.map(
                    (content, index) => (
                      <p
                        className="my-4 text-slate-800 text-sm leading-relaxed"
                        key={index}
                      >
                        {index + 1}. {content}
                      </p>
                    )
                  )}
                </div>
                <div className="relative p-6 flex-auto">
                  <h5>{`${moduleData?.moduleData?.moduleData?.heading2}`}</h5>
                  {moduleData?.moduleData?.moduleData?.content2?.map(
                    (content, index) => (
                      <p
                        className="my-4 text-slate-800 text-sm leading-relaxed"
                        key={index}
                      >
                        {index + 1}. {content}
                      </p>
                    )
                  )}
                </div>
                <div className="relative p-6 flex-auto">
                  <h5>{`${moduleData?.moduleData?.moduleData?.heading3}`}</h5>
                  {moduleData?.moduleData?.moduleData?.content3?.map(
                    (content, index) => (
                      <p
                        className="my-4 text-slate-800 text-sm leading-relaxed"
                        key={index}
                      >
                        {index + 1}. {content}
                      </p>
                    )
                  )}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className=" bg-capabl_primary font-normal text-center py-2 px-3 border border-transparent rounded-lg text-sm hover_animation"
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
