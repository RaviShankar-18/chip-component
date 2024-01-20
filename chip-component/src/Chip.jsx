import { useState, useEffect } from "react";
import "./App.css";

function Chip() {
  const [skills, setSkills] = useState([
    { id: 1, skill: "HTML5" },
    { id: 2, skill: "CSS3" },
    { id: 3, skill: "JavaScript" },
    { id: 4, skill: "React.js" },
    { id: 5, skill: "Next.js" },
  ]);

  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

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

  const handleListItemClick = (skill) => {
    // Move the selected skill from original to filtered data
    setSkills((prevSkills) =>
      prevSkills.filter((prevSkill) => prevSkill !== skill)
    );
    setSelectedSkills((prevSkills) => [skill, ...prevSkills]);

    // Empty the input field after adding a skill
    setSearchTerm("");
  };

  const handleDeleteClick = (skill) => {
    // Move the deleted skill from filtered back to original data
    setSkills((prevSkills) => [...prevSkills, skill]);
    setSelectedSkills((prevSkills) =>
      prevSkills.filter((prevSkill) => prevSkill !== skill)
    );
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", width: "600px" }}>
        <input
          type="text"
          name="search"
          value={searchTerm}
          onChange={handleUserInput}
          style={{
            border: "none",
            borderBottom: "1px solid",
            outline: "none",
            flex: 1,
          }}
        />

        {selectedSkills.map((selectedSkill, index) => (
          <span
            key={index}
            style={{
              margin: "0 5px",
              padding: "2px 5px",
              border: "1px solid",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => handleDeleteClick(selectedSkill)}
              style={{ marginRight: "5px" }}
            >
              X
            </button>
            {selectedSkill.skill}
          </span>
        ))}
      </div>

      {filteredData.map((skill) => (
        <ul key={skill.id}>
          <button
            key={skill.id}
            onClick={() => handleListItemClick(skill)}
            style={{ cursor: "pointer" }}
          >
            {skill.skill}
          </button>
        </ul>
      ))}
    </>
  );
}

export default Chip;
