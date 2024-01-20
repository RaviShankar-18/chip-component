import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [skills, setSkills] = useState([
    { id: 1, skill: "HTML5" },
    { id: 2, skill: "CSS3" },
    { id: 3, skill: "javaScript" },
    { id: 4, skill: "React.js" },
    { id: 5, skill: "Next.js" },
  ]);
  const [selectedData, setSelectedData] = useState([]);
  const [showSkills, setShowSkills] = useState(false);
  // const [selectedItem, setSelectedItem] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnFocus = () => {
    if (!showSkills) {
      setShowSkills(true);
    }
  };

  // const handleOnBlur = () => {
  //   setShowSkills(false);
  // };

  const selectOnClick = (id) => {
    const itemToMove = skills.find((item) => item.id === id);
    // setSelectedItem((prevState) => {
    //   [...prevState, itemToMove];
    // });

    const updatedOriginalData = skills.filter((item) => item.id !== id);
    setSkills(updatedOriginalData);

    setSelectedData((prevFilteredData) => [...prevFilteredData, itemToMove]);
  };

  useEffect(() => {
    // Filter data based on the search term
    const filteredResults = skills.filter((item) =>
      item.skill.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update filteredData
    setSelectedData(filteredResults);
  }, [searchTerm, skills]);

  const handleUserInput = (event) => {
    const { name, type, value } = event.target;
    setSearchTerm(value);
  };
  console.log(skills);
  console.log(selectedData);

  return (
    <>
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={handleUserInput}
        style={{
          border: "none",
          borderBottom: "1px",
          outline: "none",
          width: "600px",
        }}
        onFocus={handleOnFocus}
        // onBlur={handleOnBlur}
      />

      {showSkills &&
        skills.map((skill) => {
          return (
            <ul key={skill.id}>
              <button
                key={skill.id}
                style={{ listStyleType: "none" }}
                onClick={() => selectOnClick(skill.id)}
              >
                {skill.skill}
              </button>
            </ul>
          );
        })}

      {/* <h2>Filtered Data</h2>
      {selectedData.map((item) => (
        <ul key={item.id}>
          <li key={item.id}>{item.skill}</li>
        </ul>
      ))} */}
    </>
  );
}

export default App;
