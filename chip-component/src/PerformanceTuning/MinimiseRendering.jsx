import React, { useMemo, useState } from "react";
const numbers = [1, 2, 1, 1, 1, 3, 4];
const MinimiseRendering = () => {
  // const [numbers, setNumbers] = useState([1, 2, 1, 1, 1, 3, 4]);
  const [number, setNumber] = useState(null);

  const frequency = useMemo(() => {
    if (number === null || number === "") return 0;
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] == number) count += 1;
    }
    return count;
  }, [number]);

  console.log("Re-Rendering", number, frequency);

  return (
    <>
      <input type="text" onChange={(event) => setNumber(event.target.value)} />
      <button>{frequency}</button>
    </>
  );
};

export default MinimiseRendering;
