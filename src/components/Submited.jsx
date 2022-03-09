import { React, useState, useEffect } from 'react';
import '../App.css'
import axios from 'axios';
import SubmitedApp from './SubmitedApp';

function Submited({token}) {
  let [ submitted, setSubmitted ] = useState([]);
  let [ skills, setSkills ] = useState([]);

  useEffect(() => {
    setSkills(skills = []);
    setSubmitted(submitted = []);
    axios.get(`https://bootcamp-2022.devtest.ge/api/applications?token=${token}`)
      .then(response => setSubmitted(submitted.concat(response.data)))
      .catch(error => console.log(error.message))
    
    axios.get('https://bootcamp-2022.devtest.ge/api/skills')
      .then(response => setSkills(skills.concat(response.data)))
      .catch(error => console.log(error.message))
  }, [])
  
  return (
    <div className="submitted-container" >
      <p >Submitted Applications</p>
      <div >
        {submitted.length > 0 && submitted.map((i, index) => <SubmitedApp 
          key={index} 
          data={i} 
          index={index} 
          skills={skills} />)}
      </div>
    </div>
  );
}

export default Submited;