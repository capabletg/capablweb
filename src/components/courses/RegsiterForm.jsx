import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import OtpInput from "react-otp-input";
import { HiCheckCircle, HiXCircle } from "react-icons/hi2";
import { RiLoader2Line } from "react-icons/ri";
import useForm from "../../hooks/useForm";
import useGeneralStore from "../../store/generalStore";
import axios from "../../pages/api/http";
import apiEndPoints from "../../pages/api/endpoints";

const otpStatuses = Object.freeze({
  SUCCESS: "success",
  FAILED: "failed",
  NOT_INITIATED: "not_initiated",
  LOADING: "loading",
});

export default function RegsiterForm(props) {
  const { source, reqType } = props;
  const router = useRouter()

  const [show, setShow] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const setToasterInfo = useGeneralStore((state) => state.setToasterInfo);
  const [otp, setOtp] = useState("");
  const [otpRequestLoading, setOtpRequestLoading] = useState(false);
  const [otpRequestSend, setOtpRequestSend] = useState(false);
  const [otpVerficationStatus, setOtpVerficationStatus] = useState(
    otpStatuses.NOT_INITIATED
  );
  const openToaster = useGeneralStore((state) => state.openToaster);

  const [details, handleDetails, resetDetails] = useForm({
    name: "",
    email: "",
    collegeName: "",
    phoneNumber: "",
    courseYear: "",
    department: "",
    departmentDetails: "",
  });

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
      setOtpRequestSend(false);
      setOtpRequestLoading(false);
      setOtpVerficationStatus(otpStatuses.NOT_INITIATED);
      setOtp("");
      resetDetails();
      setActiveStep(0);
      setShow(false);
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

  const formSubmitRedirect = async () => {
    try {
      details["phoneNumber"] = `+91${details.phoneNumber}`;

      details["department"] =
        details.department === "Others"
          ? `${details.departmentDetails}`
          : details.department;

      delete details.departmentDetails;
      details = { ...details, ...{ source, reqType, otp } };
      const result = await axios.post(apiEndPoints.ENQUIRIES_ADD, details);
      setOtpRequestSend(false);
      setOtpRequestLoading(false);
      setOtpVerficationStatus(otpStatuses.NOT_INITIATED);
      setOtp("");
      resetDetails();
      setActiveStep(0);
      setShow(false);
      setToasterInfo({
        isSuccess: true,
        header: "Success",
        body: "Request has been recorded",
        showCta: false,
        position: "top-right",
      });
      openToaster();
      router.push('/join-now');
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
      axios
        .post(apiEndPoints.VERIFY_OTP, {
          otp: otp,
          email: details?.email,
          phoneNumber: `+91${details.phoneNumber}`,
        })
        .then(() => {
          setOtpVerficationStatus(otpStatuses.SUCCESS);
        })
        .catch(() => {
          setOtpVerficationStatus(otpStatuses.FAILED);
        });
    }
  }, [otp]);

  return (
    <div className="bg-[#141F35]/40 px-4 sm:px-8 md:px-6 py-6 sm:py-8 md:py-9 rounded-2xl">
      <div className="bg-[#141F35]/40 flex items-center justify-center gap-2 rounded-lg sm:rounded-xl py-3 sm:py-4 mb-4">
        {[1, 2].map((_, index) => (
          <React.Fragment key={index}>
            <span
              className={`text-sm ${
                activeStep === index ? "text-capabl_primary" : "text-[#d9d9d9]"
              }`}
            >
              {index + 1}
            </span>
            <span
              className={`h-[0.3rem] sm:h-[0.34rem] rounded-full w-20 md:w-24 lg:w-28 mr-2 ${
                activeStep === index ? "bg-capabl_primary" : "bg-[#d2d2d2]"
              }`}
            />
          </React.Fragment>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onFormSubmit();
        }}
        className="flex flex-col items-start justify-start gap-4 mt-6 md:mt-8"
      >
        {!show && (
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <label className="flex flex-col w-full items-start justify-start gap-1">
              <p className="text-xs text-white">Name</p>
              <input
                className="rounded-sm text-sm border w-full border-[#CBCBCB] bg-[#EBEBEB] placeholder:text-[#cbcbcb] px-4 py-2.5"
                type="text"
                placeholder="Name"
                required
                value={details?.name}
                onChange={(e) => handleDetails("name", e.target.value)}
              />
            </label>
            <label className="flex flex-col w-full items-start justify-start gap-1">
              <p className="text-xs text-white">Email</p>
              <input
                className="rounded-sm text-sm border w-full border-[#CBCBCB] bg-[#EBEBEB] placeholder:text-[#cbcbcb] px-4 py-2.5"
                type="text"
                placeholder="Email"
                required
                value={details?.email}
                onChange={(e) => handleDetails("email", e.target.value)}
              />
            </label>

            <div className="flex flex-col w-full items-start justify-start gap-1">
              <p className="text-xs mb-0.5 text-white">Phone Number</p>
              <div className="flex items-center justify-start gap-3 w-full">
                <p className="bg-[#f5f5f5] border border-[#d1d1d1] rounded-sm text-sm placeholder:text-gray-400 text-black py-2 pl-3 pr-4 text-center">
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
                  className="w-full flex-grow bg-[#f5f5f5] border-[#d1d1d1] rounded-sm text-sm placeholder:text-gray-400 text-black"
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
                  className="text-black px-3 py-2 border border-transparent bg-capabl_primary rounded-sm text-sm whitespace-nowrap hover:scale-95 transition-all duration-200 disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
                >
                  {otpRequestLoading ? "Sending..." : "Send OTP"}
                </button>
              </div>
            </div>

            {otpRequestSend && (
              <div className="flex flex-col items-start justify-start mb-3">
                <p className="text-xs mb-1 text-white">
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
            <button
              disabled={
                otpVerficationStatus !== otpStatuses.SUCCESS ||
                !details?.name ||
                !details?.email ||
                !details?.phoneNumber
              }
              type="button"
              onClick={() => {
                setActiveStep(1);
                setShow(true);
              }}
              // className="w-full mt-3 md:mt-4 rounded-lg text-black px-3 py-2 border border-transparent bg-capabl_primary rounded-sm text-sm whitespace-nowrap transition-all duration-200 disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
              className="mt-3 md:mt-4 rounded-lg border-[0.1rem] border-capabl_primary bg-capabl_primary transition-all duration-300 w-full py-3 text-[#231F20] text-sm disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:border-0"
            >{`Next : Fill Academic Details`}</button>
          </div>
        )}

        {show && (
        <div className="w-full flex flex-col items-start justify-start gap-4">
          <label className="flex flex-col w-full items-start justify-start gap-1">
            <p className="text-xs text-white">College Name</p>
            <input
              className="rounded-sm text-sm border w-full border-[#CBCBCB] bg-[#EBEBEB] placeholder:text-[#cbcbcb] px-4 py-2.5"
              type="text"
              placeholder="College Name"
              required
              value={details?.collegeName}
              onChange={(e) => handleDetails("collegeName", e.target.value)}
            />
          </label>

          <label className="flex flex-col w-full items-start justify-start gap-1">
            <p className="text-xs text-white">I am</p>
            <select
              required
              className="w-full bg-[#f5f5f5] border-[#d1d1d1] rounded-sm text-sm placeholder:text-gray-400 text-black"
              value={details?.courseYear}
              onChange={(e) => handleDetails("courseYear", e.target.value)}
            >
              <option value="">Choose</option>
              {[
                { label: "Graduating in 2023", value: "Graduating in 2023" },
                { label: "Graduating in 2024", value: "Graduating in 2024" },
                { label: "Graduating in 2025", value: "Graduating in 2025" },
                { label: "Graduating in 2026", value: "Graduating in 2026" },
                {
                  label: "Graduated but not Working",
                  value: "Graduated but not Working",
                },
                {
                  label: "Working Professional",
                  value: "Working Professional",
                },
                { label: "Faculty", value: "Faculty" },
              ].map(({ label, value }, index) => (
                <option key={index} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col w-full items-start justify-start gap-1">
            <p className="text-xs text-white">Department</p>
            <select
              required
              className="w-full bg-[#f5f5f5] border-[#d1d1d1] rounded-sm text-sm placeholder:text-gray-400 text-black"
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
                {
                  label: "Information Technology",
                  value: "Information Technology",
                },
                {
                  label: "Instrumentation and Control",
                  value: "Instrumentation and Control",
                },
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
          </label>
          {details?.department == "Others" && (
            <div className="flex flex-col w-full items-start justify-start mb-5">
              {" "}
              <p className="text-xs mb-0.5 text-white">
                Enter Department Name
              </p>{" "}
              <input
                type="text"
                placeholder="Enter Department Name"
                required
                value={details?.departmentDetails}
                onChange={(e) =>
                  handleDetails("departmentDetails", e.target.value)
                }
                className="rounded-sm text-sm border w-full border-[#CBCBCB] bg-[#EBEBEB] placeholder:text-[#cbcbcb] px-4 py-2.5"
              />
            </div>
          )}

          <div className="flex items-center justify-start gap-3 w-full">
            <button
              disabled={
                otpVerficationStatus !== otpStatuses.SUCCESS ||
                !details?.collegeName ||
                !details?.courseYear ||
                !details?.department ||
                (details.department === "Others" && !details.departmentDetails)
              }
              className="mt-3 md:mt-4 rounded-lg border-[0.1rem] border-capabl_primary bg-capabl_primary transition-all duration-300 w-full py-3 text-[#231F20] text-sm disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:border-0"
              type="submit"
            >{`Submit`}</button>
            <button
              disabled={
                otpVerficationStatus !== otpStatuses.SUCCESS ||
                !details?.collegeName ||
                !details?.courseYear ||
                !details?.department ||
                (details.department === "Others" && !details.departmentDetails)
              }
              className="mt-3 md:mt-4 rounded-lg border-[0.1rem] border-capabl_primary bg-capabl_primary transition-all duration-300 w-full py-3 text-[#231F20] text-sm disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:border-0"
              onClick={(e) => {
                e.preventDefault();
                formSubmitRedirect();
              }}
            >{`Join Now`}</button>
          </div>
        </div>
        )}
      </form>
    </div>
  );
}
