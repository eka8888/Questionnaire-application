import React from 'react'
import '../App.css'

import rocketman from '../images/rocketman.png';


function Home({ nextPage, showSubmitted }) {
  return ( 
  <div className = "Main">
  <header className = "App-header">
  <h2 className ='maintitle'>Welcome Rocketeer!</h2>

  <button className = "btn1" onClick = { nextPage }> Start Questionnaire </button> 
  <br/>
  <button className = "btn3" onClick = { showSubmitted }> Submitted Applications </button> 
  <br/>
     
  <div > <img src={rocketman} className='rocketman' alt='rocketman' />
  </div>
  
  </header> 
  </div>
);
}

export default Home;