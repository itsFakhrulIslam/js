import { useEffect } from "react";

const UseEff = () => {
  useEffect(() => {
    console.log("hello use effect");

    const setIntervals = setInterval(() => {
      console.log("HELLO");
    }, 1000);

    return () => clearInterval(setIntervals);
  }, []);

  return (
    <div>
      <h1>use effect runner page</h1>
    </div>
  );
};

export default UseEff;
