import React from "react";
import { useState, useEffect } from "react";

function LiveSearch() {
  const [skills, setSkills] = useState([
    { id: 1, skill: "HTML5" },
    { id: 2, skill: "CSS3" },
    { id: 3, skill: "javaScript" },
    { id: 4, skill: "React.js" },
    { id: 5, skill: "Next.js" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Initial data when the component mounts
    setFilteredData(skills);
  }, [skills]);

  const searchAndUpdate = (searchTerm) => {
    const filteredResults = skills.filter((item) =>
      item.skill.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const handleUserInput = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Call the search function when the user types
    searchAndUpdate(value);
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={handleUserInput}
        style={{
          border: "none",
          borderBottom: "1px solid",
          outline: "none",
          width: "600px",
        }}
      />

      {filteredData.map((skill) => (
        <ul key={skill.id}>
          <button key={skill.id}>{skill.skill}</button>
        </ul>
      ))}
    </div>
  );
}

export default LiveSearch;
