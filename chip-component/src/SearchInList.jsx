import React, { useState } from "react";

function SearchInList() {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Grapes" },
    { id: 5, name: "Mango" },
  ]);
  const [showFruits, setShowFruits] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const searchedFruits = fruits.filter((fruits) =>
    fruits.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  console.log("Search Fruits", searchedFruits);

  const onFocusShowFruits = () => {
    if (!showFruits) {
      setShowFruits(true);
    }
  };
  const onBlurHideFruits = () => {
    setShowFruits(false);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          name="userInput"
          value={searchInput}
          onChange={handleOnChange}
          onFocus={onFocusShowFruits}
          onBlur={onBlurHideFruits}
        />
      </div>

      {showFruits &&
        searchedFruits.map((fruits) => {
          return (
            <div key={fruits.id}>
              <button key={fruits.id}>{fruits.name}</button>
            </div>
          );
        })}
    </div>
  );
}

export default SearchInList;
