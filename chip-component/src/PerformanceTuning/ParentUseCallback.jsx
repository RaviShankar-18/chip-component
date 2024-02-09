import React, { useCallback, useState } from "react";
import Child from "./Child";

const UseCallback = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const updateCounter1 = useCallback(() => {
    setCounter1((prevState) => prevState + 1);
  }, []);

  console.log("Parent Re-Render:", counter1, counter2);
  return (
    <div>
      <h1>
        {counter1} - {counter2}
      </h1>
      <button onClick={() => setCounter1(counter1 + 1)}>Increment</button>
      <button onClick={() => setCounter2(counter2 + 1)}> Increment</button>

      <Child count={counter1} onClick={updateCounter1} />
    </div>
  );
};

export default UseCallback;
