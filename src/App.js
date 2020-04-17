import React, { useState } from "react";
import "./styles.css";
import randomInt from "random-functions-by-maanderz/functions/randomInt";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <div style={{ marginTop: 50 + "px" }}> Random Integer from 0 - 100 </div>
      <button
        style={{ marginTop: 50 + "px", marginBottom: 50 + "px" }}
        type="button"
        class="btn btn-success"
        onClick={() => setValue(randomInt(100))}
      >
        Success
      </button>
      <h2> {value} </h2>
    </div>
  );
}
