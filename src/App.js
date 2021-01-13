import React, { useState } from 'react';
import "./styles/app.scss"
import OutputDiv from "./outputdiv";
import Buttons from "./buttons";

function App() {
 
  const [data,setData]=useState("");
  const [outputs,setOutputs]=useState("");
 
  return (
    <div className="App">
      
      <hr/>
      <h1>Calculator</h1>

      <OutputDiv data={data} outputs={outputs}  />
      <Buttons data={data} setData={setData} outputs={outputs} setOutputs={setOutputs} />
      
    </div>
  );
}

export default App;
