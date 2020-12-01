import React from "react";
import ScrollableTabs from "./components/ScrollableTabs";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScrollableTabs></ScrollableTabs>
      </header>
      <main>{/* <Lesson1 /> */}</main>
    </div>
  );
}

export default App;
