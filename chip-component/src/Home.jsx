import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setApiData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log("ApiData", apiData);
  }, [apiData]);
  return (
    <>
      <div>Welcome to Home Page!</div>
      <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact</Link>
    </>
  );
}

export default Home;
