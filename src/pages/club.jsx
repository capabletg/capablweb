import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header";
import useGeneralStore from "../store/generalStore";
import CtaForm from "../components/CtaForm";
import { FaWhatsapp, FaDiscord } from "react-icons/fa";

const theme = {
  primary: "#FB2E2E",
  text: "#FFFFFF",
};

export default function Courses() {
  const openCtaForm = useGeneralStore((state) => state.openCtaForm);
  return (
    <div>
      <Head>
        <title>Capabl Club</title>
        <meta name="description" content="Capable Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header showTribe={true} />

      <main className="min-h-screen w-full">
        <section className="bg-[url('https://wallpaperaccess.com/full/1493766.jpg')] bg-contain mb-28">
          <div className="py-8 px-16 lg:px-32 grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="grid grid-row-2 gap-3 h-85">
              <div className="bg-[#FF0860] text-white rounded-lg pt-10 pl-6">
                <p className="text-2xl md:text-3xl font-bold font-320">Capabl</p>
                <p className="text-2xl md:text-3xl font-bold font-320">Blogs</p>
              </div>
              <div className="bg-[#178EFC] text-white rounded-lg justify-end pr-6 pt-8">
                <p className="text-2xl md:text-3xl font-bold text-right font-320">Expert</p>
                <p className="text-2xl md:text-3xl font-bold text-right font-320">Talks</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 justify-between h-85">
              <div className="bg-[#371B69] text-white rounded-lg pt-8 h-3/4">
                <p className="text-2xl md:text-3xl font-bold text-center font-320">Free</p>
                <p className="text-2xl md:text-3xl font-bold text-center font-320">Courses</p>
              </div>
              <div className="bg-[#FFFFFF] text-black rounded-lg pl-6 grid items-center h-1/4">
                <p className="text-2xl md:text-3xl font-bold font-320">Competions</p>
              </div>
            </div>
            <div className="grid grid-row-3 gap-3 h-85">
              <div className="bg-[#0D9DBD] text-white rounded-lg flex flex-col justify-center pr-6">
                <p className="text-2xl md:text-3xl font-bold text-right font font-320">Interview</p>
                <p className="text-2xl md:text-3xl font-bold text-right font font-320">Corner</p>
              </div>
              <div className="bg-[#FFB81E] text-white rounded-lg grid items-center pl-6">
                <p className="text-2xl md:text-3xl font-bold font-320">Events</p>
              </div>
              <div className="bg-[#F50057] text-white rounded-lg pr-6 pt-8">
                <p className="text-2xl md:text-3xl font-bold text-right font-320">Projects</p>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col gap-3 md:gap-6 justify-center relative top-6 md:top-10">
            <button className="bg-[#00A859] rounded-lg border-4 border-white grid grid-flow-col gap-2 md:gap-4 px-2 md:px-8 py-2 md:py-4 items-center">
              <FaWhatsapp className="fill-[#006F1F] w-6 md:w-10 h-6 md:h-10" />
              <p className="text-white text-xs md:text-base font-medium btn-txt">Join Whatsapp</p>
            </button>
            <button className="bg-[#3D1F63] rounded-lg border-4 border-white grid grid-flow-col gap-2 md:gap-4 px-2 md:px-8 py-2 md:py-4 items-center">
              <FaDiscord className="fill-[#001423] w-6 md:w-10 h-6 md:h-10" />
              <p className="text-white text-xs md:text-base font-medium btn-txt">Join Discord</p>
            </button>
          </div>
        </section>
        <section className="container max-w-7xl mx-auto items-center justify-between px-4 mt-16 mb-10">
          <h2 className="font-semibold text-3xl mb-16">Capabl Blogs</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="p-6 rounded-2xl border-2 blog">
              <span
                className="text-sm text-white py-1 px-2.5 rounded-2xl"
                style={{
                  background: `linear-gradient(93.5deg, #FFAF00 -36.28%, #FF696D 97.19%)`,
                }}
              >
                Learning Material
              </span>
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry.
              </p>
              <button className="text-lg after:w-full after:h-0.5 after:bg-capabl_primary after:block">
                Read More
              </button>
            </div>
            <div className="p-6 rounded-2xl border-2 blog">
              <span
                className="text-sm text-white py-1 px-2.5 rounded-2xl"
                style={{
                  background: `linear-gradient(93.5deg, #FFAF00 -36.28%, #FF696D 97.19%)`,
                }}
              >
                E-Book
              </span>
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry.
              </p>
              <button className="text-lg after:w-full after:h-0.5 after:bg-capabl_primary after:block">
                Read More
              </button>
            </div>
            <div className="p-6 rounded-2xl border-2 blog">
              <span
                className="text-sm text-white py-1 px-2.5 rounded-2xl"
                style={{
                  background: `linear-gradient(93.5deg, #FFAF00 -36.28%, #FF696D 97.19%)`,
                }}
              >
                News
              </span>
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry.
              </p>
              <button className="text-lg after:w-full after:h-0.5 after:bg-capabl_primary after:block">
                Read More
              </button>
            </div>
          </div>
          <div className="text-center">
            <button
              style={{ boxShadow: "0px 9px 15px rgba(255, 190, 49, 0.6)" }}
              className="relative z-10 font-medium text-sm text-[#272727] rounded-lg py-3 px-6 bg-capabl_primary hover_animation mt-12"
            >
              View All
            </button>
          </div>
        </section>
        <section className="container max-w-7xl mx-auto items-center justify-between px-4 mt-16 mb-10">
          <h2 className="font-semibold text-3xl mb-16 pl-3">Free Courses</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="p-3 blog bg-[#F9F9F9]">
              <img
                src="/images/media/leaders.png"
                alt="leader image"
                className="w-full"
              />
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company focused
                on creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company
              </p>
            </div>
            <div className="p-3 blog bg-[#F9F9F9]">
              <img
                src="/images/media/leaders.png"
                alt="leader image"
                className="w-full"
              />
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company focused
                on creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company
              </p>
            </div>
            <div className="p-3 blog bg-[#F9F9F9]">
              <img
                src="/images/media/leaders.png"
                alt="leader image"
                className="w-full"
              />
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company focused
                on creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company
              </p>
            </div>
          </div>
          <div className="text-center">
            <button
              style={{ boxShadow: "0px 9px 15px rgba(255, 190, 49, 0.6)" }}
              className="relative z-10 font-medium text-sm text-[#272727] rounded-lg py-3 px-6 bg-capabl_primary hover_animation mt-12"
            >
              View All
            </button>
          </div>
        </section>
        <section className="container max-w-7xl mx-auto items-center justify-between px-4 mt-16 mb-10">
          <h2 className="font-semibold text-3xl mb-16 pl-3">
            Interview Corner
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="p-3 blog bg-[#F9F9F9]">
              <img
                src="/images/media/leaders.png"
                alt="leader image"
                className="w-full"
              />
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company focused
                on creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company
              </p>
            </div>
            <div className="p-3 blog bg-[#F9F9F9]">
              <img
                src="/images/media/leaders.png"
                alt="leader image"
                className="w-full"
              />
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company focused
                on creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company
              </p>
            </div>
            <div className="p-3 blog bg-[#F9F9F9]">
              <img
                src="/images/media/leaders.png"
                alt="leader image"
                className="w-full"
              />
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company focused
                on creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company
              </p>
            </div>
          </div>
          <div className="text-center">
            <button
              style={{ boxShadow: "0px 9px 15px rgba(255, 190, 49, 0.6)" }}
              className="relative z-10 font-medium text-sm text-[#272727] rounded-lg py-3 px-6 bg-capabl_primary hover_animation mt-12"
            >
              View All
            </button>
          </div>
        </section>
        <section className="container max-w-7xl mx-auto items-center justify-between px-4 mt-16 mb-10">
          <h2 className="font-semibold text-3xl mb-16 pl-3">Expert Talk</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="p-3 blog bg-[#F9F9F9]">
              <img
                src="/images/media/leaders.png"
                alt="leader image"
                className="w-full"
              />
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company focused
                on creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company
              </p>
            </div>
            <div className="p-3 blog bg-[#F9F9F9]">
              <img
                src="/images/media/leaders.png"
                alt="leader image"
                className="w-full"
              />
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company focused
                on creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company
              </p>
            </div>
            <div className="p-3 blog bg-[#F9F9F9]">
              <img
                src="/images/media/leaders.png"
                alt="leader image"
                className="w-full"
              />
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company focused
                on creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company
              </p>
            </div>
          </div>
          <div className="text-center">
            <button
              style={{ boxShadow: "0px 9px 15px rgba(255, 190, 49, 0.6)" }}
              className="relative z-10 font-medium text-sm text-[#272727] rounded-lg py-3 px-6 bg-capabl_primary hover_animation mt-12"
            >
              View All
            </button>
          </div>
        </section>
        <section className="container max-w-7xl mx-auto items-center justify-between px-4 mt-16 mb-10">
          <h2 className="font-semibold text-3xl mb-16 pl-3">Event</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="p-3 blog bg-[#F9F9F9]">
              <img
                src="/images/media/leaders.png"
                alt="leader image"
                className="w-full"
              />
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company focused
                on creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company
              </p>
            </div>
            <div className="p-3 blog bg-[#F9F9F9]">
              <img
                src="/images/media/leaders.png"
                alt="leader image"
                className="w-full"
              />
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company focused
                on creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company
              </p>
            </div>
            <div className="p-3 blog bg-[#F9F9F9]">
              <img
                src="/images/media/leaders.png"
                alt="leader image"
                className="w-full"
              />
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company focused
                on creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company
              </p>
            </div>
          </div>
          <div className="text-center">
            <button
              style={{ boxShadow: "0px 9px 15px rgba(255, 190, 49, 0.6)" }}
              className="relative z-10 font-medium text-sm text-[#272727] rounded-lg py-3 px-6 bg-capabl_primary hover_animation mt-12"
            >
              View All
            </button>
          </div>
        </section>
        <section className="container max-w-7xl mx-auto items-center justify-between px-4 mt-16 mb-10">
          <h2 className="font-semibold text-3xl mb-16 pl-3">Competions</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="p-3 blog bg-[#F9F9F9]">
              <img
                src="/images/media/leaders.png"
                alt="leader image"
                className="w-full"
              />
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company focused
                on creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company
              </p>
            </div>
            <div className="p-3 blog bg-[#F9F9F9]">
              <img
                src="/images/media/leaders.png"
                alt="leader image"
                className="w-full"
              />
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company focused
                on creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company
              </p>
            </div>
            <div className="p-3 blog bg-[#F9F9F9]">
              <img
                src="/images/media/leaders.png"
                alt="leader image"
                className="w-full"
              />
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company focused
                on creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company
              </p>
            </div>
          </div>
          <div className="text-center">
            <button
              style={{ boxShadow: "0px 9px 15px rgba(255, 190, 49, 0.6)" }}
              className="relative z-10 font-medium text-sm text-[#272727] rounded-lg py-3 px-6 bg-capabl_primary hover_animation mt-12"
            >
              View All
            </button>
          </div>
        </section>
        <section className="container max-w-7xl mx-auto items-center justify-between px-4 mt-16 mb-10">
          <h2 className="font-semibold text-3xl mb-16 pl-3">Projects</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="p-3 blog bg-[#F9F9F9]">
              <img
                src="/images/media/leaders.png"
                alt="leader image"
                className="w-full"
              />
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company focused
                on creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company
              </p>
            </div>
            <div className="p-3 blog bg-[#F9F9F9]">
              <img
                src="/images/media/leaders.png"
                alt="leader image"
                className="w-full"
              />
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company focused
                on creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company
              </p>
            </div>
            <div className="p-3 blog bg-[#F9F9F9]">
              <img
                src="/images/media/leaders.png"
                alt="leader image"
                className="w-full"
              />
              <h5 className="mt-8 mb-4 text-xl font-semibold">
                Creating The Culture You Want To See In Your...
              </h5>
              <p className="mb-20 text-base leading-7">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company focused
                on creating an engineering ecosystem around Skills needed for
                industry. Elite Techno Groups is an India-based company
              </p>
            </div>
          </div>
          <div className="text-center">
            <button
              style={{ boxShadow: "0px 9px 15px rgba(255, 190, 49, 0.6)" }}
              className="relative z-10 font-medium text-sm text-[#272727] rounded-lg py-3 px-6 bg-capabl_primary hover_animation mt-12"
            >
              View All
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      <CtaForm />
    </div>
  );
}
