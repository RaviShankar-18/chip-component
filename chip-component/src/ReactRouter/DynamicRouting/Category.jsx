import React from "react";
import phonesDB from "./PhoneDB";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <h1> iPhones </h1>
      <ul>
        {phonesDB.data.map(({ id, name, price, memory, currency }) => (
          <li
            key={id}
            style={{
              padding: "1rem",
              listStyle: "none",
              margin: "1rem",
              border: "1px solid #efefef",
            }}
          >
            <div style={{ fontSize: "large" }}>
              {name} {memory} GB
            </div>
            <div>
              Price: {price} {currency}
            </div>
            <Link to={`/productDetails/${id}`}> View Details </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Category;
