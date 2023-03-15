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
        <section className="space-ptb pt-5 pb-5">
          <div className="m-16">
            <div className="">
              <h2 className=" text-3xl font-medium mb-4">COOKIES</h2>
              <p className="text-xs md:text-sm font-light text-[#000000] mb-8">
                Cookies are small text files which are downloaded to your
                computer, tablet or mobile phone when you visit a website or
                application. The website or application may retrieve these
                cookies from your web browser (eg Internet Explorer, Mozilla
                Firefox or Google Chrome) each time you visit, so they can
                recognise you, remember your preferences and provide you with a
                more secure online experience.
              </p>
              <p className="text-xs md:text-sm font-light text-[#000000] mb-8">
                Generally, cookies are very useful and are a common method used
                by almost every website you visit because they help to make your
                online experience as smooth as possible. For security reasons,
                many websites will not function at all without the use of
                cookies (or other similar technologies, such as "web beacons" or
                "tags").
              </p>
              <p className="text-xs md:text-sm font-light text-[#000000] mb-8">
                Cookies generally do not hold any information to identify an
                individual person, but are instead used to identify a browser on
                an individual machine.
              </p>
              <p className="text-xs md:text-sm font-light text-[#000000] mb-8">
                If you prefer, you can restrict, block or delete cookies by
                changing your browser settings but that may mean that the
                website won't work properly
              </p>
              <p className="text-xs md:text-sm font-light text-[#000000] mb-8">
                For more information about cookies and their impact on you and
                your browsing visit{" "}
                <a
                  href="http://www.aboutcookies.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.aboutcookies.org
                </a>
                .
              </p>
              <h2 className="mb-4 font-medium">TYPES OF COOKIES</h2>
              <h3>Necessary cookies</h3>
              <p className="text-xs md:text-sm font-light text-[#000000] mb-8">
                These cookies are essential in helping you to make use of the
                features and services we offer on the Capabl website. Without
                these cookies, the services you want to use cannot be provided.
                These cookies do not gather information about you that could be
                used to identify you, and they do not monitor or remember where
                you have been on the internet.
              </p>
              <h3>Functional cookies</h3>
              <p className="text-xs md:text-sm font-light text-[#000000] mb-8">
                These cookies allow us to provide you with a better online
                experience when you use our website. They do not gather or store
                any information which would allow us to identify you personally.
              </p>
              <h3 className="mb-2">Performance cookies</h3>
              <p className="text-xs md:text-sm font-light text-[#000000] mb-4">
                Performance cookies help us to understand how our customers use
                our site, so we can keep our products and services relevant,
                easy to use and up to date. For example, we can see which
                products and services are most popular, identify when and where
                errors occur, and test different versions of a page in order to
                provide an improved online experience.
              </p>
              <p className="text-xs md:text-sm font-light text-[#000000] mb-4">
                Sometimes, the services we use to collect this information may
                be operated by other companies on our behalf. They may use
                similar technologies to cookies, known as `web beacons` or
                `tags`. These are anonymous and, as they are only used for
                statistical purposes, they do not contain or collect any
                information that identifies you."
              </p>
              <h3 className="mb-2">Targeting cookies</h3>
              <p className="text-xs md:text-sm font-light text-[#000000] mb-4">
                We have relationships with carefully selected and monitored
                suppliers (third parties) who may also set cookies during your
                visit. The purpose of these cookies is "behavioural advertising"
                (also known as "behavioural targeting" or "remarketing"), which
                is a means of showing you relevant products and services based
                on what you appear to be interested in. Although these cookies
                can track your visits around the web they don't know who you
                are. Without these cookies, online advertisements you encounter
                will be less relevant to you and your interests.
              </p>
              <h2 className="mb-2">MANAGING COOKIES</h2>
              <p className="text-xs md:text-sm font-light text-[#000000] mb-4">
                Most internet browsers allow you to erase cookies from your
                computer hard drive, block all cookies (or just third-party
                cookies) or warn you before a cookie is stored on your device.
              </p>
              <p className="text-xs md:text-sm font-light text-[#000000] mb-4">
                Please note, if you choose to block all cookies, our site will
                not function as intended and you will not be able to use or
                access many of the services we provide. If you have blocked all
                cookies and wish to make full use of the features and services
                we offer, you will need to enable your cookies. You can do this
                in your browser (see below).
              </p>
              <p className="text-xs md:text-sm font-light text-[#000000] mb-4">
                Rather than blocking all cookies, you can choose to only block
                third-party cookies which will still allow our website to
                function as intended.
              </p>
              <h3 className="mb-2">How to manage cookies on your PC</h3>
              <p className="text-xs md:text-sm font-light text-[#000000] mb-8">
                To enable cookies on our website, follow the steps below.
              </p>
              <h4 className="mb-4">Google Chrome</h4>
              <ol className="list-decimal ml-4 mb-4 text-xs md:text-sm font-light text-[#000000] mb-8">
                <li>
                  Click "Tools" at the top of your browser and select
                  "Settings".
                </li>
                <li>
                  Click "Show advanced settings", scroll down to the section
                  "Privacy" and click "Content Settings."
                </li>
                <li>
                  Select "Allow local data to be set". To only acept first-party
                  cookies, check the box next to "Block all third-party cookies
                  without exception"
                </li>
              </ol>
              <h4 className="mb-4">
                Microsoft Internet Explorer 6.0, 7.0, 8.0, 9.0
              </h4>
              <ol className="list-decimal ml-4 mb-4 text-xs md:text-sm font-light text-[#000000] mb-8">
                <li>
                  Click "Tools" at the top of your browser and select "Internet
                  Options", then click the "Privacy" tab.
                </li>
                <li>
                  Check that the level of your privacy is set to Medium or
                  lower, which will allow the use of cookies in your browser.
                </li>
                <li>
                  If set above medium level it will prevent the use of cookies.
                </li>
              </ol>
              <h4 className="mb-4">Mozilla Firefox</h4>
              <ol className="list-decimal ml-4 mb-4 text-xs md:text-sm font-light text-[#000000] mb-8">
                <li>
                  Click "Tools" at the top of your browser and select "Options".
                </li>
                <li>Then select the "Privacy" icon.</li>
                <li>
                  Click the "Cookies" and select "Allow pages to create a
                  cookie."
                </li>
              </ol>
              <h4 className="mb-4">Safari</h4>
              <ol className="list-decimal ml-4 mb-4 text-xs md:text-sm font-light text-[#000000] mb-8">
                <li>
                  Click the gear icon at the top of your browser and select
                  "Settings".
                </li>
                <li>
                  Click the "Privacy" tab, then select the option "Disable the
                  use of cookies by third parties and advertising cookies."
                </li>
                <li>Click "Save".</li>
              </ol>
              <h3 className="mb-4">How to manage cookies on your Mac</h3>
              <p className="text-xs md:text-sm font-light text-[#000000] mb-8">
                To enable cookies on our website, follow the steps below.
              </p>
              <h4 className="mb-4">Microsoft Internet Explorer 5.0 on OSX</h4>
              <ol className=" list-decimal ml-4 text-xs md:text-sm font-light text-[#000000] mb-4">
                <li>
                  Click on "Explorer" at the top of your browser and select
                  "Settings".
                </li>
                <li>
                  Scroll down to the "Cookies" section in the "Received Files".
                </li>
                <li>Select "Do not ask."</li>
              </ol>
              <h4>Safari on OSX</h4>
              <ol className=" list-decimal ml-4 text-xs md:text-sm font-light text-[#000000] mb-8">
                <li>
                  Click "Safari" on the top of your browser and select
                  "Settings".
                </li>
                <li>Click the "Privacy" and then "Enable cookies."</li>
                <li>Select "only the pages you have visited."</li>
              </ol>
              <h4 className="mb-4">Mozilla and Netscape on OSX</h4>
              <ol className="list-decimal ml-4  text-xs md:text-sm font-light text-[#000000] mb-8">
                <li>
                  Click "Mozilla" or "Netscape" at the top of your browser and
                  select "Settings".
                </li>
                <li>
                  Scroll down to the "Cookies" under "Privacy &amp; Security".
                </li>
                <li>Select "Allow cookies only to the original site."</li>
              </ol>
              <h4 className="mb-4">Opera</h4>
              <ol className="list-decimal ml-4 text-xs md:text-sm font-light text-[#000000] mb-8">
                <li>
                  Click "Menu" on the top of your browser and select "Settings".
                </li>
                <li>Then select "Options" tab and the "Advanced".</li>
                <li>Select "Enable cookies."</li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
