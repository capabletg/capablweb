import React, { useEffect, useState } from "react";
import { HiOutlineChevronDown, HiOutlineSearch } from "react-icons/hi";
import { faqs } from "../../utils/data/courses/faqs_fullstack";

export default function Faqs() {
  const [search, setSearch] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState([]);
  const [unWrapIndex, setunWrapIndex] = useState(0);

  useEffect(() => {
    setunWrapIndex(0);
    setFilteredFaqs(
      faqs?.filter(
        (el) =>
          `${el?.question}${el?.answer}`
            .toLowerCase()
            .indexOf(search?.toLowerCase()) > -1
      )
    );
  }, [search, faqs]);

  return (
    <div>
      <div className="mt-3 md:mt-5 flex items-center justify-center gap-0.5 border border-[#ebebeb] rounded-lg max-w-[15rem] md:max-w-[17rem] mx-auto px-2.5 py-2">
        <HiOutlineSearch className="flex-shrink-0 text-[#565656]" />
        <input
          type="text"
          placeholder="Search questions"
          className="text-xs text-black placeholder:text-[#959595] font-light remove_outline md:text-sm flex-grow py-0 bg-transparent border-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="mt-8 md:mt-10">
        {!!filteredFaqs?.length &&
          filteredFaqs?.map(({ question, answer }, index) => (
            <div
              key={index}
              className={`${
                filteredFaqs?.length - 1 !== index &&
                "border-b border-b-[#e4e4e4]"
              } py-3 sm:py-4 md:py-5`}
            >
              <div
                onClick={() =>
                  setunWrapIndex((prev) => (prev === index ? null : index))
                }
                className="cursor-pointer flex items-start justify-between"
              >
                <p className="text-sm md:text-[0.92rem] font-medium text-black">
                  {question}
                </p>
                <span>
                  <HiOutlineChevronDown
                    className={`text-base md:text-xl ${
                      unWrapIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </span>
              </div>
              <div
                className={`text-xs md:text-sm font-light text-[#565656] overflow-hidden pr-6 ${
                  unWrapIndex === index
                    ? "opacity-100 max-h-screen mt-2.5 mb-1"
                    : "opacity-0 max-h-0 mt-0"
                }`}
              >
                {answer}
              </div>
            </div>
          ))}

        {!filteredFaqs?.length && (
          <p className="text-center font-light text-xs md:text-sm text-[#565656]">
            No Faqs Found
          </p>
        )}
      </div>
    </div>
  );
}
