import React, { useEffect, useState } from "react";

const Increment = () => {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);
  console.log("rendering from ui logic");
  // for (let i = 1; i <= 10; i++) {
  //   console.log("rendering from loop " + i);
  // }
  useEffect(() => {
    // console.log("useEffect runs");
    let mySum = 0;
    for (let i = 1; i <= count; i++) {
      // console.log("rendering from loop " + i);
      mySum += i;
    }
    setSum(mySum);
  }, [count]);
  return (
    <>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        count {count}
      </button>
      <div>count sum:{sum}</div>
    </>
  );
};

export default Increment;
