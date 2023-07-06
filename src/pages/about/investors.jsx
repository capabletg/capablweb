import React from 'react';

const Team = () => {
  // JSON data for team members
  const teamMembers = [
    {
      name: 'Vasant Sridhar',
      designation: "Co-Founder & CSO of Business",
      image: '/images/teams/inv-11.png',
    },
    {
      name: 'Bhavesh Singhal',
      designation: 'CFO, MyGlamm EX CRO, Myntra',
      image: '/images/teams/inv-2.jpeg',
    },
    {
        name: 'Ronak Kumar',
        designation: "India's Leading Edtech Accelerator",
        image: '/images/teams/inv-3.jpeg',
      },
      {
        name: 'Vitor Senapaty',
        designation: "Co Founder of Propelld",
        image:'/images/teams/inv-4.jpeg',
      },
      {
        name: 'Ajay Prabhu',
        designation: "President, Technology Services",
        image: '/images/teams/inv-5.jpeg',
      },
      {
        name: 'Nitesh Ranvah',
        designation: "CEO, 21- Knots & Design Consultancy",
        image: '/images/teams/inv.jpeg',
      },
      {
        name: 'Ranga Swami Reddy',
        designation: "Head of Technical Services, Sterling Technical",
        image: '/images/teams/inv-7.jpeg',
      },
      {
        name: 'Sudhir Goenka',
        designation: "Senior Vice President, Olam International",
        image: '/images/teams/inv-8.jpeg',
      },
      {
        name: 'Uincept',
        designation: "India's Leading Edtech Accelerator",
        image: '/images/teams/inv-13.png',
      },
      {
        name: 'Breathe Capital',
        designation: "India & South East Asia's investment firm",
        image: '/images/teams/Breathe Capital.jpg',
      },
      {
        name: 'Ramaravo RVV',
        designation: "Founder & Chairman R & R Associates",
        image: '/images/teams/Ramarao1.png',
      },
      {
        name: 'Gurava Murari',
        designation: "Principal Product Manager, Oracle",
        image: '/images/teams/inv-12.png',
      },
                    
  ];

  return (
    <div className="row justify-content-center">
      {teamMembers.map((member, index) => (
        <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
          <div className="team-member-two wow fadeInUp delay-0-2s">
            <div className="image">
              <img src={member.image} alt="Team Member" />
            </div>
            <div className="member-description">
              <h4>{member.name}</h4>
              <span>{member.designation}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
