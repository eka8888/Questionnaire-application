import React from 'react'
import '../App.css'

function Submit({ prevPage, submitForm }) {
  return ( 
    <div className = "submit">
      <div>
      <button className = "submitbtn1" onClick = { submitForm } > Submit </button> 
      <br/>
      <button className = "submitbtn2" onClick = {() => prevPage(4) } > go back </button>
       </div> 
       </div>
  );
}

export default Submit