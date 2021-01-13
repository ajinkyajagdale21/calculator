import React from 'react';

function OutputDiv({data,outputs}) {
 return(
    <div>
        <div className="enter" placeholder="enter number" type="number">
            
                {data} 
                {outputs}
              
        </div>
    </div>
 )
}

export default OutputDiv;