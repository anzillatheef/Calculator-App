import React, { useState } from "react";
import Button from "./Button";
import "./Calculator.css";
import MyImage from "./IMG_1404.jpg"; // Import the image

function Calculator() {
  const [text1, setText] = useState(""); // Calculator text
  const [showImage, setShowImage] = useState(false); // State for toggling the image

  const ClickHandle = (e) => {
    if (e.target.value === "C") {
      setText("");
      setShowImage(false); // Hide the image when cleared
    } else if (e.target.value === "=") {
      try {
        setText(eval(text1));
      } catch {
        setText("Error");
      }
    } else if (e.target.value === "Show Me") {
      setShowImage((prevShowImage) => !prevShowImage); // Toggle the image state
    } else if (e.target.value === "Square") {
      setText(Math.pow(Number(text1), 2));
    } else {
      setText(text1 + e.target.value);
    }
  };

  return (
    <div className="Calculator">
      <div className="screen-row">
        <input type="text" readOnly value={text1} className="calculator-screen" />
      </div>

      {/* Show the image if `showImage` state is true */}
      {showImage && (
        <div className="image-container">
          <img
            src={MyImage}
            alt="My Image"
            className="displayed-image"
          />
        </div>
      )}

      <div className="button-container">
        <Button label="(" ClickHandle={ClickHandle} />
        <Button label="CE" ClickHandle={ClickHandle} />
        <Button label=")" ClickHandle={ClickHandle} />
        <Button label="C" ClickHandle={ClickHandle} />
        <Button label="1" ClickHandle={ClickHandle} />
        <Button label="2" ClickHandle={ClickHandle} />
        <Button label="3" ClickHandle={ClickHandle} />
        <Button label="+" ClickHandle={ClickHandle} />
        <Button label="4" ClickHandle={ClickHandle} />
        <Button label="5" ClickHandle={ClickHandle} />
        <Button label="6" ClickHandle={ClickHandle} />
        <Button label="-" ClickHandle={ClickHandle} />
        <Button label="7" ClickHandle={ClickHandle} />
        <Button label="8" ClickHandle={ClickHandle} />
        <Button label="9" ClickHandle={ClickHandle} />
        <Button label="*" ClickHandle={ClickHandle} />
        <Button label="." ClickHandle={ClickHandle} />
        <Button label="0" ClickHandle={ClickHandle} />
        <Button label="=" ClickHandle={ClickHandle} />
        <Button label="/" ClickHandle={ClickHandle} />
        <Button label="Show Me" ClickHandle={ClickHandle} />
        <Button label="Square" ClickHandle={ClickHandle} />
      </div>
    </div>
  );
}

export default Calculator;
