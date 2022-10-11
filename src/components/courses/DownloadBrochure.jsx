import React from "react";
import { HiOutlineDownload } from "react-icons/hi";

export default function DownloadBrochure() {
    function download(dataurl, filename) {
        const link = document.createElement("a");
        link.href = dataurl;
        link.target = "_blank";
        link.rel = "noreferer";
        if (!!filename) link.download = filename;
        link.click();
        link.remove();
    }
    return (
        <div className="px-8 py-8 md:py-9 md:px-12 rounded-2xl w-full bg-[#00253A] flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 md:gap-8">
            <p className="text-center md:text-left md:max-w-md text-white text-sm font-light">{`Learning powered with right ecosystem and activities that make you industry capabl. Download the Brochure for details!`}</p>
            <button
                onClick={() => download("/pdfs/brochure.pdf", "Brochure")}
                className="bg-capabl_primary flex-shrink-0 flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm transition-all duration-300 border border-transparent hover:border-capabl_primary hover:text-capabl_primary hover:bg-transparent"
            >
                <HiOutlineDownload className="text-xl" />
                Download Brochure
            </button>
        </div>
    );
}
