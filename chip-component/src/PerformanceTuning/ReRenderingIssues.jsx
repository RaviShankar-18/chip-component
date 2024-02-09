import React, { useEffect, useState } from "react";

const ReRenderingIssues = () => {
  const [numbers, setNumbers] = useState([1, 1, 2, 3, 2, 1, 1, 5, 4, 6, 5]);
  const [frequency, setFrequency] = useState(0);
  const [counter, setCounter] = useState(0);
  console.log("Hi from rendering logic");

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === counter) {
        count += 1;
      }
      setFrequency(count);
    }
  }, [counter, numbers]);
  return (
    <React.Fragment>
      <button
        onClick={() => {
          setCounter((prevState) => prevState + 1);
        }}
      >
        {counter}
      </button>
      <button>Frequency</button>
      <button>{frequency}</button>
    </React.Fragment>
  );
};

export default ReRenderingIssues;
