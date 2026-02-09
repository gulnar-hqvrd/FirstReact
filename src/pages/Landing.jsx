import React from "react";
import Students from "././students/index";
import Groups from "././groups/index";
import { useState } from "react";

function Landing() {
    
    const [counter, setCount] = useState(0)
    
    const handleIncrement = () => {
     setCount(counter + 1)
    }

  return (
    <>
      <div>
        <h1>Welcome to the Landing Page {counter}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <Students />
        <Groups />
      </div>
      <div></div>
    </> 
  );
}

export default Landing;
