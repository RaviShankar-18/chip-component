import { useState } from "react";

const IsArmstrongNumber = () => {
  const [output, setOutput] = useState("");
  const IsArmstrongNumber = (string) => {
    let length = string.length; //cod->countOfDigit
    let i = 0;
    let number = Number(string);
    let totalSum = 0;
    while (i < length) {
      let n = Number(string.charAt(i));
      totalSum += Math.pow(n, length);
      i++;
    }

    if (number === totalSum) {
      // console.log("Armstrong Number");
      setOutput("Armstrong Number");
    } else {
      setOutput("Not Armstrong Number");
    }
  };
  const onChangeInput = (event) => {
    const { value } = event.target;
    IsArmstrongNumber(value);
  };
  return (
    <>
      <input onChange={onChangeInput} />
      <div>{output}</div>
    </>
  );
};

export default IsArmstrongNumber;
