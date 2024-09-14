import React from "react";
import "./App.css";
import { match } from "ts-pattern";

function App() {
  const temp = "2";
  return (
    <div className="App">
      {match(temp)
        .with("2", () => "hello")
        .exhaustive()}
    </div>
  );
}

export default App;
