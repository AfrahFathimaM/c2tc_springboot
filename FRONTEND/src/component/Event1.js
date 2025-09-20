import React from 'react';
function Event1(){
function call(){
    const a=document.getElementById("one").innerHTML="afraa";
}

return(
    <div>
        <p id="one">this will change to...</p>
        <button onClick={call}>click me</button>
    </div>
)

}
export default Event1;