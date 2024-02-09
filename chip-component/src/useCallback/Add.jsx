import React, { useCallback, useState } from "react";
import ChildAdd from "./ChildAdd";

const Add = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const learning = useCallback(() => {}, []);
  return (
    <>
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <ChildAdd learning={learning} count={count} />
      <button onClick={() => setCount(count + 1)}>count</button>
    </>
  );
};

export default Add;
