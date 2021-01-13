import React from 'react';


function Buttons({data,setData,setOutputs}) {

  const clickEventHandler=(e)=>{
       setData(data + e.target.value);
       } 
  
  const OutputHandler=()=>{
   
    setOutputs((eval(data)));
    setData('');   
  }  
  const clearEventHandler=(e)=>{
    setData('');
    setOutputs('');
  }  
    return(
    
    <div>     
    
    <div className="wrapper">
      
            <button className="btn" onClick={clearEventHandler}>Clear</button>
            <button className="btn" value="(" onClick={clickEventHandler}>(</button>
            <button className="btn" value=")" onClick={clickEventHandler}>)</button>
            <button className="btn" value="/" onClick={clickEventHandler}>/</button>
            <button className="btn" value="7" onClick={clickEventHandler}>7</button>
            <button className="btn" value="8" onClick={clickEventHandler}>8</button>
            <button className="btn" value="9" onClick={clickEventHandler}>9</button>
            <button className="btn" value="*" onClick={clickEventHandler}>X</button>
            <button className="btn" value="4" onClick={clickEventHandler}>4</button>
            <button className="btn" value="5" onClick={clickEventHandler}>5</button>
            <button className="btn" value="6" onClick={clickEventHandler}>6</button>
            <button className="btn" value="-" onClick={clickEventHandler}>-</button> 
            <button className="btn" value="1" onClick={clickEventHandler}>1</button>
            <button className="btn" value="2" onClick={clickEventHandler}>2</button>
            <button className="btn" value="3" onClick={clickEventHandler}>3</button>
            <button className="btn" value="+" onClick={clickEventHandler}>+</button>
            <button className="btn" value="%" onClick={clickEventHandler}>%</button>
            <button className="btn" value="0" onClick={clickEventHandler}>0</button>
            <button className="btn" value="." onClick={clickEventHandler}>.</button>
            <button className="btn" id="btn-equals" value="=" onClick={OutputHandler}>=</button>
    </div>    
   
</div> 
 )
}

export default Buttons;