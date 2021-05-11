import React, { useState } from "react";

function App() {
  const [combinedInput, setCombinedInput] = useState({
    textInput: "",
    list: []
  });

  function combinedHandler(event) {
    const { name, value } = event.target;
    setCombinedInput((prevValues) => {
      if (name === "textInput") {
        return {
          textInput: value,
          list: prevValues.list
        };
      } else if (name === "buttonInput") {
        return {
          textInput: "",
          list: [...prevValues.list, prevValues.textInput]
        };
      }
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={combinedHandler}
          name="textInput"
          value={combinedInput.textInput}
          type="text"
        />
        <button onClick={combinedHandler} name="buttonInput" value="clicked">
          Add
        </button>
      </div>
      <div>
        <ul>
          {/* <li>{combinedInput.list.length}</li> */}
          {combinedInput.list.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
