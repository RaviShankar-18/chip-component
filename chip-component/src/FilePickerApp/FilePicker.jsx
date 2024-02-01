import { useState } from "react";

const FilePicker = () => {
  const [fileContent, setFileContent] = useState(null);
  const handleFileChange = (event) => {
    const fileObject = event.target.files[0];
    console.log("File", fileObject);

    if (fileObject) {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        const dataUrl = e.target.result;
        setFileContent(dataUrl); // Assuming you want to store the data URL in state
      };

      fileReader.readAsDataURL(fileObject);
    }
  };
  return (
    <>
      <label htmlFor="myPhoto">Select Photo</label>
      <br />
      <input
        type="file"
        name="myPhoto"
        id="myPhoto"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />

      {fileContent && (
        <div>
          <p>File Content:</p>
          <img
            src={fileContent}
            alt="Selected File"
            width={"500px"}
            height={"400px"}
          />
        </div>
      )}
    </>
  );
};

export default FilePicker;
