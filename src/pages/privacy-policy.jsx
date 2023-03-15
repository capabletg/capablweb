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
        <title>Privacy Policy | Capabl</title>
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
            <h1 className=" text-3xl font-medium mb-4">Privacy Policy</h1>
            <p className="text-xs md:text-sm font-light text-[#000000]">
              This privacy policy sets out how{" "}
              <span className="font-bold">Elite Techno Groups</span> uses and
              protects any information that you give{" "}
              <span className="font-bold">Elite Techno Groups</span> when you
              use this website. <br />
              <br /> <span className="font-bold">Elite Techno Groups</span> is
              committed to ensuring that your privacy is protected. Should we
              ask you to provide certain information by which you can be
              identified when using this website, you can rest assured that it
              will only be used in accordance with this privacy statement.{" "}
              <br /> <br />{" "}
              <span className="font-bold">Elite Techno Groups</span> may change
              this policy from time to time by updating this page. You should
              check this page from time to time to ensure that you are happy
              with any changes. This policy is effective from 1st Jan 2010.
            </p>
          </div>

          {/* Capabl Ecosystem */}
          <div className="m-8">
            <h4 className="text-base font-medium mb-4">What We Collect</h4>
            <h4 className="text-sm font-medium mb-4">
              {" "}
              We may collect the following information{" "}
            </h4>
            <ul className="list font-light">
              <li className="mb-2">
                <i className="fa fa-angle-double-right text-blue-500"></i> Name
                And Job Title
              </li>
              <li className="mb-2">
                <i className="fa fa-angle-double-right text-blue-500"></i>{" "}
                Contact Information Including Email Address
              </li>
              <li className="mb-2">
                <i className="fa fa-angle-double-right text-blue-500"></i>{" "}
                Demographic Information Such As Postcode, Preferences And
                Interests
              </li>
              <li className="mb-2">
                <i className="fa fa-angle-double-right text-blue-500"></i> Other
                Information Relevant To Customer Surveys And/Or Offers
              </li>
              <li className="mb-2">
                <i className="fa fa-angle-double-right text-blue-500"></i>{" "}
                Educational Qualification Details
              </li>
              <li className="mb-2">
                <i className="fa fa-angle-double-right text-blue-500"></i> Date
                Of Birth{" "}
              </li>
              <li className="mb-2">
                <i className="fa fa-angle-double-right text-blue-500"></i>{" "}
                Gender Etc.
              </li>
              <li className="mb-2">
                <i className="fa fa-angle-double-right text-blue-500"></i>{" "}
                Profile Password of Elite Techno Groups Users{" "}
              </li>
            </ul>
          </div>

          {/* What we do */}
          <div className="m-8">
            <h4 className="text-base font-semibold mb-4 ">
              What We Do With The Information We Gather{" "}
            </h4>
            <h4 className="text-sm font-semibold mb-4 ">
              {" "}
              We require this information to understand your needs and provide
              you with a better service, and in particular for the following
              reasons:{" "}
            </h4>
            <ul className="list font-light">
              <li className="mb-2">
                <i className="fa fa-angle-double-right text-blue-500"></i>{" "}
                Internal record keeping.
              </li>
              <li className="mb-2">
                <i className="fa fa-angle-double-right text-blue-500"></i> We
                may use the information to improve our products and services.
              </li>
              <li className="mb-2">
                <i className="fa fa-angle-double-right text-blue-500"></i> We
                may periodically send promotional emails, sms or WhatsApp
                regarding new products, special offers or other information
                which we think you may find interesting using the email address
                which you have provided.
              </li>
              <li className="mb-2">
                <i className="fa fa-angle-double-right text-blue-500"></i> From
                time to time, we may also use your information to contact you
                for market research purposes, inputs on your use of
                services/products and sharing product information which could be
                relevant to you. We may contact you by email, phone, fax, sms,
                WhatsApp or mail. We may use the information to customize the
                website according to your interests.
              </li>
            </ul>
          </div>

          <div className="m-8">
            <h4 className="text-base font-semibold mb-4 ">Security </h4>
            <h4 className="text-sm font-light mb-4 ">
              {" "}
              We are committed to ensuring that your information is secure. In
              order to prevent unauthorized access or disclosure, we have put in
              place suitable physical, electronic and managerial procedures to
              safeguard and secure the information we collect online.{" "}
            </h4>
          </div>

          <div className="m-8">
            <h4 className="text-base font-semibold mb-4 ">
              How We Use Cookies{" "}
            </h4>
            <h4 className="text-sm font-light mb-4 ">
              {" "}
              cookie is a small file which asks permission to be placed on your
              computer's hard drive. Once you agree, the file is added and the
              cookie helps analyse web traffic or lets you know when you visit a
              particular site. Cookies allow web applications to respond to you
              as an individual. The web application can tailor its operations to
              your needs, likes and dislikes by gathering and remembering
              information about your preferences. <br /> <br />
              We use traffic log cookies to identify which pages are being used.
              This helps us analyse data about web page traffic and improve our
              website in order to tailor it to customer needs. We only use this
              information for statistical analysis purposes and then the data is
              removed from the system.
              <br /> <br />
              Overall, cookies help us provide you with a better website, by
              enabling us to monitor which pages you find useful and which you
              do not. A cookie in no way gives us access to your computer or any
              information about you, other than the data you choose to share
              with us.
              <br /> <br />
              You can choose to accept or decline cookies. Most web browsers
              automatically accept cookies, but you can usually modify your
              browser setting to decline cookies if you prefer. This may prevent
              you from taking full advantage of the website.
              <br /> <br />{" "}
            </h4>
          </div>

          <div className="m-8">
            <h4 className="text-base font-semibold mb-4 ">
              Links to Other Websites{" "}
            </h4>
            <h4 className="text-sm font-light mb-4 ">
              {" "}
              Our website may contain links to other websites of interest.
              However, once you have used these links to leave our site, you
              should note that we do not have any control over that other
              website.
              <br /> <br />
              Therefore, we cannot be responsible for the protection and privacy
              of any information which you provide whilst visiting such sites
              and such sites are not governed by this privacy statement. You
              should exercise caution and look at the privacy statement
              applicable to the website in question.{" "}
            </h4>
          </div>
          <div className="m-8">
            <h4 className="mt-4 mb-4 text-base font-semibold ">
              Controlling Your Personal Information
            </h4>
            <p className="mb-4 font-light">
              {" "}
              You may choose to restrict the collection or use of your personal
              information in the following ways:{" "}
            </p>
            <ul className="list font-light">
              <li className="mb-2">
                <i className="fa fa-angle-double-right text-blue-500"></i>
                Whenever you are asked to fill in a form on the website, look
                for the box that you can click to indicate that you do not want
                the information to be used by anybody for direct marketing
                purposes
              </li>
              <li className="mb-2">
                <i className="fa fa-angle-double-right text-blue-500"></i> If
                you have previously agreed to us using your personal information
                for direct marketing purposes, you may change your mind at any
                time by writing to or emailing us at{" "}
                <a href="mailto:info@elitetechnogroups.com">
                  <strong>info@elitetechnogroups.com</strong>
                </a>{" "}
              </li>
            </ul>
            <p className="mb-4 font-light">
              {" "}
              We will not sell, distribute or lease your personal information to
              third parties unless we have your permission or are required by
              law to do so. We may use your personal information to send you
              promotional information about third parties which we think you may
              find interesting if you tell us that you wish this to happen.
            </p>
            <p className="mb-8 font-light">
              {" "}
              If you believe that any information we are holding on you is
              incorrect or incomplete, please write to or email us as soon as
              possible, at the above address. We will promptly correct any
              information found to be incorrect.{" "}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
