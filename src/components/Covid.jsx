import { React, useState } from 'react';
import Previous from '../images/Previous.png';
import Next from '../images/Next.png';
import Ellipse1 from '../images/Ellipse1.png';
import Ellipse2 from '../images/Ellipse2.png';
import '../App.css'

function Covid({ nextPage, prevPage, handleCovid }) {

  const [covidInput, setCovidInput] = useState(false);
  const [vaccinatedInput, setVaccinatedInput] = useState(false);

  const [preferredWork, setPreferredWork] = useState('');
  const [hadCovid, setHadCovid] = useState('');
  const [covidDate, setCovidDate] = useState('');
  const [vaccinated, setVaccinated] = useState('');
  const [vaccinatedDate, setVaccinatedDate] = useState('');

  const [workError, setWorkError] = useState('');
  const [covidError, setCovidError] = useState('');
  const [covidDateError, setCovidDateError] = useState('');
  const [vaccinatedError, setVaccinatedError] = useState('');
  const [vaccinatedDateError, setVaccinatedDateError] = useState('');



  const handleCovidInput = (value) => {
      if (value === 'yes') {
          setCovidInput(true);
          setHadCovid(true);
      } else {
          setCovidInput(false);
          setHadCovid(false);
      }
  }

  const handleVaccinated = (value) => {
      if (value === 'yes') {
          setVaccinatedInput(true);
          setVaccinated(true);
      } else {
          setVaccinatedInput(false);
          setVaccinated(false);
      }
  }

  const handleNextPage = () => {
          setWorkError('');
          setCovidError('');
          setCovidDateError('');
          setVaccinatedError('');
          setVaccinatedDateError('');
          if (preferredWork === '') {
              setWorkError('choose prefer work');
          } else if (hadCovid === '') {
              setCovidError('choose is required');
          } else if (hadCovid === true && covidDate === '') {
              setCovidDateError('choose covid date');
          } else if (vaccinated === '') {
              setVaccinatedError('choose is required');
          } else if (vaccinated === true && vaccinatedDate === '') {
              setVaccinatedDateError('choose vaccinated date');
          } 
          else {
            const covidObj = {
              preferredWork,
              hadCovid,
              covidDate,
              vaccinated,
              vaccinatedDate
          }
        handleCovid(covidObj)
      
              nextPage();
          }
      }
      


return (
<div className='main2'>
  <div className='form1'>
  <h2 >Covid Stuff</h2>
  <div >
  
    <div className='form4'>
    <h3>how would you prefer to work?</h3>
    
    <form onChange={({ target }) => setPreferredWork(target.value)}>
    <input type="radio" name="work-preference" id="from-office" value="from_office" required/>
    <label htmlFor="from-office">From Sairme Office</label>
    <br/>

    <input type="radio" name="work-preference" id="from-home" value="from_home" required/>
    <label htmlFor="from-home">From Home</label>
    <br/>
        
    <input type="radio" name="work-preference" id="hybrid"value="hybrid" required/>
    <label htmlFor="hybrid">Hybrid</label>
    <br/>
    <div style={{color:"red"}}>{workError}</div>
    </form>
   <br/>
   
   
    <h3>Did you contact covid 19?:(</h3>
    <form onChange={({ target }) => handleCovidInput(target.value)}>
    <input type="radio" id="yes" name="had-covid" value="yes" required/>
    <label htmlFor="yes">Yes</label>         
    <br/>

    <input type="radio" id="no" name="had-covid" value="no" required/>
    <label htmlFor="no">No</label>
    <div style={{color:"red"}}>{covidError}</div>
    </form>

    {covidInput&& (
    <>
      <h3>When?</h3> <br />
      <input onChange={({ target }) => setCovidDate(target.value)}  type="date" placeholder='Date' className='inp' />
      <div style={{color:"red"}}>{covidDateError}</div>
    </>
  )}


    <h3>Have you been vaccinated?</h3>
    <form onChange={({ target }) => handleVaccinated(target.value)}>
    <input type="radio" id="vaccinated_yes" name="vaccinated" value="yes" required/>
    <label htmlFor="vaccinated_yes" >Yes</label>
    <br/>
        
    <input type="radio" id="vaccinated_no" name="vaccinated" value="no" required />
    <label htmlFor="vaccinated_no">No</label>
    <div style={{color:"red"}}>{vaccinatedError}</div>
    </form>


    {vaccinatedInput&& (
    <>
      <h3>When?</h3> <br />
      <input onChange={({ target }) => setVaccinatedDate(target.value)} type="date" className='inp' placeholder="Date"/>
      <div style={{color:"red"}}>{vaccinatedDateError}</div>
    </>
  )}
 
    </div>
  </div>

   <div className="navigation">
      <button>
      <img src={Previous} onClick={() => prevPage(2)} alt="previous img"/>
      </button>
      <img src={Ellipse1} alt="img" />
      <img src={Ellipse1} alt="img1"  />
      <img src={Ellipse1} alt="img2" onClick={handleNextPage} />
      <img src={Ellipse2} alt="img3" />
      <img src={Ellipse2} alt="img4"   />
      <button type="submit" onClick={handleNextPage}>
      <img src={Next} onClick={handleNextPage} alt="arrow img"/>
      </button>
    </div>
 
</div>
<div className='text1'>
  <h2>Redberry Covid Policies</h2>
  <div className='textcovid'>
  <p>As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications  Zoom meetings. Both on the fun and productivity scales. </p>
  </div>
</div>
</div>
);
}



export default Covid;