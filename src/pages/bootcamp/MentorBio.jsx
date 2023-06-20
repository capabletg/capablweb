import React from 'react';
import Link from 'next/link';

const data = [
  {
    "Title": "Full Stack Bootcamp",
    "Sub-Title": "For Fresher",
    "Mentor Name": "Shiva",
    "Date": "27 May, Thursday",
    "Time": "2-3",
    "Zoho Form": "--",
    "Bootcamp heading": "About this Masterclass",
    "Bootcamp Overview": "Designing a responsive and seamless website might sound like an easy task, but it is not. With consumers navigating through websites on various devices, building a website that works on every screen and dimension is important and a must-know for every aspiring Front-end Developer.\n\n",
    "Bootcamp - What students will learn":
      "• Demystify infamous CSS topics like \n positioning, display, flexboxes etc. from scratch.",
    "Curriculum": "react js",
    "Prerequisites": "javascript"
  }
];

const BootcampPage = () => {
  const mentorName = data[0]["Mentor Name"];

  const getLinkedInId = (name) => {
    if (name === 'Shubham') {
      return 'https://www.linkedin.com/in/ramarao-rvv-remella-a8111629/';
    } else if (name === 'Shubh') {
      return 'https://www.linkedin.com/in/ramarao-rvv-remella-a8111629/';
    } else if (name === 'Shiva') {
      return 'https://www.linkedin.com/in/ramarao-rvv-remella-a8111629/';
    } else {
      return '';
    }
  };

  const getBio = (name) => {
    if (name === 'Shubham') {
      return `Designed & Developed IDE for Coding Minutes\nMicrosoft Specialist World Championship Bronze medalist\nInstructor & Software Developer at Scaler`;
    } else if (name === 'Shubh') {
      return `Design and develop Responsive Websites\nDemystify infamous CSS topics like positioning, display, flexboxes etc. from scratch`;
    } else if (name === 'Shiva') {
      return `Design and develop Responsive Websites\nDemystify infamous CSS topics like positioning, display, flexboxes etc. from scratch`;
    } else {
      return '';
    }
  };

  return (
    <div>
      {/* <h1>Bootcamp Mentor Bio</h1> */}
      <div className="member-description">
        <span className="sub-title-three ml-4 mt-20">
          Meet {mentorName}{' '}
          <Link href={getLinkedInId(mentorName)}>
            <a className="team fs-10 ml-0 blue">
              (LinkedIn)
            </a>
          </Link>
        </span>
      </div>
      <div className="about-three-text wow fadeInRight delay-0-2s">
        <p>{getBio(mentorName)}</p>
      </div>
    </div>
  );
};

export default BootcampPage;
