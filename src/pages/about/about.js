import Head from 'next/head';
import Link from "next/link";
//import Slider from "react-slick";
//import Counter from "../../components/Counter";
import Layout from "../../layout/Layout";
import Investors from "./investors";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {

  return (
    <Layout>

      <Head>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Head>


      <div className="team1">
      <img src="/images/about2.jpg"/>
</div>
      <section className="about-page-section pt-120 rpt-90"
      >

          <div className="container"
>
          <div className="row align-items-center large-gap">
            <div className="col-lg-5 col-xs-3">
              <div className="about-page-content wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title-two">Capabl is of Engineers, by Engineers & for Engineers.</span>
                </div>
                <p>
                Our team at Capabl is on a mission to create a world-class engineering learning ecosystem with Students, Industry, and Colleges considering the limitations and the complex Indian engineering education system. And this innovative ecosystem goes hand in hand with the current college education system - elevating it rather than challenging it.                </p>
                <b>
                Mayank Arora<span>, Founder & CEO of Capabl</span>    
                            </b>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-page-middle rpt-55 rpb-30 wow fadeInRight delay-0-2s">

                <img src="/images/about/about1.png" alt="About" />
              </div>
            </div>
            <div className="col-lg-1 col-xs-1 col-sm-2">
        <div className="counter-wrap style-two wow fadeInRight delay-0-4s">
{/* <div className="success-item">
  <span
    className="count-text plus"
    data-speed={1000}
    data-stop="11.5"
  >
    <Counter end={1.5} decimals={1} />
    &nbsp;Lacs
  </span>
  <span>Students</span>
</div>

<div className="success-item">
  <span
    className="count-text plus"
    data-speed={1000}
    data-stop="800"
  >
    <Counter end={100} decimals={0} />
  </span>
  <span>Colleges</span>
</div>

<div className="success-item">
  <span
    className="count-text plus"
    data-speed={1000}
    data-stop="350"
  >
    <Counter end={350} />
  </span>
  <span>Hiring Partners</span>
</div>

<div className="success-item">
  <span
    className="count-text plus"
    data-speed={1000}
    data-stop="83"
  >
    <Counter end={83} />
  </span>
  <span>Experts</span>
</div> */}
        </div>
      </div>
          </div>
        </div>
      </section>
      {/* About section end <Work/> */}
      {/* Timeline section start */}
      <div className="section-title text-center mt-20 mb-55">
            <h2>Our Journey</h2>
          </div>
      <div className="timeline mt-100 mb-100">
      <VerticalTimeline lineColor={ '#ffcc00' }>
                          <VerticalTimelineElement
                   className="vertical-timeline-element--work #ffcc00" 
                   contentStyle={{ background: 'whitesmoke', color: 'gray', boxShadow:'none' }}
                   contentArrowStyle={{ borderRight: '7px solid  black' }}
                   date="2014"
                   iconStyle={{ background: '#ffcc00', color: '#fff', boxShadow:'none' }}
                  >
                     <h3 className="vertical-timeline-element-title black" style={{color: 'black', fontSize: '24px', fontWeight: '700'}}>Training by Capabl (Then ETG) Launched</h3>
                   <p className="color white">
                     Capabl Engagged with more than 400 engineering college sessions to 1.5 Lakh students throughout INDIA, UAE, South Africa,and Malaysia to inform them about the Industrial trend and Opportunities and how they can be Industry Favorite Engineers. (2014-Present)      
                             </p>
                   </VerticalTimelineElement>
                       <VerticalTimelineElement
                       className="vertical-timeline-element--work"
                      contentStyle={{ background: 'whitesmoke', color: 'gray', boxShadow: 'none' }}
                          contentArrowStyle={{ borderRight: '7px solid  black' }}
                           date="2015"
                         iconStyle={{ background: '#ffcc00', color: '#fff', boxShadow: 'none' }}
                      //  icon={<WorkIcon />}
                     >
                      <h3 className="vertical-timeline-element-title" style={{color: 'black', fontSize: '24px', fontWeight: '700'}}>Racing Events by Capabl</h3>
                        <p>
                    Elite Techno Groups organized Go Kart Racing Competitioin - Elite Kart Racing where more than 100+ colleges from all over India participated    </p>
                       </VerticalTimelineElement>
                      <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                       contentStyle={{ background: 'whitesmoke', color: 'gray', boxShadow: 'none' }}
                      contentArrowStyle={{ borderRight: '7px solid  black' }}
                    date="2016"
                    iconStyle={{ background: '#ffcc00', color: '#fff', boxShadow: 'none' }}
                      //  icon={<WorkIcon />}
                       >
                <h3 className="vertical-timeline-element-title" style={{color: 'black', fontSize: '24px', fontWeight: '700'}}>Industrial Production - Product to Indian Army</h3>
                  <p>
                 Capabl Became a part of development of over 20 all-terrain vehicles, which were delivered to the Indian Army for border patrolling and supplementing in difficult terrains, Kari motorsports, and many other racetracks and rally drivers in India. (2016-2018)          
               </p>
                 </VerticalTimelineElement>
                  <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                contentStyle={{ background: 'whitesmoke', color: 'gray', boxShadow: 'none' }}
                  contentArrowStyle={{ borderRight: '7px solid  black' }}
               date="2017"
                    iconStyle={{ background: '#ffcc00', color: '#fff', boxShadow: 'none'}}
              //  icon={<WorkIcon />}
                   >
                     <h3 className="vertical-timeline-element-title" style={{color: 'black', fontSize: '24px', fontWeight: '700'}}>1 Lakh Student Mileston Reached</h3>
                     {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
                     <p>
                  Capabl touched a milestone of having 1 Lakh + students counselled   
               </p>
                  </VerticalTimelineElement>
              <VerticalTimelineElement
              className="vertical-timeline-element--education"
                 contentStyle={{ background: 'whitesmoke', color: 'gray', boxShadow: 'none' }}
             contentArrowStyle={{ borderRight: '7px solid  black' }}
                  date="2019"
                   iconStyle={{ background: '#ffcc00', color: '#fff', boxShadow: 'none'}}
                      //  icon={<SchoolIcon />}
                >
               <h3 className="vertical-timeline-element-title"  style={{color: 'black', fontSize: '24px', fontWeight: '700'}}>Corporate Design Counsulting</h3>
                 <p>
                Capabl was also associated with YULU electric bike – India’s Biggest ride sharingcompany having 18,000 vehicles used by 2.5 million users in India 
                 </p>
            </VerticalTimelineElement>
              <VerticalTimelineElement
             className="vertical-timeline-element--education"
              contentStyle={{ background: 'whitesmoke', color: 'gray', boxShadow:'none' }}
                   contentArrowStyle={{ borderRight: '7px solid  black' }}
                 date="2020"
                iconStyle={{ background: '#ffcc00', color: '#fff', boxShadow: 'none' }}
                  //  icon={<SchoolIcon />}
                     >
               <h3 className="vertical-timeline-element-title"style={{color: 'black', fontSize: '24px', fontWeight: '700'}}>Offline to Online Migration</h3>
               <p>
                   Capabl Launched Online Courses in Top 4 Domains
                 </p>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
               className="vertical-timeline-element--education"
               contentStyle={{ background: 'whitesmoke', color: 'gray', boxShadow: 'none' }}
                        contentArrowStyle={{ borderRight: '7px solid  black' }}
               date="2022"
            iconStyle={{ background: '#ffcc00', color: '#fff', boxShadow: 'none' }}
           //  icon={<SchoolIcon />}
            >
               <h3 className="vertical-timeline-element-title"style={{color: 'black', fontSize: '24px', fontWeight: '700'}}>Capabl is Born, Job Oriented Programs Launched</h3>
                       <p>
                       Rebranded as capabl, 
     Raised Funding With AIC
       Initiative Building an 
          Engineering Ecosystem
                      </p>
                    </VerticalTimelineElement>
             </VerticalTimeline>

      </div>
      {/* Timeline section End */}
      {/*Maker section start */}
      <div className="section-title text-center mt-20 mb-55">
            <h2>Meet the Change Maker</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="gallery-item wow fadeInUp delay-0-2s">

              <div className="team-member-two wow fadeInUp delay-0-2s">

                <div className="image">

                  <img src="/images/teams/Mayank-Sir1.jpeg" alt="Team Member" />
                </div>
                <div className="gallery-content">
                <Link href="https://www.linkedin.com/in/mayank-arora-etg/">

                <h4>Mayank Arora</h4>
                </Link>
                  <Link href="https://www.linkedin.com/in/mayank-arora-etg/">
                  <span >CEO and Founder
                    </span>

                  </Link>
              </div>
              </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="gallery-item wow fadeInUp delay-0-2s">
              <div className="team-member-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="/images/teams/Umang-Sir.jpeg" alt="Team Member" />

                </div>
                <div className="gallery-content">
                <Link href="https://www.linkedin.com/in/umang-surana-75666828/">

                <h4>Umang Surana</h4>
                </Link>
                  <Link href="https://www.linkedin.com/in/umang-surana-75666828/">
                  <span>Co-Founder
                  </span>
                  </Link>
                </div>

              </div>
            </div>
</div>
            </div>

      <section className="features-section-three ">
        <div className="container">
          <div className="section-title text-center mt-10 mb-55">
            <h2>Our Values</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-2s">
                <div className="icon ">
                  {/* <i className="flaticon-reading-book" /> */}
                  <img src="/images/features/Aim Big.png" alt="Icon" />

                </div>
                <h4 className='text2'>Aim Big,<br/> Build in Parts</h4>
                <p>
                 Dream ambitiously and achieve through incremental progress.
                </p>               
                             </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <img src="/images/features/Own it.png" alt="Icon" />
                </div>
                <h4 className='text2'> Own <br/> it!</h4>
                <p>
                 Take charge, excel, and create your own success story.

</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <img src="/images/features/Grow together.png" alt="Icon" />
                </div>
                <h4 className='text2'>Grow <br/>Together</h4>
                <p>
                Fosters collaboration and shared learning for collective growth.
</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-8s">
                <div className="icon">
                  <img src="/images/features/Communicate.png" alt="Icon" />
                </div>
                <h4 className='text2'>Inviting New <br/> Perspective</h4>
                <p>
                Ignites transformative growth through innovation and diverse viewpoints.
                
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-8s">
                <div className="icon">
                  <img src="/images/features/Respect.png" alt="Icon" />
                </div>
                <h4 className='text2'>Give Respect to:<br/> people, opinions</h4>
                <p>
                Respect People, Honor Opinions and foster a culture of understanding.
</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-8s">
                <div className="icon">
                  <img src="/images/features/get it done.png" alt="Icon" />
                </div>
                <h4 className='text2'>Crossing the <br/>Finish Line</h4>
                <p>
                Achieve goals, empower determination, conquer obstacles.


</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-8s">
                <div className="icon">
                  <img src="/images/features/Play to win.png" alt="Icon" />
                </div>
                <h4 className='text2'>Play to<br/>win</h4>
                <p>
                Embrace challenges, surpass limits, and achieve victory.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-8s">
                <div className="icon">
                  <img src="/images/features/judgement.png" alt="Icon" />
                </div>
                <h4 className='text2'>Invoke Your wise <br/>Insight</h4>
                <p>
                Forge a path to success through confident decision-making.
</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Features Section End */}
      <section className="blog-details-area py-130 rpy-100 ">
        <div className="container">
          <div className="row ml-0">

            <div className="col-lg-7 ">
              <div className="blog-details-wrap">
              {/* Capabl by Elite Techno Groups: Bridging the Academic-Industry Gap for Engineering Students in India */}
     
      <blockquote>
        <h3 className="blockquote-text1">Capabl by Elite Techno Groups: Bridging the Academic-Industry Gap for Engineering Students in India</h3>
      <span className="blockquote-text">
      Welcome to Capabl! We are the only engineering ecosystem tied up with SAEINDIA - have a mastery in automotive & EV along with providing Interdisciplinary,credit-based programs right in college, expert interactions and have an AI powered-internship & jobs platform. 

What distinguishes us is all our programs are by Industry Experts - giving real practical engineering. We are the only company that offers a placement as a service to companies to directly hire from our partnered 100+ colleges - taking placement drives digital. A real bridge and interface between industries and academics!
      {/* Welcome to Capabl! We are India's most reputable education platform, founded by a team of IIT graduates who understand the unique challenges faced by undergraduate engineers. Our top-notch, impactful, and industry-specific learning programs are designed to help students bridge the gap between their academic education and the skills demanded by the industry.<br/>
      At Capabl, we are engineers working for engineers. We understand the importance of staying up-to-date with the latest industry trends, and we're dedicated to helping our students develop the skills and knowledge necessary to succeed in today's competitive job market. Our team of experienced professionals has worked with leading companies like Yulu, Amazon, Ola, Sastra Robotics, and more. We bring this real-world experience to our teaching, ensuring that our students are well-equipped to tackle any challenge they may face in their careers.<br/>
      We are on a mission to create a world-class engineering learning ecosystem that brings together students, industry, and colleges to reduce the gap between academia and industry. Our innovative approach is designed to work hand in hand with the current college education system, elevating it rather than challenging it. We believe that by working together, we can create a brighter future for engineering students in India.<br/> */}
                  </span>
                </blockquote>
                </div>
                </div>
                <div className="col-lg-5 ">
              <div className="about-page-middle wow fadeInRight delay-0-2s">
                <img src="/images/media/session.jpg" alt="About" style={{width:'87%'}}/>
              </div>
            </div>

                </div>
                </div>
</section>

      {/* Advertise Area Start */}
      <section className="advertise-area ">
      <div className="section-title text-center mb-15">
                <h2>Companies that Hire from Us</h2>
              </div>

      <div className="image">
                  <img src="/images/4.png" alt="Team Member" />

        </div>
      </section>
      {/* Achievement Section Start */}
      <section className="about-page-section pt-120 rpt-90">

      <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center mb-55">
                <h2>Achievements</h2>
              </div>
            </div>
          </div>
</div>
          <div className="container">

          <div className="row align-items-center">
            <div className=" col-lg-5 ml-20 fs-30"> 
            <img src="/images/media/tedx.jpg" alt="About" style={{width: '60%'}}/>

            {/* TEDx Speaker */}
            </div>
            <div className="col-lg-5 ml-20 ">
              <div className="about-page-middle1 mb-20 wow fadeInRight delay-0-2s">
              Mayank Arora, an education entrepreneur, has observed a decline in trust in degrees and a decrease in enrollment in education. He attributes this to students and colleges not having a working understanding of the programs they are opting for.
              <Link href="https://youtu.be/pBB_ADKt0Uk">
              <a className="read-more1">(https://youtu.be/pBB_ADKt0Uk)
</a>
</Link>
              </div>
            </div>

          </div>
          {/* <div className="row align-items-center large-gap">
          <div className="col-lg-5 ml-20">
              <div className="about-page-middle1 wow fadeInRight delay-0-2s">
                <img src="/images/media/achievement2.png" alt="About" />
              </div>
            </div>

            <div className="col-lg-5 ml-20 mb-20"> INCUBATED BY NASSCOM 
(THE NATIONAL ASSOCIATION
 OF SOFTWARE AND SERVICE 
COMPANIES)
            </div>

          </div> */}

          <div className="row align-items-center large-gap">
            <div className="col-lg-5 ml-20 "> WINNER OF ALL INDIA EDTECH CHALLENGE
 2021-22 POWERED BY AMAZON WEB
 SERVICES, NITI AYOG GOVT. OF INDIA, 
AND ATAL
            </div>
            <div className="col-lg-5 ml-20">
              <div className="about-page-middle1 mb-20 wow fadeInRight delay-0-2s">
                <img src="/images/media/achievement1.png" alt="About" />
              </div>
            </div>

          </div>
          <div className="row align-items-center large-gap">
          <div className="col-lg-5 ml-20">
              <div className="about-page-middle1 wow fadeInRight delay-0-2s">
                <img src="/images/media/achievement2.png" alt="About" />
              </div>
            </div>

            <div className="col-lg-5 ml-20 mb-20"> INCUBATED BY NASSCOM 
(THE NATIONAL ASSOCIATION
 OF SOFTWARE AND SERVICE 
COMPANIES)
            </div>

          </div>
          <div className="row align-items-center large-gap">
            <div className="col-lg-5 ml-20"> RATED 4.8 ON GOOGLE & FACEBOOK BY 
STUDENTS
            </div>
            <div className="col-lg-5 ml-20">
              <div className="about-page-middle1 mb-20 wow fadeInRight delay-0-2s">
                <img src="/images/media/achievement3.png" alt="About" />
              </div>
            </div>

          </div>
          <div className="row align-items-center large-gap">
          <div className="col-lg-5 ml-20">
              <div className="about-page-middle1 mb-30  wow fadeInRight delay-0-2s">
                <img src="/images/media/achievement4.png" alt="About" />
              </div>
            </div>

            <div className="col-lg-5 ml-20 mb-20"> ACCREDITED BY INTERNATIONAL 
ORGANIZATION FOR STANDARDIZATION,
 USA & UK
            </div>

          </div>



          </div>
          {/* </div>
          </div> */}

</section>

            {/* Team Section Start */}
            <section className="team-setion-two bg-lighter rel z-1 pt-120 rpt-90 pb-70 rpb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-55">
                <h2 >Meet Our Investors</h2>
                <span>They Have believed in our Vision and are being part of our journey</span>
              </div>
            </div>
          </div>
          <Investors/>
                </div>

      </section>
                  {/* Media Section Start */}
                  <section className="blog-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center mt-20 mb-20">
                <h2>Covered in Media</h2>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-xl-3 col-lg-6 col-sm-6">
          <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="blog-image1">
                  
                  <img src="/images/media/media1.png" alt="Blog" />
                </div>
                {/* <div className="blog-content">
                  <div className="content">
                  <Link href="/media">
                      <a className="read-more">
                        Show more <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="blog-image1 ml-5 mt-7">
                  <img src="/images/media/media2.png" alt="Blog" />
                </div>
                {/* <div className="blog-content">
                  <div className="content">
                  <Link href="/media">
                      <a className="read-more">
                        Show more <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="blog-image ml-5">
                  <img src="/images/media/media3.png" alt="Blog" />
                </div>
                {/* <div className="blog-content">
                  <div className="content">
                  <Link href="/media">
                      <a className="read-more">
                        Show more <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="blog-image1 mr-4 mt-7">
                  <img src="/images/media/media4.png" alt="Blog" style={{width:'100%'}} />
                </div>
                <div className="blog-content">
                  <div className="content">
                  <Link href="/media">
                      <a className="read-more">
                        Show more <i className="" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

     
    </Layout>
  );
};
export default About;
