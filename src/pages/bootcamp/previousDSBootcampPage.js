import Link from "next/link";
import React from "react";
import Head from "next/head";
import Layout from "../../layout/Layout";
import  Datascience  from "../../components/courses/faqs_datascience";
import Header from '../../components/header_intrim'
import bootcampData from './bootcampsData.json'
import ReactPlayer from 'react-player'
import Footer from '../../components/footer_intrim'


const previousDSBootcampPage = () => {
  const specificData = bootcampData.find(item => item.Title === 'IoT using Node-MCU');

  const data = bootcampData[0];
  const mentorName = bootcampData[0]["Mentor Name"];

  const getLinkedInId = (name) => {
    if (name === 'Shubham') {
      return 'https://www.linkedin.com/in/ramarao-rvv-remella-a8111629/';
    } else if (name === 'Vaibhav') {
      return 'https://www.linkedin.com/in/ramarao-rvv-remella-a8111629/';
    } else if (name === 'Rishi') {
      return 'https://www.linkedin.com/in/ramarao-rvv-remella-a8111629/';
    } else if (name === 'Shashank') {
      return 'https://www.linkedin.com/in/ramarao-rvv-remella-a8111629/';
    } else if (name === 'Arbaz') {
      return 'https://www.linkedin.com/in/ramarao-rvv-remella-a8111629/';
 }     else if (name === 'Pritesh') {
  return 'https://www.linkedin.com/in/ramarao-rvv-remella-a8111629/';
     } else if (name === 'Siddhesh') {
  return 'https://www.linkedin.com/in/ramarao-rvv-remella-a8111629/';
} else if (name === 'Renjith') {
  return 'https://www.linkedin.com/in/ramarao-rvv-remella-a8111629/';
     } else if (name === 'Umang') {
      return 'https://www.linkedin.com/in/ramarao-rvv-remella-a8111629/';
    }
  else {
      return '';
    }
  };

  const getDesignation = (name) => {
    if (name === 'Shubham') {
      return 'Microsoft';
    } else if (name === 'Vaibhav') {
      return 'Capabl';
    } else if (name === 'Rishi') {
      return 'Microsoft';
    } else if (name === 'Shashank') {
      return 'Microsoft';
    } else if (name === 'Arbaz') {
      return 'Microsoft';
    } else if (name === 'Renjith') {
      return 'Microsoft';
    } else if (name === 'Pritesh') {
      return 'Microsoft';
    } else if (name === 'Siddhesh') {
      return 'Microsoft';
    } else if (name === 'Umang') {
      return 'Microsoft';

    } else {
      return '';
    }
  };


  const getBio = (name) => {
    if (name === 'Shubham') {
      return `Designed & Developed IDE for Coding Minutes\nMicrosoft Specialist World Championship Bronze medalist\nInstructor & Software Developer at Scaler`;
    } else if (name === 'Vaibhav') {
      return `Design and develop Responsive Websites\nDemystify infamous CSS topics like positioning, display, flexboxes etc. from scratch`;
    } else if (name === 'Rishi') {
      return `Design and develop Responsive Websites\nDemystify infamous CSS topics like positioning, display, flexboxes etc. from scratch`;
    } else if (name === 'Shashank') {
      return `Design and develop Responsive Websites\nDemystify infamous CSS topics like positioning, display, flexboxes etc. from scratch`;
    } else if (name === 'Arbaz') {
      return `Design and develop Responsive Websites\nDemystify infamous CSS topics like positioning, display, flexboxes etc. from scratch`;
    } else if (name === 'Umang') {
      return `Design and develop Responsive Websites\nDemystify infamous CSS topics like positioning, display, flexboxes etc. from scratch`;
    } else if (name === 'Pritesh') {
      return `Design and develop Responsive Websites\nDemystify infamous CSS topics like positioning, display, flexboxes etc. from scratch`;
    } else if (name === 'Siddhesh') {
      return `Design and develop Responsive Websites\nDemystify infamous CSS topics like positioning, display, flexboxes etc. from scratch`;
    } else if (name === 'Renjith') {
      return `Responsive Websites\nDemystify infamous CSS topics like positioning, display, flexboxes etc. from scratch`;

    } else {
      return '';
    }
  };

  const getImageUrl = (name) => {
    if (name === 'Shubham') {
      return '/images/teams/Shubham.png';
    } else if (name === 'Vaibhav') {
      return '/images/teams/Vaibhav.png';
    } else if (name === 'Rishi') {
      return '/images/teams/Rishi.png';
    } else if (name === 'Shashank') {
      return '/images/teams/Sashank.png';
    } else if (name === 'Arbaz') {
      return '/images/teams/Arbaz.png';
    } else if (name === 'Renjith') {
      return '/images/teams/Ranjit.png';
    } else if (name === 'Siddhesh') {
      return '/images/teams/Siddhesh.png';
    } else if (name === 'Pritesh') {
      return '/images/teams/Pritesh.png';
    } else if (name === 'Umang') {
      return '/images/teams/Arbaz.png';

    } else {
      return '';
    }
  };

    
  
  return (
    <Layout >

            <Head>

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossOrigin="anonymous"
/>
</Head>

      <Header/>

            <section className="hero-section-three bg-[#2c2c2c] relative rel z-1 pt-10 rpt-150">

        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-6 align-self-end">
              <div className="hero-three-image-part">
              <img src={getImageUrl(mentorName)} alt={mentorName} />

                <div className="hero-over-text">
                  <div className="about-image-over wow fadeInRight delay-0-2s">
                  </div>
                  <div className="about-image-over-item wow fadeInLeft delay-0-2s">
                    <h5 > by  {data['Mentor Name']} <br/><h6>{getDesignation(mentorName)}</h6></h5>
                    <br/>
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
                <h1 className="mb-25 wow fadeInUp text-white delay-0-4s">
                 {data.Title}
                </h1>
                <div className="hero-btns mt-10 wow fadeInUp delay-0-8s">
                    <a className="theme mt-1 fas fa-calendar" style={{color:'white'}}>
                    &nbsp;&nbsp; {data.Date}
                    </a>
                    <a className="theme style-two mt-1 fas fa-clock" style={{color:'white'}}>
                     &nbsp;&nbsp; Time:  {data.Time} pm
                    </a>

                </div>
                <div className="hero-btns mt-10 wow fadeInUp delay-0-8s">
                 
                </div>

              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
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
      {/* Feature Section Start */}
      <section className="freature-section-four rel z-1 pb-90 rpb-70">
        <div className="slider-counter text-white">
          <div className="row">
          </div>
        </div>

{/* <section className="ml-10"> */}
        <div className="container">
      <div className="row large-gap">
          <div className="about-three-content wow fadeInLeft delay-0-2s">
            <div className="section-title ">
              <span className="sub-title-three">
                {data['Bootcamp heading']}
              </span>
            </div>
          </div>
            <div className="about-three-text wow fadeInRight delay-0-2s">
            <div className="section-title mt-150">
                  <span className="sub-title-three">
                  About this Masterclass <span></span>
                  </span>
               <p style={{ fontSize: '17px', fontWeight: '500' }}>{data['Bootcamp Overview']}</p>
          </div>
        </div>
        <div className="col-lg-6 ml-20" style={{left: '50%', marginTop: '30px'}}>
        </div>

          <div className="row large-gap ">
              <div className="about-three-content wow fadeInLeft delay-0-2s " >
                <div className="section-title " >
                  <span className="sub-title-three ml-4 mt-20">
                  What you will gain from this Masterclass <span></span>
                  </span>
            </div>
              <div className="about-three-text wow fadeInRight delay-0-2s">
              <p className="about-three-text1 ml-10 font-sans" style={{ fontSize: '17px', fontWeight: '500' }}>
  {data['Bootcamp - What students will learn'].split('\n').map((item, index) => (
    <React.Fragment key={index}>
      {item.trim() && (
        <>
          <span style={{ marginRight: '5px' }}>•</span>
          {item.trim()}
          <br />
        </>
      )}
    </React.Fragment>
  ))}
</p>
              </div>
            </div>

            </div>

          <div className="row large-gap mb-60">
            <div className="col-lg-5" >
              <div className="about-three-content wow fadeInLeft delay-0-2s">
              <div className="member-description">
        <span className="sub-title-three ml-4 mt-20">
          Meet {mentorName}{' '}
          <Link href={getLinkedInId(mentorName)}>
            <a className="team fs-10 ml-0 blue">(LinkedIn)</a>
          </Link>
        </span>
      </div>
      <div className="about-three-text wow fadeInRight delay-0-2s ml-7">
  {getBio(mentorName).split('\n').map((line, index) => (
    <p key={index} style={{ fontSize: '17px', fontWeight: '500' }}>
            <span style={{ marginRight: '5px' }}>•</span>
      {line}
    </p>
  ))}
</div>
{/* <div className="mt-15">

<ReactPlayer url="https://www.youtube.com/watch?v=jYoZscnewvw&ab_channel=Capabl%28FromEliteTechnoGroups%29"
        width="551px"
        height="315px"

/>
      </div> */}

          </div>

              
              <div className="about-three-content wow fadeInLeft delay-0-2s mt-20">
                <div className="section-title ">
                  <span className="sub-title-three ml-4">
          This Masterclass is for
                  </span>

              </div>
            </div>
            </div>
              <div className="categories-wrap wow fadeInUp delay-0-4s">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xl-4 col-lg-4">
                    <div className="category-item  mt-35">
                      <div className="icon">
                        <img
                          src="/images/categories/1.png"
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
                          src="/images/categories/2.png"
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
                          src="/images/categories/3.png"
                          alt="Icon"
                        />
                      </div>
                      <span>                SDEs aiming to learn web design and create visually appealing web interfaces.

</span>
                    </div>
                   
                  </div>
                </div>


             
                <div className="about-three-content wow fadeInLeft delay-0-2s">
                <div className="section-title ">
                  <span className="sub-title-three align items-center mt-20 mb-100">
                  Our Successfull Alumini <span></span>
                  </span>

              </div>
            </div>

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
    <div className="actions">

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

    </div>
  </div>
</div>     
             </div>
            </div>
            </div>
            </div>
      {/* card section end */}
      <section className="team-section rel z-1 bg-[#14213D] text-white pb-100 rpb-70" style={{position:'relative', top: '100%'}}>
        <div className="container ">
          <div className="row justify-content-between">
            <div className="col-lg-12">
              <div className="team-content pt-120 rpt-90 mb-30 rmb-75 wow fadeInUp delay-0-2s">
                <div className="section-title mb-25">
                  <h2>
                    {"About  Capabl" }
              </h2>
                </div>
                <p>
                Capabl by Elite Techno Groups is an esteemed education platform
                 in India founded by IIT graduates. Their focus is on addressing 
                 the unique challenges faced by undergraduate engineers. They offer 
                 comprehensive learning programs that aim to bridge the gap between 
                 academic education and industry demands. Capabl is committed to 
                 keeping students updated with the latest industry trends and
                  equipping them with the skills needed in today&apos;s competitive job 
                  market. The team consists of experienced professionals who have
                   worked with renowned companies like Yulu, Amazon, Ola, and Sastra
                    Robotics. They bring their real-world experience into their 
                    teaching methods to ensure students are well-prepared for their 
                    careers. Capabl&apos;s vision is to create a world-class engineering 
                    learning ecosystem that fosters collaboration among students, 
                    industry, and colleges. They aim to reduce the divide between 
                    academia and the industry by complementing the existing college 
                    education system. Their ultimate goal is to create a brighter 
                    future for engineering students in India.

</p>
              </div>
            </div>
            
              </div>
            </div> 
        <span className="bg-text">Capabl</span>
      </section>
  
      </section>

      <section className="coach-section-two bg-light-two rel z-1 pt-185 rpt-150 pb-130 rpb-100">

                <div className="about-three-content wow fadeInLeft delay-0-2s">
                <div className="section-title">
  <div className="col-lg-11 col-xs-4 mb-4">
    <div className="d-flex align-items-center justify-content-between mb-2">
      <span className="sub-title-three">Upcoming Bootcamp</span>
      <Link href= "bootcampLandingPage"
      >
        <button
         type="submit"
        style={{
          boxShadow: '0px 9px 15px rgba(255, 190, 49, 0.6)',
        }}
        className="sub-title-three1 relative z-10 justify-center  font-medium text-lg text-[#272727] rounded-lg py-3 px-6 bg-capabl_primary hover_animation"
      >
        View Upcoming Bootcamps
        </button>
      </Link>
    </div>
  </div>
</div>

          <section id="gallery">
  <div className="container">
    <div className="row">
    <div className="col-lg-6 mb-4">
  <div className="card ml-4" style={{ width: '80%', height: '100%' }}>
      <img src="/images/categories/Design & CAE.png" alt="" className="card-img-top"/>
      <div className="card-body" >
      <h4 >
                  <Link href="full-stackBootcampPage">
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
                <Link href="full-stackBootcampPage">

                <a href="" 
                    style={{
                      boxShadow: "0px 9px 15px rgba(255, 190, 49, 0.6)",
                    }}
                    className="relative z-10 font-medium text-sm text-[#272727] rounded-lg py-2 px-6 bg-capabl_primary hover_animation"
                  >
Register Now

</a>
</Link>


      </div>
      </div>
    </div>
  {/* <div className="col-lg-6 mb-4">
  <div className="card ml-4" style={{ width: '80%', height: '100%' }}>
      <img src="/images/categories/Full Stack.png" alt="" className="card-img-top"/>
      <div className="card-body" >
      <h4 >
                  <Link href="full-stackBootcampPage">
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
                <Link href="full-stackBootcampPage">

                <a href="" 
                 style={{
  boxShadow: "0px 9px 15px rgba(255, 190, 49, 0.6)",
  marginTop: '2%'
                }}
  className="relative z-10 font-medium text-sm mt-5 text-[#272727] rounded-lg py-2 px-7 bg-capabl_primary hover_animation"        
>
Register Now

</a>
</Link>


      </div>
      </div>
    </div> */}
  </div>
</div>
</section>

        </div>
      </section>

<section className="hero-section-three bg-white relative rel justify-center z-1 pt-10 rpt-150">
  <div className="container mb-10">
              <Datascience/>
              </div>
              </section>
<Footer/>
    </Layout>
  );
};
export default previousDSBootcampPage;
