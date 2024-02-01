import React, { useState } from "react";

function MyComponent() {
  const [skills, setSkills] = useState([
    { id: 1, skill: "HTML5" },
    { id: 2, skill: "CSS3" },
    { id: 3, skill: "JavaScript" },
    { id: 4, skill: "React.js" },
    { id: 5, skill: "Next.js" },
  ]);

  const [searchWord, setSearchWord] = useState("");
  const [showSkills, setShowSkills] = useState(false);
  const [selectedData, setSelectedData] = useState([]);

  const captureOnChangeInput = (event) => {
    const { value } = event.target;
    setSearchWord(value);
  };

  const filteredData = skills.filter((skill) =>
    skill.skill.toLowerCase().includes(searchWord.toLowerCase())
  );
  const onFocusShowSkills = () => {
    if (!showSkills) setShowSkills(true);
  };
  const onBlurHideSkills = () => {
    setTimeout(() => {
      setShowSkills(false);
    }, 1000);
  };

  const onClickSelect = (id) => {
    const foundData = skills.find((skill) => skill.id === id);
    const filteredData = skills.filter((skill) => skill.id !== id);
    setSkills(filteredData);
    setSelectedData((prevState) => [...prevState, foundData]);
    // console.log(skills);
    // console.log(selectedData);
    setSearchWord("");
  };
  console.log(skills);
  console.log(selectedData);

  const onClickAddInSkills = (id) => {
    const foundData = selectedData.find((skills) => skills.id === id);
    const filterSelectedData = selectedData.filter(
      (skills) => skills.id !== id
    );
    setSelectedData(filterSelectedData);
    setSkills((prevState) => [...prevState, foundData]);
  };

  return (
    <div>
      <div
        className="wrapper"
        style={{ width: "500px", borderBottom: "1px solid" }}
      >
        {selectedData.map((skills) => {
          return (
            <div key={skills.id}>
              <button key={skills.id}>{skills.skill}</button>
              <button onClick={() => onClickAddInSkills(skills.id)}>x</button>
            </div>
          );
        })}
        <input
          style={{ border: "none", outline: "none" }}
          type="text"
          name="search"
          value={searchWord}
          onChange={captureOnChangeInput}
          onFocus={onFocusShowSkills}
          onBlur={onBlurHideSkills}
        />
      </div>

      {showSkills &&
        filteredData.map((skill) => (
          <ul key={skill.id}>
            <button onClick={() => onClickSelect(skill.id)}>
              {skill.skill}
            </button>
          </ul>
        ))}
    </div>
  );
}

export default MyComponent;
