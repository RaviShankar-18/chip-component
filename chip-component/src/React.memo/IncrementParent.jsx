import React, { useState } from "react";
import WelcomeChild from "./WelcomeChild";

function ReactMemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount((previous) => previous + 1);
        }}
      >
        {count}
      </button>
      <WelcomeChild />
      {/* <WelcomeChild />
      <WelcomeChild />
      <WelcomeChild />
      <WelcomeChild /> */}
    </div>
  );
}

export default ReactMemo;
