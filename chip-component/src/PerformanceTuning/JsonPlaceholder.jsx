import React, { useEffect, useState } from "react";
import axios from "axios";

const JsonPlaceholder = () => {
  const [apiData, setApiData] = useState(null);
  const [username, setUsername] = useState([]);
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        const userName = response.data.map((user) => user.username);
        setUsername(userName);
        setApiData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const filteredUsernames = username.filter((user) =>
      user.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCount(filteredUsernames.length); // Update count based on filtered results
  }, [username, searchTerm]);

  const onChangeSearch = (search) => {
    setSearchTerm(search);
  };

  console.log("apiData", apiData);
  console.log("userName", username);

  return (
    <>
      <input
        type="text"
        placeholder="search for people"
        onChange={(event) => onChangeSearch(event.target.value)}
      />
      <span>{count} matches found</span>
      <ul>
        {username
          .filter((name) =>
            name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((name, index) => (
            <li key={index}>{name}</li>
          ))}
      </ul>
    </>
  );
};

export default JsonPlaceholder;
