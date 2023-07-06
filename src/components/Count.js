

import React from "react";
// import Counter from "react-countup";

const count = () => {

  return (
    <div > 
 <div className="success-item">
  <span
    className="count-text plus"
    data-speed={1000}
    data-stop="11.5"
  >
    {/* <Counter {...props} /> */}
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
    {/* <Counter {...props} /> */}
  </span>
  <span>Colleges</span>
</div>

<div className="success-item">
  <span
    className="count-text plus"
    data-speed={1000}
    data-stop="350"
  >
    {/* <Counter {...props} /> */}
  </span>
  <span>Hiring Partners</span>
</div>

<div className="success-item">
  <span
    className="count-text plus"
    data-speed={1000}
    data-stop="83"
  >
    {/* <Counter {...props} /> */}
  </span>
  <span>Experts</span>
</div>
</div>
);
};

export default count;
