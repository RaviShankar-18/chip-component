import { useState } from "react";

const WithOutQueryParams = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [fontSize, setFontSize] = useState("");

  return (
    <div>
      <h1 style={{ color: color, fontSize: `${fontSize}px` }}>
        My name is {name}
      </h1>
      <input
        type="text"
        name=""
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name=""
        placeholder="Enter font size"
        onChange={(e) => setFontSize(e.target.value)}
      />
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="black">Select Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};

export default WithOutQueryParams;
