import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import bootcamps from './bootcampsData.json';
import Head from "next/head";
import Layout from "../../layout/Layout";
import Header from '../../components/header_intrim'
import Footer from '../../components/Footer_intrim'

const LandingPage = () => {
  const isMobileView = useMediaQuery({ query: '(max-width: 751px)' });

  const handleRegistrationClick = (bootcampId) => {
    window.location.href = `/bootcamp/${bootcampId}`;


  };
    const currentDate = new Date();
  const indiaTimeOffset = 330;

  const ongoingBootcamps = bootcamps.filter(
    (bootcamp) =>
      new Date(bootcamp.startTime) <= currentDate && new Date(bootcamp.endTime) >= currentDate
  );

  const upcomingBootcamps = bootcamps.filter((bootcamp) => new Date(bootcamp.startTime) > currentDate);

  const archivedBootcamps = bootcamps.filter((bootcamp) => new Date(bootcamp.endTime) < currentDate);

  const convertToLocalTime = (dateTime) => {
    const localTime = new Date(dateTime);
    const offsetMilliseconds = localTime.getTimezoneOffset() * 60 * 1000;
    const indiaLocalTime = new Date(
      localTime.getTime() + offsetMilliseconds + indiaTimeOffset * 60 * 1000
    );
    return indiaLocalTime.toLocaleString();
  };

  const [activeMenu, setActiveMenu] = useState('upcoming');

  const handleMenuChange = (menu) => {
    setActiveMenu(menu);
  };

  const filterMenuData = () => {
    switch (activeMenu) {
      case 'upcoming':
        return upcomingBootcamps;
      case 'ongoing':
        return ongoingBootcamps;
      case 'archived':
        return archivedBootcamps;
      default:
        return [];
    }
  };

  const isBootcampOngoing = ongoingBootcamps.length > 0; // Check if there are ongoing bootcamps
  // const isMobileView = window.innerWidth <= 751; // Check if the screen size is mobile (XS and SM)

  return (
    <Layout >
    <Head>
    
    <link rel="stylesheet" href="/images/css/bootstrap-4.5.3.min.css" />
    </Head>
    
                <Header/>
    
    <section className="hero-section-three bg-white relative rel z-1 pt-2 rpt-150">
    {/* <div className="container for-circle rpt-5"> */}
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-7 col-md-8">
          <div className="section-title text-center mb-5">
            <h2>Events on Capabl</h2>
          </div>
        </div>
      </div>
      {/* </div> */}

    <div>

<div className="relative flex items-center justify-center">
        {/* Menu buttons */}
        {isMobileView ? (
          <div className="mx-4 inline-flex p-1 bg-white rounded-xl shadow-2xl hover:shadow-2xl focus:shadow-2xl shadow-black">
            <button
              className={`${activeMenu === 'upcoming' ? 'bg-capabl_primary' : 'bg-white'} px-6 py-4 rounded-xl text-gray-900 font-large text-xs font-bold flex-wrap leading-tight uppercase transition duration-150 ease-in-out ${
                activeMenu === 'upcoming' ? '' : 'disabled'
              }`}
              onClick={() => handleMenuChange('upcoming')}
              disabled={activeMenu === 'upcoming'}
            >
              Upcoming
            </button>
            <button
              className={`${activeMenu === 'ongoing' ? 'bg-capabl_primary' : 'bg-white'} px-6 py-4 rounded-xl text-gray-900 font-large text-xs font-bold flex-wrap leading-tight uppercase transition duration-150 ease-in-out ${
                activeMenu === 'ongoing' ? '' : 'disabled'
              }`}
              onClick={() => handleMenuChange('ongoing')}
              disabled={activeMenu === 'ongoing'}
            >
              Ongoing
              {isBootcampOngoing && (
                <span className="absolute top-8  h-3 w-3 bg-red-500 rounded-full animate-ping"></span>
              )}
            </button>
            <button
              className={`${activeMenu === 'archived' ? 'bg-capabl_primary' : 'bg-white'} px-6 py-4 rounded-xl text-gray-900 font-large text-xs font-bold  leading-tight uppercase transition duration-150 ease-in-out ${
                activeMenu === 'archived' ? '' : 'disabled'
              }`}
              onClick={() => handleMenuChange('archived')}
              disabled={activeMenu === 'archived'}
            >
              Archived
            </button>
          </div>
        ) : (
          <div
            className="mx-4 flex-wrap inline-flex p-1 bg-white rounded-xl shadow-2xl hover:shadow-2xl focus:shadow-2xl shadow-black"
            style={{ width: '150%', justifyContent: 'center' }}
          >
            <button
              className={`${activeMenu === 'upcoming' ? 'bg-capabl_primary' : 'bg-white'} px-6 py-4 rounded-xl text-gray-900 font-large md:font-xs text-lg font-bold mr-20 flex-wrap leading-tight uppercase transition duration-150 ease-in-out ${
                activeMenu === 'upcoming' ? '' : 'disabled'
              }`}
              onClick={() => handleMenuChange('upcoming')}
              disabled={activeMenu === 'upcoming'}
            >
              Upcoming
            </button>
            <button
              className={`${activeMenu === 'ongoing' ? 'bg-capabl_primary' : 'bg-white'} px-6 py-4 rounded-xl text-gray-900 font-large text-lg font-bold flex-wrap mr-17 leading-tight uppercase transition duration-150 ease-in-out ${
                activeMenu === 'ongoing' ? '' : 'disabled'
              }`}
              onClick={() => handleMenuChange('ongoing')}
              disabled={activeMenu === 'ongoing'}
            >
              Ongoing
              {isBootcampOngoing && (
                <span className="absolute top-8  h-3 w-3 bg-red-500 rounded-full animate-ping"></span>
              )}
            </button>
            <button
              className={`${activeMenu === 'archived' ? 'bg-capabl_primary' : 'bg-white'} px-6 py-4 rounded-xl text-gray-900 font-large text-lg font-bold ml-20 leading-tight uppercase transition duration-150 ease-in-out ${
                activeMenu === 'archived' ? '' : 'disabled'
              }`}
              onClick={() => handleMenuChange('archived')}
              disabled={activeMenu === 'archived'}
            >
              Previous
            </button>
          </div>
        )}

        {/* ... */}
      </div>
      <div className="container">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 mt-5  align-item justify-center"
          style={{ width: '110%' }}
        >
          {!!filterMenuData().length &&
            filterMenuData().map((bootcamp, index) => (
              <div key={index} className="rounded-lg mt-3 shadow-xs bg-white">
                {/* Card content */}
                <div
                  className="card"
                  style={{
                    // objectFit: 'contain',
                    width: '80%',
                    height: '100%',
                    boxShadow: '10px 0 33px rgba(0, 0, 0, 0.3)',
                    borderRadius: '10px',
                  }}
                >
                  <img src={bootcamp.image} alt="" className="card-img-top" style={{ height: '50%', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h4 style={{ fontSize: '23px' }}>{bootcamp.Title}</h4>
                    <ul className="coach-footer">
                      <li>
                        <span>
                          STARTS Time: {bootcamp.startTime} <br />
                          ENDS Time: {bootcamp.endTime}
                        </span>
                      </li>
                    </ul>
                    {activeMenu !== 'archived' ? (
  <Link href={`/bootcamp/${bootcamp.id}`}>
    <button
      style={{
        boxShadow: "0px 9px 15px rgba(255, 190, 49, 0.6)",
      }}
      className="relative z-10 font-bold text-xs text-[#272727] rounded-lg py-3 px-12 bg-capabl_primary hover_animation"
      onClick={() => handleRegistrationClick(bootcamp.id)}
    >
      Register Now
    </button>
  </Link>
                    ) : (
                      <Link href={`/bootcamp/${bootcamp.id}`}>
                      <button
                          style={{
                            boxShadow: '0px 9px 15px rgba(255, 190, 49, 0.6)',
                          }}
                          className="relative z-10 font-bold text-xs text-[#272727] rounded-lg py-2 px-5 bg-capabl_primary hover_animation"

                       >
                          View
                        </button>
                      </Link>
)}

                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
    </section>
    <div className='mt-10'>
    <Footer/>
    </div>
    </Layout>
  );
};

export default LandingPage;