import { React, useState, useEffect } from 'react';
import Previous from '../images/Previous.png';
import Next from '../images/Next.png';
import Ellipse1 from '../images/Ellipse1.png';
import Ellipse2 from '../images/Ellipse2.png';
import '../App.css'
import axios from 'axios';
import remove from '../images/Remove.png';

function Skills({ nextPage, prevPage, handleSkills, userObject }) {
  let [skillsArray, setSkillsArray] = useState([]);
  let [skillsList, setSkillsList] = useState([]);

  const [language, setLanguage] = useState('');
  const [experience, setExperience] = useState('');

  const [languageError, setLanguageError] = useState('');
  const [experienceError, setExperienceError] = useState('');
  const [skillsError, setSkillsError] = useState('');

  
  useEffect(() => {
    setSkillsList(skillsList = []);
    setSkillsArray(skillsArray = []);

    axios.get('https://bootcamp-2022.devtest.ge/api/skills')
        .then(response => setSkillsArray(skillsArray.concat(response.data)))
        .catch(error => console.log(error.message))
    if (userObject.skills && userObject.skills.length !== 0) {
        setSkillsList(skillsList.concat(userObject.skills));
    }
}, [])

const addLanguage = (e) => {
    e.preventDefault();
  
    setExperienceError('');
    setLanguageError('');
    setSkillsError('');
    const findLanguage = skillsArray.find(i => i.title === language);
    if (!language) {
        setLanguageError('Choose at least one skill')
        } else 
    if (!findLanguage) {
        setLanguageError('Skill is already selected')
    } else if (skillsList.find(i => i.id === findLanguage.id)) {
        setLanguageError('Skill is already selected');
    } else if (experience === '') {
        setExperienceError('Enter experience');
    } else {
        const skillsObj = {
            id: findLanguage.id,
            title: findLanguage.title,
            experience: experience
        }
        setSkillsList(skillsList.concat(skillsObj));
    }
}

const removeLanguage = (i) => {
    const newArray = skillsList.filter(a => a.id !== i.id)
    setSkillsList(newArray);
}

const validateSkills = () => {
    setLanguageError('');
    setSkillsError('');
    setExperienceError('');
    if (skillsList.length !== 0) {
        handleSkills(skillsList);
        nextPage();
    } else {
        setSkillsError('Select skills');
        return;
    }
}


return (
<div className='main2'>
  <div className='form1'>
<br/>
<h2 >Tell us about your skills</h2>

<form onSubmit={addLanguage} className='forms2'> 
<select
      onChange={({ target }) => setLanguage(target.value)} 
      defaultValue={language}
      className="select"
    >
      <option value="">Skills</option>
      {skillsArray.length !== 0 && skillsArray.map((item) => (
        <option  key={item.id} value={item.title}>
          {item.title}
        </option>
      ))}
    </select>
    <div style={{color:"red"}}>{languageError}</div>
        <div style={{color:"#FE3B1F"}}>{skillsError}</div>
     
    <input
      type="text"
      placeholder="Experience Duration in Years"
      onChange={({ target }) => setExperience(target.value)}
      defaultValue={experience} 
    />
    <div style={{color:"#FE3B1F"}}>{experienceError}</div>
    <button
      type="submit"
      className='skillbtn'
    >
      Add Programming Language
    </button>
      </form>
        
      <div className='forms2'>
        {skillsList.length !== 0 && skillsList.map(i => {
          return (
            <div key={i.id}>
              <div className='formsadd'>
                <p className='addskill'><span className='span'>{i.title} </span>Years of experience: {i.experience} <span  onClick={() => removeLanguage(i)} ><img className='removebtn'src={remove} alt='img'></img></span></p>
              </div>
            </div>
          )
        })}
      
    </div>
   
   <div className="navigation">
            <button>
            <img src={Previous} onClick={() => prevPage(1)} alt="previous img"/>
            </button>
            <img src={Ellipse1} alt="img" />
            <img src={Ellipse1} alt="img1" />
            <img src={Ellipse2} alt="img2" onClick={validateSkills} />
            <img src={Ellipse2} alt="img3" />
            <img src={Ellipse2} alt="img4"   />
            <button type="submit" onClick={validateSkills}>
            <img src={Next} alt="arrow img"/>
            </button>
        </div>
   
</div>
   <div className='text1'>
   <h2>A bit about our battles</h2>
   <div className='textp'>
   <p>As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.</p>
   </div>
   </div>
</div>

);
}

export default Skills;