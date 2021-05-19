import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  function grabText(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setValue(name);
  }

  return (
    <div className="container">
      <h1>Hello {value}</h1>
      <input
        onChange={grabText}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;