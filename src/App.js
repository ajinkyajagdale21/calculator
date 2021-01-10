import React from 'react';
import "./styles/app.scss"

function App() {
  return (
    <div className="App">
      
      
      <h1>calculator</h1>
      <input className="enter" placeholder="enter number"></input>
      

      <br/>
      <div className="btn">
      <button>AC</button>
      <button>/</button>
      <br/>
      <button>9</button>
      <button>8</button>
      <button>7</button>
      <button>*</button>

      <br/>
      
      <button>6</button>
      <button>5</button>
      <button>4</button>
      <button>-</button>
      <br/>  
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>

      <br/>
      <button>0</button>
      <button>.</button>
      <button>=</button>
      </div>

    </div>
    
  );
}

export default App;
