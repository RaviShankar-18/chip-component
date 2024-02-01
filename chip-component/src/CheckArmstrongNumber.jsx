import React, { useState } from "react";

function CheckArmstrongNumber() {
  const [number, setNumber] = useState();

  const countOfDigits = (num) => {
    let count = 0;
    while (num >= 0) {
      num = num / 10;
      count = count + 1;
    }
    return count;
  };

  const isArmstrongNumber = (number) => {
    let temp = number;
    let count = countOfDigits(temp);

    console.log("count", count);
  };

  const onChangeUserInput = (event) => {
    const { type, name, value } = event.target;
    const number = Number(value);
    setNumber(number);
    // console.log("datatype", typeof number);
    isArmstrongNumber(Number(value));
  };
  return (
    <div>
      <input type="text" onChange={onChangeUserInput} />
    </div>
  );
}

export default CheckArmstrongNumber;
