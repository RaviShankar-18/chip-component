import { useSearchParams } from "react-router-dom";

const WithQueryParams = () => {
  const [queryParams, setQueryParams] = useSearchParams();

  // ?name=sakshi&color=red&fontSize=10
  const name = queryParams.get("name") || "";
  const color = queryParams.get("color") || "";
  const fontSize = queryParams.get("fontSize") || "";

  const onInputChange = (e) => {
    const { name: keyName, value } = e.target;
    setQueryParams((prevParams) => ({
      ...Object.fromEntries(prevParams),
      [keyName]: value,
    }));
  };

  return (
    <div>
      <h1 style={{ color: color, fontSize: `${fontSize}px` }}>
        My name is {name}
      </h1>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Enter name"
        onChange={onInputChange}
      />
      <input
        type="number"
        name="fontSize"
        value={fontSize}
        placeholder="Enter font size"
        onChange={onInputChange}
      />
      <select onChange={onInputChange} name="color" value={color}>
        <option value="black">Select Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};

export default WithQueryParams;
