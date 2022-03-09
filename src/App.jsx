import { React, useState } from 'react';

import './App.css';

import Home from './components/Home';
import Personal from './components/Personal';
import Skills from './components/Skills';
import Covid from './components/Covid';
import Devtalk from './components/Devtalk';
import Submit from './components/Submit';
import Submited from './components/Submited';
import Thanks from './components/Thanks';

import axios from 'axios';

const App = () => {
const [steps, setSteps] = useState(0);
const [showSubmitted, setShowSubmitted] = useState(false);
const [token] = useState("69808227-f174-483f-bc2a-11cb241d35c5");

const [userObject, setUserObject] = useState({
    token: token
});

const nextPage = () => {
    setSteps(steps + 1);
    }
const prevPage = (step) => {
    setSteps(step);
    }

const handleSubmitted = () => {
    setShowSubmitted(!showSubmitted);
    }


const handleInfo = (data) => {
    setUserObject({
     ...userObject,
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    phone: data.number
        })
    }

const handleSkills = (data) => {
    setUserObject({
    ...userObject,
    skills: data
        })
 }

const handleCovid = (data) => {
    if (data.hadCovid === true && data.vaccinated === true) {
        setUserObject({
        token: userObject.token,
        first_name: userObject.first_name,
        last_name: userObject.last_name,
        email: userObject.email,
        phone: userObject.phone,
        skills: userObject.skills,
        work_preference: data.preferredWork,
        had_covid: data.hadCovid,
        had_covid_at: data.covidDate,
        vaccinated: data.vaccinated,
        vaccinated_at: data.vaccinatedDate
         })
         } else if (data.hadCovid === false && data.vaccinated === false) {
        setUserObject({
        token: userObject.token,
        first_name: userObject.first_name,
        last_name: userObject.last_name,
        email: userObject.email,
        phone: userObject.phone,
        skills: userObject.skills,
        work_preference: data.preferredWork,
        had_covid: data.hadCovid,
        vaccinated: data.vaccinated,
        })
        } else if (data.hadCovid === false) {
        setUserObject({
        token: userObject.token,
        first_name: userObject.first_name,
        last_name: userObject.last_name,
        email: userObject.email,
        phone: userObject.phone,
        skills: userObject.skills,
        work_preference: data.preferredWork,
        had_covid: data.hadCovid,
        vaccinated: data.vaccinated,
        vaccinated_at: data.vaccinatedDate
        })
        } else if (data.vaccinated === false) {
        setUserObject({
        token: userObject.token,
        first_name: userObject.first_name,
        last_name: userObject.last_name,
        email: userObject.email,
        phone: userObject.phone,
        skills: userObject.skills,
        work_preference: data.preferredWork,
        had_covid: data.hadCovid,
        had_covid_at: data.covidDate,
        vaccinated: data.vaccinated
        })
                
        }
        }
           
        const handleDevtalks = (data) => {
                setUserObject({
                    ...userObject,
                    will_organize_devtalk: data.devtalk,
                    devtalk_topic: data.devtalkTopic,
                    something_special: data.somethingSpecial
                })
            }
        
        const submitForm = () => {
            axios.post('https://bootcamp-2022.devtest.ge/api/application', userObject)
                .then(() => {
                    setSteps(steps + 1);
                    setTimeout(() => {
                        setSteps(0);
                        setUserObject({
                            token: token
                        });
                    }, 3000)
                })
                .catch(error => console.log(error.message))
        }

        return ( 
            <div className = "main-container"
                style = {
                    { height: showSubmitted ? '' : '1080px' } } >  {
                    showSubmitted && < Submited token = { token }/>} 

                    {steps === 0 && !showSubmitted && < Home
                        nextPage = { nextPage }
                        showSubmitted = { handleSubmitted }/>} 
                    {steps === 1 && < Personal
                        nextPage = { nextPage }
                        prevPage = { prevPage }
                        handleInfo = { handleInfo }
                        userObject = { userObject }/>} 
                    {steps === 2 && < Skills
                        nextPage = { nextPage }
                        prevPage = { prevPage }
                        handleSkills = { handleSkills }
                        userObject = { userObject }/>} 
                    {steps === 3 && < Covid
                        nextPage = { nextPage }
                        prevPage = { prevPage }
                        handleCovid = { handleCovid }/>}
                    {steps === 4 && < Devtalk
                        nextPage = { nextPage }
                        prevPage = { prevPage }
                        handleDevtalks = { handleDevtalks }
                        userObject = { userObject } />} 
                    {steps === 5 && < Submit
                        prevPage = { prevPage }
                        submitForm = { submitForm }/>} 
                    { steps === 6 && < Thanks/> } </div>
                     );
                    }

export default App;
