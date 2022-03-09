import { React, useState } from 'react';
import '../App.css'

import arrowTop from '../images/arrow-top.png';
import arrowBottom from '../images/arrow-bottom.png';

function SubmitedApp({ data, index, skills }) {
  const [ showFull, setShowFull ] = useState(false);

  return (
    <div className="app">
      <div className="top">
        {index + 1}
        <img onClick={() => setShowFull(!showFull)} src={showFull ? arrowTop : arrowBottom} 
          alt="arrow" />
      </div>
      <div className="bottom" style={{ display: showFull ? 'flex' : 'none' }}>

        <div className="left">
            <h3 className="left text">Personal Information</h3>
           <br/>
              <p >First Name: { data.first_name}</p>
          
           <br/>
              <p>Last Name: { data.last_name}</p>
             
           <br/>
              <p>Email: { data.email}</p>
             
           <br/>
              <p>Phone: { data.phone}</p>  
           <br/>
       
          
            <h3>Covid Situation</h3>
            <div>
              <h6>how would you prefer to work?</h6>
              <form>
                  <input type="radio" disabled checked={data.work_preference === 'from_office' && true} />
                  <label>From Sairme Office</label>
                <br/>
                  <input type="radio" disabled checked={data.work_preference === 'from_home' && true} />
                  <label>From Home</label>
                <br/>
                  <input type="radio" disabled checked={data.work_preference === 'hybrid' && true} />
                  <label>Hybrid</label>
              </form>
          

            
              <h6>Did you have covid 19?</h6>
              <form >
                  <input type="radio" disabled checked={data.had_covid === true && true} />
                  <label>Yes</label>
              <br/>
                  <input type="radio" disabled checked={data.had_covid === false && true} />
                  <label>No</label> 
              </form>
            

            <div className="date-div" style={{ display: data.had_covid ? 'flex' : 'none' }}>
            <h6>When did you have covid 19?</h6>
            <br/>
              <input type="date" disabled value={data.had_covid_at ? data.had_covid_at : ''} />
            </div>

            <div>
            <h6>Have you been vaccinated?</h6>
              <input type="date" disabled value={data.had_covid_at ? data.had_covid_at : ''} />
              
              <form>
               
                  <input type="radio" disabled checked={data.vaccinated === true && true} />
                  <label >Yes</label>
               <br/>
                  <input type="radio" disabled checked={data.vaccinated === false && true} />
                  <label >No</label>
              </form>
            </div>

            <div className="date-div" style={{ display: data.vaccinated ? 'flex' : 'none' }}>
            <h6>When did you get covid vaccine?</h6>
              <br/>
              <input  type="date" disabled value={data.vaccinated_at ? data.vaccinated_at : '' } />
            </div>
          </div>
        </div>
  

        <div className="right">
         
            <h3 >Skillset</h3>
            <div>
              {data.skills.map((i, index) => {
                return (
                  <div key={index}>
                    <p>{skills.length !== 0 ? skills.find(a => a.id === i.id).title : ''} Years of Experience: {i.experience}</p>
                  </div>
                )
              })}
         
          </div>
       
            <h3>Insigts</h3>
            <div>
              <h6>Would you attend Devtalks and maybe also organize your own?</h6>
              <form >
                
                  <input type="radio" disabled checked={data.will_organize_devtalk && true} />
                  <label>Yes</label>
              <br/>
                  <input type="radio" disabled checked={!data.will_organize_devtalk && true} />
                  <label>No</label>
                
              </form>
            </div>

            <div>
              <h6>What would you speak about at Devtalk?</h6>
              <textarea disabled value={data.devtalk_topic} />
            </div>
            
            <div>
              <h6>Tell us somthing special</h6>
              <textarea disabled value={data.something_special} />
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default SubmitedApp;