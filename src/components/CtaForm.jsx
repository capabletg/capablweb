import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HiCheckCircle, HiXCircle } from "react-icons/hi2";
import { RiLoader2Line } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import OtpInput from "react-otp-input";
import useForm from "../hooks/useForm";
import useGeneralStore from "../store/generalStore";
import axios from "../pages/api/http";
import apiEndPoints from "../pages/api/endpoints";

const otpStatuses = Object.freeze({
  SUCCESS: "success",
  FAILED: "failed",
  NOT_INITIATED: "not_initiated",
  LOADING: "loading",
});

export default function CtaForm(props) {
  const { source, reqType } = props;
  const isOpen = useGeneralStore((state) => state.show_cta_form);
  const closeCtaForm = useGeneralStore((state) => state.closeCtaForm);
  const setToasterInfo = useGeneralStore((state) => state.setToasterInfo);
  const openToaster = useGeneralStore((state) => state.openToaster);

  const [otp, setOtp] = useState("");
  const [otpRequestLoading, setOtpRequestLoading] = useState(false);
  const [otpRequestSend, setOtpRequestSend] = useState(false);
  const [otpVerficationStatus, setOtpVerficationStatus] = useState(
    otpStatuses.NOT_INITIATED
  );

  const [details, handleDetails, resetDetails] = useForm({
    name: "",
    email: "",
    collegeName: "",
    phoneNumber: "",
    courseYear: "",
    department: "",
    departmentDetails: "",
    // referral: "",
  });

  const closeModal = () => {
    closeCtaForm();
    setOtpRequestSend(false);
    setOtpRequestLoading(false);
    setOtpVerficationStatus(otpStatuses.NOT_INITIATED);
    setOtp("");
    resetDetails();
  };

  const sentOtp = async () => {
    try {
      const data = {
        email: details?.email,
        phoneNumber: `+91${details.phoneNumber}`,
      };
      await axios.post(apiEndPoints.SENT_OTP, data);
      setToasterInfo({
        isSuccess: true,
        header: "Success",
        body: "Otp sent successfully",
        showCta: false,
        position: "top-right",
      });
      openToaster();
      setOtpRequestLoading(false);
      setOtpRequestSend(true);
    } catch (err) {
      setOtpRequestLoading(false);
      setOtpRequestSend(false);
      setToasterInfo({
        isSuccess: false,
        header: "Error",
        body: err?.response?.data?.error?.message || err.message,
        showCta: false,
        position: "top-right",
      });
      openToaster();
    }
  };

  const onFormSubmit = async () => {
    try {
      details["phoneNumber"] = `+91${details.phoneNumber}`;

      details["department"] =
        details.department === "Others"
          ? `${details.departmentDetails}`
          : details.department;

      delete details.departmentDetails;
      details = { ...details, ...{ source, reqType, otp } };
      const result = await axios.post(apiEndPoints.ENQUIRIES_ADD, details);
      closeModal();
      setToasterInfo({
        isSuccess: true,
        header: "Success",
        body: "Request has been recorded",
        showCta: false,
        position: "top-right",
      });
      openToaster();
    } catch (err) {
      setToasterInfo({
        isSuccess: false,
        header: "Error",
        body: err?.response?.data?.error?.message || err.message,
        showCta: false,
        position: "top-right",
      });
      openToaster();
    }
  };

  useEffect(() => {
    if (otp.length === 6) {
      setOtpVerficationStatus(otpStatuses.LOADING);
      axios.post(apiEndPoints.VERIFY_OTP, {
        otp: otp,
        email: details?.email,
        phoneNumber: `+91${details.phoneNumber}`,
      }).then(() => {
        setOtpVerficationStatus(otpStatuses.SUCCESS)
      }).catch(() => {
        setOtpVerficationStatus(otpStatuses.FAILED);
      });
    }
  }, [otp]);
  return (
    <>
      {isOpen && (
        <div className="fixed z-[49] top-0 left-0 w-full h-screen bg-black bg-opacity-60" />
      )}
      {isOpen && (
        <motion.div
          key="cta_form"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed z-50 top-0 left-0 w-full h-screen flex items-center justify-center bg-transparent p-4 pr-6 overflow-auto"
        >
          <div className="bg-white w-full max-w-sm px-4 py-6 rounded-xl relative my-10">
            {/* close button */}
            <button
              onClick={() => closeModal()}
              className="absolute text-xl top-0 right-0 transform translate-x-3 -translate-y-3 bg-white rounded-full w-10 h-10 flex items-center justify-center border-2 border-black"
            >
              <VscChromeClose />
            </button>

            {/* content */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onFormSubmit();
              }}
            >
              <h2 className="font-semibold text-lg">
                Please enter your details
              </h2>
              <hr className="mb-4 mt-3 border-t-[0.05rem] border-[#d7dedd]" />

              <div className="flex flex-col items-start justify-start mb-5">
                <p className="text-xs mb-0.5">Name</p>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={details?.name}
                  onChange={(e) => handleDetails("name", e.target.value)}
                  className="w-full bg-[#f5f5f5] border-[#d1d1d1] rounded-md text-sm placeholder:text-gray-400 text-black"
                />
              </div>

              <div className="flex flex-col items-start justify-start mb-5">
                <p className="text-xs mb-0.5">Email</p>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={details?.email}
                  onChange={(e) => handleDetails("email", e.target.value)}
                  className="w-full bg-[#f5f5f5] border-[#d1d1d1] rounded-md text-sm placeholder:text-gray-400 text-black"
                />
              </div>

              <div className="flex flex-col items-start justify-start mb-5">
                <p className="text-xs mb-0.5">College Name</p>
                <input
                  type="text"
                  placeholder="College Name"
                  required
                  value={details?.collegeName}
                  onChange={(e) => handleDetails("collegeName", e.target.value)}
                  className="w-full bg-[#f5f5f5] border-[#d1d1d1] rounded-md text-sm placeholder:text-gray-400 text-black"
                />
              </div>

              <div className="flex flex-col items-start justify-start mb-5">
                <p className="text-xs mb-0.5">Phone No.</p>
                <div className="flex items-center justify-start gap-3 w-full">
                  <p className="bg-[#f5f5f5] border border-[#d1d1d1] rounded-md text-sm placeholder:text-gray-400 text-black py-2 pl-3 pr-4 text-center">
                    +91
                  </p>
                  <input
                    type="text"
                    maxLength={10}
                    minLength={10}
                    required
                    placeholder="XXXXXXXXXX"
                    value={details?.phoneNumber}
                    onChange={(e) =>
                      !isNaN(e.target.value)
                        ? handleDetails("phoneNumber", e.target.value?.trim())
                        : {}
                    }
                    className="w-full flex-grow bg-[#f5f5f5] border-[#d1d1d1] rounded-md text-sm placeholder:text-gray-400 text-black"
                  />
                  <button
                    type="button"
                    disabled={
                      details?.phoneNumber?.length !== 10 ||
                      otpRequestLoading ||
                      otpVerficationStatus === "success"
                    }
                    onClick={() => {
                      setOtpRequestLoading(true);
                      setTimeout(() => {
                        sentOtp();
                      }, 1500);
                    }}
                    className="text-black px-3 py-2 border border-transparent bg-capabl_primary rounded-md text-sm whitespace-nowrap hover:scale-95 transition-all duration-200 disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
                  >
                    {otpRequestLoading ? "Sending..." : "Sent OTP"}
                  </button>
                </div>
              </div>

              {otpRequestSend && (
                <div className="flex flex-col items-start justify-start mb-3">
                  <p className="text-xs mb-1">
                    Please enter OTP to verify your phone number
                  </p>
                  <div className="w-full flex items-center justify-between">
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      isInputNum={true}
                      className="w-full"
                      inputStyle="react_otp_input"
                      containerStyle="w-full flex items-center justify-between gap-4"
                      numInputs={6}
                      separator={" "}
                    />
                  </div>
                </div>
              )}

              {otpVerficationStatus === otpStatuses.SUCCESS && (
                <div className="mb-5 flex items-center justify-start gap-1 text-xs text-[#04ca00]">
                  <HiCheckCircle className="text-lg" />
                  <p>OTP Verified Successfully</p>
                </div>
              )}

              {otpVerficationStatus === otpStatuses.FAILED && (
                <div className="mb-5 flex items-center justify-start gap-1 text-xs text-red-500">
                  <HiXCircle className="text-lg" />
                  <p>Invalid OTP</p>
                </div>
              )}

              {otpVerficationStatus === otpStatuses.LOADING && (
                <div className="mb-5 flex items-center justify-start gap-1 text-xs text-gray-500">
                  <RiLoader2Line className="text-lg animate-spin" />
                  <p>Checking...</p>
                </div>
              )}

              <div className="flex flex-col items-start justify-start mb-5">
                <p className="text-xs mb-0.5">{`I'm`}</p>
                <select
                  required
                  className="w-full bg-[#f5f5f5] border-[#d1d1d1] rounded-md text-sm placeholder:text-gray-400 text-black"
                  value={details?.courseYear}
                  onChange={(e) => handleDetails("courseYear", e.target.value)}
                >
                  <option value="">Choose</option>
                  {[
                    { label: "Graduating in 2023", value: "Graduating in 2023" },
                    { label: "Graduating in 2024", value: "Graduating in 2024" },
                    { label: "Graduating in 2025", value: "Graduating in 2025" },
                    { label: "Graduating in 2026", value: "Graduating in 2026" },
                    { label: "Graduated but not Working", value: "Graduated but not Working" },
                    { label: "Working Professional", value: "Working Professional" },
                    { label: "Faculty", value: "Faculty" },
                  ].map(({ label, value }, index) => (
                    <option key={index} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col items-start justify-start mb-5">
                <p className="text-xs mb-0.5">{`Department`}</p>
                <select
                  required
                  className="w-full bg-[#f5f5f5] border-[#d1d1d1] rounded-md text-sm placeholder:text-gray-400 text-black"
                  value={details?.department}
                  onChange={(e) => handleDetails("department", e.target.value)}
                >
                  <option value="">Choose</option>
                  {[
                    {
                      label: "Aerospace Engineering",
                      value: "Aerospace Engineering",
                    },
                    {
                      label: "AI & ML",
                      value: "AI & ML",
                    },
                    {
                      label: "Automobile",
                      value: "Automobile",
                    },
                    {
                      label: "Chemical",
                      value: "Chemical",
                    },
                    {
                      label: "Civil",
                      value: "Civil",
                    },
                    {
                      label: "Computer Science",
                      value: "Computer Science",
                    },
                    {
                      label: "Data Science",
                      value: "Data Science",
                    },
                    {
                      label: "Electrical and Electronics",
                      value: "Electrical and Electronics",
                    },
                    {
                      label: "Electronics and Communication",
                      value: "Electronics and Communication",
                    },
                    { label: "Information Technology", value: "Information Technology" },
                    { label: "Instrumentation and Control", value: "Instrumentation and Control" },
                    { label: "Mechanical", value: "Mechanical" },
                    { label: "Mechatronics", value: "Mechatronics" },
                    { label: "Production", value: "Production" },
                    { label: "Robotics", value: "Robotics" },
                    { label: "Others", value: "Others" },
                  ].map(({ label, value }, index) => (
                    <option key={index} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              {details?.department == "Others" && (
                <div className="flex flex-col items-start justify-start mb-5">
                  {" "}
                  <p className="text-xs mb-0.5">Enter Department Name</p>{" "}
                  <input
                    type="text"
                    placeholder="Enter Department Name"
                    required
                    value={details?.departmentDetails}
                    onChange={(e) =>
                      handleDetails("departmentDetails", e.target.value)
                    }
                    className="w-full bg-[#f5f5f5] border-[#d1d1d1] rounded-md text-sm placeholder:text-gray-400 text-black"
                  />
                </div>
              )}

              {/* <div className="flex flex-col items-start justify-start mb-5">
                <p className="text-xs mb-0.5">Referral Code (If Any)</p>
                <input
                  type="text"
                  placeholder="XXXXXXX"
                  className="w-full bg-[#f5f5f5] border-[#d1d1d1] rounded-md text-sm placeholder:text-gray-400 text-black"
                  value={details?.referral}
                  onChange={(e) => handleDetails("referral", e.target.value)}
                />
              </div> */}

              <button
                type="submit"
                disabled={
                  otpVerficationStatus !== otpStatuses.SUCCESS ||
                  !details?.name ||
                  !details?.email ||
                  !details?.collegeName ||
                  !details?.phoneNumber ||
                  !details?.courseYear ||
                  !details?.department ||
                  (details.department === "Others" &&
                    !details.departmentDetails)
                }
                className="text-black w-full p-3 font-semibold uppercase border border-transparent bg-capabl_primary rounded-md text-sm whitespace-nowrap hover:scale-[0.98] transition-all duration-200 disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
              >
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </>
  );
}
