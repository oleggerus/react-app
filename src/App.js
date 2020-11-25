import React from "react";
import Lesson1 from "./components/Lesson1";
import ScrollableTabs from "./components/ScrollableTabs";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScrollableTabs></ScrollableTabs>
      </header>
      <main>
        <Lesson1 />
      </main>
    </div>
  );
}

export default App;
