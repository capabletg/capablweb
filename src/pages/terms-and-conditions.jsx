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
            <div className="row">
              <div className="">
                <h3 className=" text-3xl font-medium mb-4">Service</h3>
                <p className="text-xs md:text-sm font-light text-[#000000] mb-8">
                  {" "}
                  <span className="font-bold text-sm">
                    Elite Techno Groups
                  </span>{" "}
                  (All the products and its services including its websites) is
                  to help users to find Suitable training/Workshops/products
                  under{" "}
                  <span className="font-bold text-sm">Elite Techno Groups</span>
                  , a Registered Indian firm. You understand and agree that the
                  Service is provided on an AS IS and AS AVAILABLE basis. Elite
                  Techno Groups disclaims all responsibility and liability for
                  the availability, timeliness, security or reliability of the
                  Service.{" "}
                  <span className="font-bold text-sm">Elite Techno Groups</span>{" "}
                  also reserves the right to modify, suspend or discontinue the
                  Service with or without notice at any time and without any
                  liability to you.
                </p>

                <h4 className="mt-4 mb-4 font-medium text-xl">
                  Ability to Accept Terms of Use
                </h4>
                <p className="mb-8 text-xs md:text-sm font-light text-[#000000]">
                  {" "}
                  You affirm that you are either more than 18 years of age, or
                  an emancipated minor, or possess legal parental or guardian
                  consent, and are fully able and competent to enter into the
                  terms, conditions, obligations, affirmations, representations,
                  and warranties set forth in these Terms of Use, and to abide
                  by and comply with these Terms of Use. In any case, you affirm
                  that you are over the age of 13, as products and services
                  offered by Elite Techno Groups are not intended for children
                  under 13.
                </p>

                <h4 className="mt-4 mb-4 font-medium text-xl">Use</h4>

                <p className="mb-4 text-xs md:text-sm font-light text-[#000000]">
                  {" "}
                  The Service is made available to you for your personal use
                  only. You are responsible for maintaining the confidentiality
                  of your Service password and account, and are responsible for
                  all activities that occur under your account.{" "}
                  <span className="font-bold text-sm">
                    Elite Techno Groups
                  </span>{" "}
                  reserves the right to refuse or terminate service to anyone at
                  any time without notice for any reason. You agree that you are
                  responsible for your own communications and for any
                  consequences thereof. Your use of the Service is subject to
                  your acceptance of and compliance with the Agreement and any
                  other polices or guidelines set forth by{" "}
                  <span className="font-bold text-sm">Elite Techno Groups</span>
                  . You agree that you will use the Service in compliance with
                  all applicable local, state, national, and international laws,
                  rules and regulations, including any laws regarding the
                  transmission of technical data exported from your country of
                  residence. You shall not, shall not agree to, and shall not
                  authorize or encourage any third party to:{" "}
                </p>

                <ul className="list text-xs md:text-sm font-light text-[#000000]">
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right text-blue-500"></i>
                    Use the Service to upload, transmit or otherwise distribute
                    any content that is unlawful, defamatory, harassing,
                    abusive, fraudulent, obscene, contains viruses, or is
                    otherwise objectionable as reasonably determined by Elite
                    Techno Groups;
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right text-blue-500"></i>
                    {
                      "Upload, transmit or otherwise distribute content that infringes upon another party's intellectual property rights or other proprietary, contractual or fiduciary rights or obligations; Prevent others from using the Service;"
                    }
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right text-blue-500"></i>
                    Use the Service for any fraudulent or inappropriate purpose;
                    or
                  </li>
                </ul>
                <p className="mt-4 text-xs md:text-sm font-light text-[#000000]">
                  {" "}
                  Act in any way that violates the Agreement, as may be revised
                  from time to time. Violation of any of the foregoing may
                  result in immediate termination of this Agreement, and may
                  subject you to state and federal penalties and other legal
                  consequences. Elite Techno Groups reserves the right, but
                  shall have no obligation, to investigate your use of the
                  Service in order to determine whether a violation of the
                  Agreement has occurred or to comply with any applicable law,
                  regulation, legal process or governmental request.{" "}
                </p>

                <h4 className="mt-4 mb-4 font-medium text-xl">
                  Submission of Content
                </h4>
                <p className="mt-4 text-xs md:text-sm font-light text-[#000000]">
                  {" "}
                  <span className="font-bold text-sm">
                    Elite Techno Groups
                  </span>{" "}
                  allows registered users to submit content, including but not
                  limited to, file uploads, listings, articles or news
                  submissions, ratings and comments. With the exception of file
                  uploads, when contributing content to{" "}
                  <span className="font-bold text-sm">Elite Techno Groups</span>
                  ,
                </p>

                <ul className="list mt-4 text-xs md:text-sm font-light text-[#000000]">
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right text-blue-500"></i>{" "}
                    You consent that you are the original creator of the content
                    and have all legal, moral, and other rights that may be
                    necessary to grant us with the license set forth in this
                    Agreement;
                  </li>

                  <li className="mb-2">
                    <i className="fa fa-angle-double-right  text-blue-500"></i>{" "}
                    You agree to grant to us worldwide, royalty-free, perpetual,
                    non-exclusive right and license (including any moral rights
                    or other necessary rights) to use, display, reproduce,
                    modify, adapt, publish, distribute, perform, promote,
                    archive, translate, and to create derivative works and
                    compilations, in whole or in part. Such license will apply
                    with respect to any form, media, and technology known or
                    later developed;{" "}
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right  text-blue-500"></i>{" "}
                    You acknowledge and agree that we shall have the right (but
                    not obligation), in our sole discretion, to refuse to
                    publish or to remove or block access to any Content you
                    provide at any time and for any reason, with or without
                    notice. For file uploads, you acknowledge you are either the
                    creator and owner of the file(s) you are uploading and grant
                    the same rights to us as is mentioned above, or you have
                    confirmed that the file(s) you are uploading have explicit
                    licenses that allow free redistribution.
                  </li>
                </ul>

                <h5 className="mt-4 mb-4 font-medium text-xl">
                  Content of the Service
                </h5>
                <p className="mb-4 text-xs md:text-sm font-light text-[#000000]">
                  {" "}
                  <span className="font-bold text-sm">
                    Elite Techno Groups
                  </span>{" "}
                  takes no responsibility for third party content (including,
                  without limitation, any viruses or other disabling features),
                  nor does Elite Techno Groups have any obligation to monitor
                  such third party content. Elite Techno Groups reserves the
                  right at all times to remove or refuse to distribute any
                  content on the Service, such as content which violates the
                  terms of this Agreement. Elite Techno Groups also reserves the
                  right to access, read, preserve, and disclose any information
                  as it reasonably believes is necessary to{" "}
                </p>

                <ul className="list text-xs md:text-sm font-light text-[#000000]">
                  <li className="mb-2 ">
                    <i className="fa fa-angle-double-right  text-blue-500"></i>{" "}
                    Satisfy any applicable law, regulation, legal process or
                    governmental request,{" "}
                  </li>

                  <li className="mb-2">
                    <i className="fa fa-angle-double-right  text-blue-500"></i>{" "}
                    Enforce this Agreement, including investigation of potential
                    violations hereof,{" "}
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right  text-blue-500"></i>{" "}
                    Detect, prevent, or otherwise address fraud, security or
                    technical issues (including, without limitation, the
                    filtering of spam),{" "}
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right  text-blue-500"></i>{" "}
                    Respond to user support requests, or{" "}
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right  text-blue-500"></i>{" "}
                    Protect the rights, property or safety of Elite Techno
                    Groups, its users and the public. Elite Techno Groups will
                    not be responsible or liable for the exercise or
                    non-exercise of its rights under this Agreement.{" "}
                  </li>
                </ul>

                <h5 className="mt-4 mb-4 font-medium text-xl"> Ads</h5>

                <p className="mb-4 text-xs md:text-sm font-light text-[#000000]">
                  {" "}
                  As a condition to using the Service, you agree and understand
                  that{" "}
                  <span className="font-bold text-sm">
                    Elite Techno Groups
                  </span>{" "}
                  will display ads and other information adjacent to and related
                  to the content of its services. These include, but are not
                  limited to, sponsored ads, Google AdSense Ads, as well as ads
                  from other ad providers.
                </p>

                <h5 className=" mt-4 mb-4 font-medium text-xl">
                  {" "}
                  Indemnification{" "}
                </h5>

                <p className="mb-4 text-xs md:text-sm font-light text-[#000000]">
                  {" "}
                  You agree to hold harmless and indemnify{" "}
                  <span className="font-bold text-sm">Elite Techno Groups</span>
                  , and its subsidiaries, affiliates, officers, agents, and
                  employees from and against any third party claim arising from
                  or in any way related to your use of the Service, including
                  any liability or expense arising from all claims, losses,
                  damages (actual and consequential), suits, judgments,
                  litigation costs and attorneys fees, of every kind and nature.
                  In such a case,{" "}
                  <span className="font-bold text-sm">
                    Elite Techno Groups{" "}
                  </span>{" "}
                  will provide you with written notice of such claim, suit or
                  action.{" "}
                </p>

                <h5 className="mt-4 mb-4 font-medium text-xl"> Copyright </h5>

                <p className="mb-4 text-xs md:text-sm font-light text-[#000000]">
                  {" "}
                  All files hosted on{" "}
                  <span className="font-bold text-sm">
                    Elite Techno Groups
                  </span>{" "}
                  are under the copyright of the original author. You must
                  contact the original author if you wish to use a file in a way
                  that is prohibited by the file license. All other content on
                  this website, including but not limited to graphic files,
                  code, news, articles, tutorials, reviews and forum postings
                  are properties of the original authors. No portion of the
                  content material on this web site may be copied, reproduced,
                  or reused without the express written permission of the
                  original author. Where the original author is not explicitly
                  indicated, the copyright belongs to{" "}
                  <span className="font-bold text-sm">Elite Techno Groups</span>
                  .{" "}
                </p>

                <h5 className="mt-4 mb-4 font-medium text-xl">
                  {" "}
                  Notification of Copyright Infringement{" "}
                </h5>

                <p className="mb-4 text-xs md:text-sm font-light text-[#000000]">
                  {" "}
                  Our policy is to comply with all intellectual property laws
                  and to act expeditiously upon receiving any notice of claimed
                  infringement. If you believe that your work has been
                  reproduced on this website in a manner that constitutes
                  copyright infringement, please provide a notice of copyright
                  infringement containing all of the following information:{" "}
                </p>
                <ul className="list mb-4 text-xs md:text-sm font-light text-[#000000]">
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right text-blue-500"></i> A
                    physical or electronic signature of a person authorized to
                    act on behalf of the copyright owner for the purposes of the
                    complaint.{" "}
                  </li>

                  <li className="mb-2">
                    <i className="fa fa-angle-double-right text-blue-500"></i>{" "}
                    Identification of the copyrighted work claimed to have been
                    infringed.{" "}
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right text-blue-500"></i>{" "}
                    Identification of the material on our website that is
                    claimed to be infringing or to be the subject of infringing
                    activity.{" "}
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right text-blue-500"></i>{" "}
                    The address, telephone number or e-mail address of the
                    complaining party.{" "}
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right text-blue-500"></i> A
                    statement that the complaining party has a good-faith belief
                    that use of the material in the manner complained of is not
                    authorized by the copyright owner, its agent or the law.{" "}
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right text-blue-500"></i> A
                    statement, under penalty of perjury, that the information in
                    the notice of copyright infringement is accurate, and that
                    the complaining party is authorized to act on behalf of the
                    owner of the right that is allegedly infringed.{" "}
                  </li>
                </ul>

                <h5 className="mt-4 mb-4 font-medium text-xl"> Rules </h5>

                <p className="mb-4 text-xs md:text-sm font-light text-[#000000]">
                  {" "}
                  While visiting the{" "}
                  <span className="font-bold text-sm">
                    Elite Techno Groups
                  </span>{" "}
                  Site, you may also not: post, transmit or otherwise distribute
                  information constituting or encouraging conduct that would
                  constitute a criminal offense or give rise to civil liability,
                  or otherwise use the Elite Techno Groups Site in a manner
                  which is contrary to law or would serve to restrict or inhibit
                  any other user from using or enjoying the Elite Techno Groups
                  Site or the Internet; post or transmit any information or
                  software which contains a virus, cancelbot, Trojan horse, worm
                  or other harmful or disruptive component; upload, post,
                  publish, transmit, reproduce, or distribute in any way,
                  information, software or other material obtained through the{" "}
                  <span className="font-bold text-sm">Elite Techno Groups</span>{" "}
                  Site which is protected by copyright, or other intellectual
                  property right, or derivative works with respect hereto,
                  without obtaining permission of the copyright owner or right
                  holder.
                </p>

                <h5 className="mt-4 mb-4 font-medium text-xl"> Monitoring </h5>
                <p className="mb-4 text-xs md:text-sm font-light text-[#000000]">
                  {" "}
                  <span className="font-bold text-sm">
                    Elite Techno Groups
                  </span>{" "}
                  has no obligation to monitor the Elite Techno GroupsSite.
                  However, you agree that Elite Techno Groups has the right to
                  monitor the Elite Techno Groups Site electronically from time
                  to time and to disclose any information as necessary to
                  satisfy any law, regulation or other governmental request, to
                  operate the Elite Techno Groups Site properly, or to protect
                  itself or its subscribers. Elite Techno Groups will not
                  intentionally monitor or disclose any private electronic-mail
                  message unless required by law. Elite Techno Groups reserves
                  the right to refuse to post or to remove any information or
                  materials, in whole or in part, that, in its sole discretion,
                  are unacceptable, undesirable, or in violation of this
                  Agreement.{" "}
                </p>

                <h5 className="mt-4 mb-4 font-medium text-xl">
                  {" "}
                  Limitation of Liability{" "}
                </h5>
                <p className="mb-4 text-xs md:text-sm font-light text-[#000000]">
                  {" "}
                  <span className="font-bold text-sm">
                    Elite Techno Groups
                  </span>{" "}
                  takes no responsibility for the accuracy or validity of any
                  claims or statements contained in the documents and related
                  graphics on the Elite Techno Groups Site. Further, Elite
                  Techno Groups makes no representations about the suitability
                  of any of the information contained in software programs,
                  documents and related graphics on the Elite Techno Groups Site
                  for any purpose. All such software programs, documents and
                  related graphics are provided without warranty of any kind. In
                  no event shall Elite Techno Groups be liable for any damages
                  whatsoever, including special, indirect or consequential
                  damages, arising out of or in connection with the use or
                  performance of information available from the service.{" "}
                </p>

                <h5 className="mt-4 mb-4 font-medium text-xl"> Recourse </h5>
                <p className="mb-4 text-xs md:text-sm font-light text-[#000000]">
                  {" "}
                  If you are dissatisfied with the Elite Techno Groups Site or
                  with any terms, conditions, rules, policies, guidelines, or
                  practices of Elite Techno Groups in operating the Elite Techno
                  Groups Site, your sole and exclusive remedy is to discontinue
                  using the Elite Techno Groups Site.{" "}
                </p>

                <h5 className="mt-4 mb-4 font-medium text-xl">
                  {" "}
                  Confidential Information{" "}
                </h5>
                <p className="mb-4 text-xs md:text-sm font-light text-[#000000]">
                  {" "}
                  You authorize Elite Techno Groups to collect from any party
                  and to retain all relevant information relating to your use of
                  the Elite Techno Groups Site, and you hereby authorize any
                  party to provide us with such information. You understand and
                  agree that unless you notify Elite Techno Groups to the
                  contrary by e-mailing us, you further authorize Elite Techno
                  Groups to disclose, on a confidential basis, to any party with
                  whom Elite Techno Groups has business relations all relevant
                  information relating to your dealings with us and the Elite
                  Techno Groups Site.{" "}
                </p>

                <h5 className="mt-4 mb-4 font-medium text-xl"> Indemnity </h5>
                <p className="mb-4 text-xs md:text-sm font-light text-[#000000]">
                  {" "}
                  You agree to defend, indemnify and hold Elite Techno Groups
                  and its affiliate and related companies harmless from any and
                  all liabilities, costs and expenses, including reasonable
                  attorneys fees, related to any Violation of this Agreement by
                  you or users of your account, or in connection with the use of
                  the Elite Techno Groups Site or the Internet or the placement
                  or transmission of any message, information, software or other
                  materials on the Elite Techno Groups Site or on the Internet
                  by you or users of your account.{" "}
                </p>

                <h5 className="mt-4 mb-4 font-medium text-xl"> Trademarks </h5>
                <p className="mb-4 text-xs md:text-sm font-light text-[#000000]">
                  {" "}
                  Elite Techno Groups™ and other names, logos and icons
                  identifying Elite Techno Groups and Elite Techno Groups
                  products and services referenced herein are trademarks or
                  registered trademarks of Elite Techno Groups. All other
                  product and/or brand or company names mentioned herein are the
                  trademarks of their respective owners.{" "}
                </p>

                <h5 className="mt-4 mb-4 font-medium text-xl">
                  {" "}
                  Usage Agreement{" "}
                </h5>
                <p className="mb-4 text-xs md:text-sm font-light text-[#000000]">
                  {" "}
                  The designs, Templates software, scripts, codes, and any other
                  product distributed at Elite Techno Groups each carry their
                  own separate open source license which is chosen by the
                  designer. Upon downloading a design, designs, Templates
                  software, scripts, codes, you agree to use the design under
                  its respected license.{" "}
                </p>

                <h5 className="mt-4 mb-4 font-medium text-xl">
                  {" "}
                  Payment Terms{" "}
                </h5>
                <p className="mb-4 text-xs md:text-sm font-light text-[#000000]">
                  {" "}
                  We as a merchant shall be under no liability whatsoever in
                  respect of any loss or damage arising directly or indirectly
                  out of the decline of authorization for any Transaction, on
                  Account of the Cardholder having exceeded the preset limit
                  mutually agreed by us with our acquiring bank from time to
                  time.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </div>
  );
}
