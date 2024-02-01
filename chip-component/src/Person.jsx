import React, { useCallback, useEffect, useState } from "react";
const Person = () => {
  const [persons, setpersons] = useState([]);
  const [onclickinput, setonclickinput] = useState(false);
  const [oninput, setoninput] = useState("");
  const [addtolist, setaddtolist] = useState([]);
  const [SearchList, SetSearchList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        console.log("main data", data);
        setpersons(data);
      })
      .catch((err) => {
        console.log(" eror ", err);
      });
  }, []);
  //-----------------------------------------------oclick input bar---------------------------------------------
  const onclickinputbar = () => {
    setonclickinput(true);
  };
  const filterdata = (input) => {
    const filterlist = persons.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    SetSearchList(filterlist);
    console.log("filterlist", filterlist);
  };
  //-----------------------------------------------user input---------------------------------------------
  const oninputvalue = (e) => {
    const { value } = e.target;

    setoninput(value);
    console.log("oninput", oninput);
    filterdata(value);
  };
  //-------------------------------------------------------------------------------------------------------------
  const addperson = (per) => {
    const add = persons.find((item) => item.id === per);
    setaddtolist([...addtolist, add]);
    const deletefrompersons = persons.filter((dele) => dele.id !== per);
    setpersons(deletefrompersons);
    console.log("deleteitems", persons);
  };
  console.log("add person", addtolist);

  //---------------------------------------------------------------------===============================
  const deletefromaddlist = (deleted) => {
    const adddeletefromaddlist = addtolist.filter(
      (select) => select.id !== deleted
    );
    setaddtolist(adddeletefromaddlist);
    const deletedPerson = addtolist.find(
      (addlistitem) => addlistitem.id === deleted
    );

    setpersons((prevPersons) => [...prevPersons, deletedPerson]);
  };
  return (
    <div>
      <input
        type="text"
        id=""
        name="name"
        value={oninput}
        onFocus={onclickinputbar}
        onChange={oninputvalue}
      />
      <hr />
      {onclickinput && (
        <div>
          <ul>
            {persons.map((per, index) => {
              return (
                <li key={per.id} onClick={() => addperson(per.id)}>
                  {per.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div>
        {addtolist && (
          <ul>
            {addtolist.map((per) => {
              return (
                <li key={per?.name}>
                  {per?.name}
                  <button onClick={() => deletefromaddlist(per.id)}>x</button>;
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Person;
