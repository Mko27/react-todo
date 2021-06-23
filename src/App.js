import React, { useState } from "react";
import './index.css';
import Project from "./components/Project";


const DATA = [
  /*{ id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }*/
];

function App() {
  const [createdProjectCount, setCreatedProjectConut] = useState([1])

  return (
    <>
      {createdProjectCount.map((count, i) => (
        <Project tasks={DATA} key={i}/>
      ))}
    
      <button className="btn btn__primary btn__lg" onClick={() => setCreatedProjectConut([...createdProjectCount, createdProjectCount.length + 1])}>
        Create Project
      </button> 
    </>
  );
}

export default App;
