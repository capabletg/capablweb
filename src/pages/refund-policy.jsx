import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import ExposureAccordian from "../components/homePage/ExposureAccordian";
import { studentTestimonials } from "../utils/data/homePage/student_testimonials";
import { presentColleges } from "../utils/data/homePage/present_colleges";
import FaculyTestimonials from "../components/homePage/FaculyTestimonials";
import Footer from "../components/Footer_intrim";
import IndustrialPrograms from "../components/homePage/IndustrialPrograms";
import Services from "../components/homePage/Services";
import CtaForm from "../components/CtaForm";
import Header from "../components/header_intrim";
import useGeneralStore from "../store/generalStore";
import VideoGridTestimonials from "../components/VideoGridTestimonials";
import FeatureComparison from "../components/FeatureComparison";

export default function Home() {
  const openCtaForm = useGeneralStore((state) => state.openCtaForm);
  return (
    <div>
      <Head>
        <title>Refund and Cancellation Policy | Capabl</title>
        <meta name="keywords" content="online courses" />
        <meta
          name="description"
          content="Online courses in data science, data analytics, mechatronics, design and other engineering domains."
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <Script
        id="app-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "CollegeOrUniversity",

            name: "Elite Techno Groups",

            alternateName: "ETG",

            url: "https://www.elitetechnogroups.com/",

            logo: "https://www.elitetechnogroups.com/",

            sameAs: [
              "https://www.facebook.com/EliteTechnoGroups/",

              "https://www.instagram.com/etgroups/?ref=badge",

              "https://www.linkedin.com/company/30203475/admin/",

              "https://twitter.com/ETgroups",

              "https://www.youtube.com/channel/UCoBQveYfZas0x7PHK2i_Eeg",
            ],
          }),
        }}
      />

      <Header />

      <main className="min-h-screen w-full">
        <div className="max-w-7xl mx-auto m-10">
          {/* Capabl */}
          <div className="m-8">
            <h1 className=" text-3xl font-medium mb-4">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xs md:text-sm font-light text-[#000000]">
              The refund policy intends to clearly delineate the ETG Career Labs
              Pvt. Ltd. ( hereinafter "company") policy of refund of
              subscription fee charged by the company for all the courses
              offered by it. All cases of request of refund by the participants
              of the course shall be subjected to this policy and no request
              whatsoever which is beyond the scope of this policy shall be
              entertained. The company reserves the full right to amend this
              policy from time to time as per its discretion. However, the terms
              stipulated on the day of subscription of the course shall be
              applicable at the time of any request of refund by the
              participants.
            </p>
          </div>

          {/* Capabl Ecosystem */}
          <div className="m-8">
            <h4 className="text-sm font-semibold mb-4">
              Our refund policy is as follows
            </h4>
            <h4 className="text-sm font-semibold mb-4">
              {" "}
              Once the subscription/registration fee has been paid, whether it
              is made in partial (advance) or in full, it will be strictly Non
              Refundable/Non transferable, except in circumstances mentioned
              below.{" "}
            </h4>
            <ul className="list">
              <li className="mb-2">
                <i className="fa fa-angle-double-right text-blue-500"></i>{" "}
                Subsequent to payment of subscription fee by the participants,
                if the registration is cancelled by the participants by
                himself/herself, the company shall not be liable for any refund
                or payback.
              </li>
              <li className="mb-2">
                <i className="fa fa-angle-double-right text-blue-500"></i> The
                company may accept the request made by the participants to
                change or upgrade the location/module/duration/seats, but this
                shall subject to such terms and conditions as the company may
                decide in its discretion.
              </li>
              <li className="mb-2">
                <i className="fa fa-angle-double-right text-blue-500"></i> If
                the course for which the subscription fee has been paid could
                not be conducted due to unavoidable circumstances, the company
                will initiate the refund procedure and the subscription fee will
                be credited back to the same back account within 15 working days
                after the deduction of bank charges, if any.
              </li>
              <li className="mb-2">
                <i className="fa fa-angle-double-right text-blue-500"></i> All
                subscription fee paid in cash shall be non refundable. No
                request for cash refund will be entertained or accepted under
                any circumstance.
              </li>
            </ul>
          </div>

          {/* Cities */}
        </div>
      </main>
    </div>
  );
}
