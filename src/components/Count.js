import React, { useState } from "react";
import CountUp from "react-countup";

const Counter = ({ end, decimals }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <CountUp
        end={end}
        decimals={decimals}
        ref={(ref) => {
          setCount(ref.current.value);
        }}
      />
    </div>
  );
};

export default Counter;
