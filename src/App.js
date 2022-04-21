import React, { useState } from "react";
import ColorBlock from "./ColorBlock.js";
import "./App.css";
import ColorForm from "./ColorForm.js";

function App() {
  let [colors, setColors] = useState([
    "violet",
    "blue",
    "lightblue",
    "green",
    "greenyellow",
    "yellow",
    "orange",
    "red",
  ]);

  let colorMap = colors.map((color, i) => {
    return <ColorBlock color={color} />;
  });

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
