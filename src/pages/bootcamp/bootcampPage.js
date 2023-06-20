import Link from "next/link";
import Slider from "react-slick";
import Layout from "../../layout/Layout";
import Datascience from "../../components/courses/faqs_datascience";
import Accordian from "../../components/courses/Accordian";
import Header from "../../components/header_intrim";
import {
  HtmlSvg,
  NodeSvg,
  PythonSvg,
  ReactSvg,
  JavaSvg,
  JavascriptSvg,
  ProjectsSvg,
  CompetitionsProjectsSvg,
  LeaderboardLearningEnvironmentSvg,
  MadeForCollegeStudentsSvg,
  OneToOneCounsellingSvg,
  TopCertificationsSvg,
  TrueCareerPlatformSvg,
  WorldClassExposureAndNetworkingSvg,
} from "../../components/courses/svgs";
import jsonData from "./data.json";
import bootcampData from "./data4.json";

export default function bootcampPage() {
  // const aboutTitle1 = data.gainMasterclass.title;
  // const bootcampData = data.gainMasterclass;
  const data = bootcampData[0];

  const aboutTitle = jsonData.aboutMasterclass.title;
  const aboutText = jsonData.aboutMasterclass.details;
  const aboutText2 = jsonData.aboutMasterclass.about;
  const searchTerm = 'Responsive Web-page';
  const highlightText = (text, searchTerm) => {
    const regex = new RegExp(searchTerm, 'gi');
    return text.replace(regex, match => `<span style="background-color: yellow; font-weight: bold;">${match}</span>`);
  };
  const highlightedAboutText = highlightText(aboutText2, searchTerm);
  const theme = {
    primary: "#A442D7",
    text: "#FFFFFF",
  };
  
  // const aboutText3 = jsonData.aboutMasterclass.about2;
  const accordianData = [
    {
      title: `HTML & CSS`,
      description: `We help you build your profile on platforms like Kaggle, GIT, LinkedIn, Github etc. Support in interviews, resumes, profiling. And, finally Internship and Job Guarantee!`,
      image: <HtmlSvg theme={theme} />,
    },
    {
      title: "Javascript",
      description: `Talk to experts in live sessions, get your doubts solved over mail, call, portal, msg, etc. Pause your course during your college projects/exams and a lot more features, especially for college students`,
      image: <JavascriptSvg theme={theme} />,
    },
    {
      title: `React`,
      description: `Our students get an exclusive feature - a dedicated mentor who will help them throughout the program and even after! Furthermore, our experts discuss your performance report on a regular basis!`,
      image: <ReactSvg theme={theme} />,
    },
    {
      title: `Python`,
      description: `Live talks with Industry leaders, projects with students from different parts of India, and be in a community with Industry experts, researchers, and like-minded students.`,
      image: <PythonSvg theme={theme} />,
    },
    {
      title: `Java`,
      description: `Get - updates on national/international events, your major-minor projects done, credits for internships, industrial projects in Data Science, and services that help you be Capabl`,
      image: <JavaSvg theme={theme} />,
    },
    {
      title: `API`,
      description: `Keep a track of your performance against 1000s of others to stay ahead of the competition. The more you stay ahead of the competition, chances are higher to get noticed by Industry!`,
      image: <NodeSvg theme={theme} />,
    },
    // {
    //   title: "Top Certifications",
    //   description: `Exclusive Certifications only for Capabl Students - Internationally Accredited (UK, ISO) Certification with 5+ Industries and technical organizations that stamps your performance and credibility`,
    //   image: <TopCertificationsSvg theme={theme} />,
    // },
  ];
  
  
  return (
    <Layout >
      <Header/>
      {/* <iframe frameborder="0" style="height:500px;width:99%;border:none;" src='https://forms.capabl.in/capabl/form/TestBootcampForm/formperma/QwD3xXyGyQGwaHlHo8KKWz_UKKIPyfD2K039tJFUgxo'></iframe> */}
            <section className="hero-section-three bg-lighter rel z-1 pt-150 rpt-150">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-6 align-self-end">
              <div className="hero-three-image-part">
                <img src="/images/hero/hero-three-man.png" alt="Hero" />
                {/* <div className="hero-chart wow fadeInUp delay-0-2s">
                  <img src="assets/images/hero/hero-chart.png" alt="Chart" />
                  <h5>95% Success Results</h5>
                </div> */}
                <div className="hero-over-text">
                  <div className="about-image-over wow fadeInRight delay-0-2s">
                    {/* <img src="assets/images/about/icon1.png" alt="Icon" />
                    <h5>Experience Advisor</h5> */}
                  </div>
                  <div className="about-image-over-item wow fadeInLeft delay-0-2s">
                    {/* <img src="assets/images/about/icon2.png" alt="Icon" /> */}
                    <h5 > by  {data['Mentor Name']} <br/><h6>Software Developer</h6></h5>
                    <br/>
                    {/* <h6>Software Developer</h6> */}
                  </div>
                </div>
                <img
                  className="hero-circle"
                  src="/images/shapes/circle-dots-two.png"
                  alt="Shape"
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="hero-content-three pt-10 pb-100 rpt-40">
                <span className="hero-sub-title wow fadeInUp delay-0-2s">
              {data['Sub-Title']}           
                   </span>
                <h1 className="mb-25 wow fadeInUp delay-0-4s">
                 {/* Data-Science Bootcamp for Fresher */}
                 {data.Title}
 {/* <span>Online</span> Education Partners University */}
                  {/* 2022 */}
                </h1>
                {/* <ul className="list-style-one wow fadeInUp delay-0-6s"> */}
                  {/* <h5>Freshers Invited</h5> */}
                  {/* <li>538+ Courses</li> */}
                {/* </ul> */}
                <div className="hero-btns mt-10 wow fadeInUp delay-0-8s">
                  <Link href="">
                    <a className="theme-btn mt-10 fas fa-calendar">
                    {/* <i className="fas fa-calendar" /> */}
                    &nbsp;&nbsp; {data.Date}
                    </a>
                  </Link>
                  <Link href="/course-grid">
                    <a className="theme-btn style-two mt-10 fas fa-clock">
                     &nbsp;&nbsp; Time   {data.Time} 
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="hero-rectangle"
          src="/images/shapes/rectangle-dots-two.png"
          alt="Shape"
        />
        <div className="hero-circles-one wow fadeInUpRight delay-0-4s" />
        <div className="hero-circles-two wow fadeInUpRight delay-0-2s" />
      </section>

      {/* <Index3Slider /> */}
      {/* <div className="hero-two-right wow fadeInRight delay-0-6s">
          <img src="assets/images/hero/hero-two-right.png" alt="Hero" />
        </div> */}

      {/* Feature Section Start */}
      <section className="freature-section-four rel z-1 pb-90 rpb-70">
        <div className="slider-counter text-white">
          <div className="row">
            <div className="col-sm-6">
              <div className="success-item style-two wow fadeInLeft delay-0-2s">

                <i className="fas fa-graduation-cap" />
                <span
                  className="count-text percent"
                  data-speed={3000}
                  data-stop={256}
                >
                  95
                </span>
                <span>Placement Rate</span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="success-item style-two wow fadeInLeft delay-0-4s">
                <i className="fas fa-book" />
                <span
                  className="count-text plus"
                  data-speed={3000}
                  data-stop={3652}
                >
                  10.06 LPA
                </span>
                <span>Average CTC</span>
              </div>
            </div>
            {/* <div className="col-sm-6">
              <div className="success-item style-two wow fadeInLeft delay-0-2s">
                <i className="fas fa-graduation-cap" />
                <span
                  className="count-text percent"
                  data-speed={3000}
                  data-stop={256}
                >
                  95
                </span>
                <span>Placement Rate</span>
              </div>
            </div> */}

          </div>
        </div>



<section className="ml-2">
        <div className="container">
      <div className="row large-gap mb-60">
        <div className="">
          <div className="about-three-content wow fadeInLeft delay-0-2s">
            <div className="section-title ">
            {/* <h2>{data.Title}</h2>
      <p>{data['Sub-Title']}</p> */}
      {/* <p>Mentor Name: {data['Mentor Name']}</p>
      <p>Date: {data.Date}</p>
      <p>Time: {data.Time}</p> */}
            {/* <p>{data['Bootcamp heading']}</p> */}
      {/* <p>Zoho Form: {data['Zoho Form']}</p> */}
      {/* <p>{data['Bootcamp Overview']}</p> */}
      {/* <p>Bootcamp - What students will learn: {data['Bootcamp - What students will learn']}</p>
      <p>Curriculum: {data.Curriculum}</p>
      <p>Prerequisites: {data.Prerequisites}</p> */}

              <span className="sub-title-three">
                {/* About this Masterclass */}
                {data['Bootcamp heading']} <span></span>
                {/* <h2>{bootcampData.Title}</h2> */}

              </span>
            </div>
          </div>
            <div className="about-three-text wow fadeInRight delay-0-2s">
            <div style={{ marginTop: '10px' }} dangerouslySetInnerHTML={{ __html: highlightedAboutText }}></div>
<p>{data['Bootcamp Overview']}</p>
              {/* <p>{aboutText}</p> */}
              {/* <p>{aboutText2}</p> */}
              {/* <p>{aboutText3}</p> */}

          </div>
        </div>
      </div>
      {/* Rest of your code */}
    {/* </div>
  

        <div className="container"> */}
                  {/* <div className="container"> */}
          <div className="row large-gap mb-60">
            <div className="">
              <div className="about-three-content wow fadeInLeft delay-0-2s">
                <div className="section-title ">
                  <span className="sub-title-three">
                  What you will gain from this Masterclass <span></span>
                  </span>

              </div>
            </div>
            <div className="">
              <div className="about-three-text wow fadeInRight delay-0-2s">
                <pre> {data['Bootcamp - What students will learn']}</pre>
                <p> • Design and develop Responsive Websites
<br/>• Demystify infamous CSS topics like positioning, display, flexboxes etc. from scratch
<br/>• Prepare for Frontend interviews

                {/* <p>{aboutTitle1}</p> */}
                </p>
              </div>
            </div>
            </div>

          </div>
{/* </div>
<div className="container"> */}
          <div className="row large-gap mb-60">
            <div className="">
              <div className="about-three-content wow fadeInLeft delay-0-2s">
                {/* <div className="section-title "> */}
                <div className="member-description">
                  <span className="sub-title-three">
                Meet {data['Mentor Name']} <Link href="https://www.linkedin.com/">
                 <a className="team fs-10 ml-20 blue">
                  (LinkedIn)
                  </a>
                  </Link>
 <span></span>
                  </span>
                  {/* </div> */}

              </div>
            </div>
            <div className="">
              <div className="about-three-text wow fadeInRight delay-0-2s">
<p> • Developed a custom CSS framework & UI templating library ground up for Coding Blocks
<br/>• Designed & Developed IDE for Coding Minutes
<br/>• Prepare for Frontend interviews

                
                </p>
              </div>
            </div>
            </div>

          </div>
{/* </div>
<div className="container"> */}
          <div className="row large-gap mb-60">
            <div className="">
              <div className="about-three-content wow fadeInLeft delay-0-2s">
                <div className="section-title ">
                  <span className="sub-title-three">
This Masterclass is for
                  </span>

              </div>
            </div>
            </div>


              <div className="categories-wrap wow fadeInUp delay-0-4s">
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="category-item mt-35">
                      <div className="icon">
                        <img
                          src="/images/categories/icon1.png"
                          alt="Icon"
                        />
                      </div>
                      <span> SDEs seeking skill enhancement and upskilling opportunities.

</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="category-item mt-35">
                      <div className="icon">
                        <img
                          src="/images/categories/icon3.png"
                          alt="Icon"
                        />
                      </div>
                      <span>  SDEs transitioning from Service to Product Companies.
  
</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="category-item mt-35">
                      <div className="icon">
                        <img
                          src="/images/categories/icon5.png"
                          alt="Icon"
                        />
                      </div>
                      <span>                SDEs aiming to learn web design and create visually appealing web interfaces.

</span>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}

            {/* </div>
            </div>
            </div>
            </div> */}
       
                      <div className="about-three-content wow fadeInLeft delay-0-2s">
                <div className="section-title ">
                  <span className="sub-title-three mb-70">
                  Our Successfull Alumini <span></span>
                  </span>

              </div>
            </div>

        {/* </div> */}
        
      {/* </section> */}
      {/* Feature Section End */}
            {/* card section start */}

<div className="cards ">
  <div className="card">
    <span className="close"></span>
    <article>
      <h2>Adithi Tripathi</h2>
      <div className="title">Software Developer Engineer</div>
      <div className="pic"><img src="/images/Adithi/aditi.png"/></div>
      <span>Pre Capabl </span>
      <p>Fresher 
        <h4 className="text blue">⬇</h4>
        <span>Post Capabl </span>
        <br/>
        <img src="/images/Adithi/Layer 1538.png"/>

      </p>
    </article>
    <div class="actions">

    </div>
  </div>
  <div className="card">
    <span className="close"></span>
    <span className="arrow"></span>
    <article>
      <h2>Vidhi Sethiya</h2>
      <div className="title">Amazon Apprenticeship</div>
      <div className="pic"><img src="/images/Vidhi/Layer 1496.png"/></div>
      <span>Pre Capabl </span>
      <p>Acropolis institution
        <h4 className="text blue">⬇</h4>
        <span>Post Capabl </span>
<br/>
        <img src="/images/Vidhi/Layer 1512.png" className="ml-5"/>
</p>
    </article>
    <div className="actions">

    </div>
  </div>
  <div className="card">
    <span className="close"></span>
    <span className="arrow"></span>
    <article>
      <h2>Tejaswi Hegde</h2>
      <div className="title">Associate Software Engineer</div>
      <div className="pic"><img src="/images/Tejaswi/Layer 1443.png"/></div>
      <span>Pre Capabl </span>
      <p>Research Intern
        <h4 className="text blue">⬇</h4>
        <span>Post Capabl </span>
<br/>
        <img src="/images/Tejaswi/Bosch-logo.svg.png"/>
</p>
    </article>
    <div className="actions">

    </div>
  </div>

  <div className="card">
    <span className="close"></span>
    <span className="arrow"></span>
    <article>
      <h2>Gaurav Jiwani</h2>
      <div className="title">CAE Analyst</div>
      <div className="pic"><img src="/images/Gauvrav/Layer 1416.png"/> </div>
      <span>Pre Capabl </span>
      <p>SDE
        <h4 className="text blue">⬇</h4>
        <span>Post Capabl </span>
<br/>
        <img src="/images/Gauvrav/Layer 1433.png"/>
</p>

    </article>
    <div className="actions">
      {/* <button class="btn"><span>like</span><img class="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/heart.svg"/></button>
      <button class="btn"><span>trade</span><img class="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/trade.svg"/></button> */}

    </div>
  </div>
</div>
            </div>

</section>
<section className="team-section rel z-1 pb-100 rpb-70">
        <div className="container">
          <div className="row">

            {/* <Accordian>
  <AccordianItem title="Title 1">
    <p>This is the content for the first accordion item.</p>
  </AccordianItem>
  <AccordianItem title="Title 2">
    <p>This is the content for the second accordion item.</p>
  </AccordianItem>
</Accordian> */}


{/* <Accordian data={accordianData} theme={theme} /> */}
</div>
</div>
</section>

      {/* card section end */}
      <section className="team-section rel z-1 bg-[#14213D] text-white pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-12">
              <div className="team-content pt-120 rpt-90 mb-30 rmb-75 wow fadeInUp delay-0-2s">
                <div className="section-title mb-25">
                  {/* <span className="sub-title-two">Meet Our Team</span> */}
                  <h2>
                    {"About  Capabl" }
                  {/* <span className="text-[#BE362E] font-bold">{`package by 40%+`}</span> */}
                    <img
                // src="/logo_white.svg"
                // alt="capable logo"
              />
              </h2>
                </div>
                <p>
                Capabl by Elite Techno Groups is an esteemed education platform
                 in India founded by IIT graduates. Their focus is on addressing 
                 the unique challenges faced by undergraduate engineers. They offer 
                 comprehensive learning programs that aim to bridge the gap between 
                 academic education and industry demands. Capabl is committed to 
                 keeping students updated with the latest industry trends and
                  equipping them with the skills needed in today's competitive job 
                  market. The team consists of experienced professionals who have
                   worked with renowned companies like Yulu, Amazon, Ola, and Sastra
                    Robotics. They bring their real-world experience into their 
                    teaching methods to ensure students are well-prepared for their 
                    careers. Capabl's vision is to create a world-class engineering 
                    learning ecosystem that fosters collaboration among students, 
                    industry, and colleges. They aim to reduce the divide between 
                    academia and the industry by complementing the existing college 
                    education system. Their ultimate goal is to create a brighter 
                    future for engineering students in India.

</p>
              </div>
            </div>
             <div className="col-lg-6">
              <div className="team-members">
                <div className="row align-items-center">
                  <div className="col-sm-6 wow fadeInRight delay-0-2s">
                    <div className="team-member">
                    {/* <ReactPlayer url="https://www.youtube.com/watch?v=jYoZscnewvw&ab_channel=Capabl%28FromEliteTechnoGroups%29"
        controls
        playing
        width="560px"
        height="315px"

/> */}
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
        <span className="bg-text">Capabl</span>
      </section>

      <section className="coach-section-two bg-light-two rel z-1 pt-185 rpt-150 pb-130 rpb-100">
        <div className="container for-circle rpt-5">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center mb-50">
                <span className="sub-title-three">
                  {/* Our Latest <span>Courses</span> */}
                </span>
                <h2>Upcoming Bootcamp</h2>
              </div>
            </div>
          </div>
          <section id="gallery">
  <div className="container">
    <div className="row">
    <div className="col-lg-6 mb-4">
    <div className="card" style={{ width: '80%', height: '100%' }}>
      <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" className="card-img-top " style={{ width: '100%', height: 'auto' }}/>
      <div className="card-body">
      <h4>
                  <Link href="fullstackBootcampPage">
                  Multi-threading & Concurrency using Java
                  </Link>
                </h4>
                <ul className="coach-footer mb-20">
                  <li>
                  
                    <span className="mb-30">
                    STARTS Time:
June 10, 2023 5:00 PM (IST)  <br/>
ENDS Time:
June 10, 2023 8:00 PM (IST)

                    </span>
                  </li>
                </ul>
                <Link href="fullstackBootcampPage">

        <a href="" className="btn  btn-sm"
  style={{
    borderColor: '#ffcc00',
    color: 'white',
    backgroundColor: '#ffcc00'}}

>
  Register Now
</a>
</Link>
        {/* <a href="" className="btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></a> */}
      </div>
     </div>
    </div>
  <div className="col-lg-6 mb-4">
  <div className="card" style={{ width: '80%', height: '100%' }}>
      <img src="https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="" className="card-img-top"/>
      <div className="card-body" >
      <h4 >
                  <Link href="fullstackBootcampPage">
                  Multi-threading & Concurrency using Java
                  </Link>
                </h4>
                <ul className="coach-footer">
                  <li>
                  
                    <span>
                    STARTS Time:
June 10, 2023 5:00 PM (IST)  <br/>
ENDS Time:
June 10, 2023 8:00 PM (IST)

                    </span>
                  </li>
                </ul>
                <Link href="fullstackBootcampPage">

                <a href="" className="btn btn-outline-success btn-sm"
  style={{
    borderColor: '#ffcc00',
    color: 'white',
    backgroundColor: '#ffcc00'
      }}
>
Register Now

</a>
</Link>


      </div>
      </div>
    </div>
  </div>
</div>
</section>

        </div>
        {/* <Datascience/> */}
      </section>
      {/* <section className="blog-details-area py-130 rpy-100">
        <div className="container">
          <div className="row">
                        <div className="blog-details-wrap"> */}

            <div className=" ml-10 col-lg-12 col-xs-2 col-sm-2">
              <Datascience/>
              </div>

              {/* </div>

</div>
</div>
</section> */}
 </section>
    </Layout>
  );
};
// export default bootcampPage;
