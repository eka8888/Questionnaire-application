import { React, useEffect, useState } from 'react';
import Previous from '../images/Previous.png';
import Next from '../images/Next.png';
import Ellipse1 from '../images/Ellipse1.png';
import Ellipse2 from '../images/Ellipse2.png';
import '../App.css'

function Devtalk({ nextPage, prevPage, handleDevtalks, userObject }) {

 const [ devtalk, setDevtalk ] = useState('');
 const [ devtalkTopic, setDevtalkTopic ] = useState('');
 const [ somethingSpecial, setSomethingSpecial ] = useState('');

 const [ devtalkError, setDevtalkError ] = useState('');
 const [ devtalkTopicError, setDevtalkTopicError ] = useState('');
 const [ somethingSpecialError, setSomethingSpecialError ] = useState('');

 useEffect(() => {
   if(userObject.devtalk_topic){
     setDevtalkTopic(userObject.devtalk_topic);
   }
   if(userObject.something_special){
     setSomethingSpecial(userObject.something_special);
   }
 }, [userObject])

 const handleDevtalkValue = (value) => {
   if(value === 'yes'){
     setDevtalk(true);
   }else{
     setDevtalk(false);
   }
 }

 const handleNextPage = () => {
   setDevtalkError('');
   setDevtalkTopicError('');
   setSomethingSpecialError('');
   if(devtalk === ''){
     setDevtalkError('Choose is required');
   }else if(devtalkTopic === ''){
     setDevtalkTopicError('Fill is required');
   }else if(somethingSpecial === ''){
     setSomethingSpecialError('Fill is required');
   }else{
     const devtalkObj = {
       devtalk,
       devtalkTopic,
       somethingSpecial
     }
     handleDevtalks(devtalkObj);
     nextPage();
   }
 }

 
 return (
   <div className='main2'>
       <div className='form4'>

       <h2 >What about you?</h2>
      
       <h3>Would you attend Devtalks and maybe also organize your own?</h3>
       <form onChange={({ target }) => handleDevtalkValue(target.value)}>
       <input  type="radio" name="devtalk" value="yes" />
       <label >Yes</label>
       <br/>
       <input  type="radio" name="devtalk" value="no" />
       <label >No</label> 
       <div style={{color:"red"}}>{devtalkError}</div> 
       </form>

     
       <h3>What would you speak about at Devtalk?</h3>
       <textarea onChange={({ target }) => setDevtalkTopic(target.value)} placeholder="I would..." value={devtalkTopic} rows="6" cols="80"/> 
       <div style={{color:"red"}}>{devtalkTopicError}</div> 
        
       <h3>Tell us something special</h3>
       <textarea onChange={({ target }) => setSomethingSpecial(target.value)} placeholder="I..." rows="6" cols="80" value={somethingSpecial}/>
       <div style={{color:"red"}}>{somethingSpecialError}</div> 


<div className="navigationInsights">
            <button>
            <img src={Previous} onClick={() => prevPage(3)} alt="previous img"/>
            </button>
            <img src={Ellipse1} alt="img" />
            <img src={Ellipse1} alt="img1"  />
            <img src={Ellipse1} alt="img2"  />
            <img src={Ellipse1} alt="img3" onClick={handleNextPage} />
            <img src={Ellipse2} alt="img4"  />
            <button type="submit" onClick={handleNextPage}>
            <img src={Next} onClick={handleNextPage} alt="arrow img"/>
            </button>
        </div>
      
     </div>
    
     <div className='text1'>
        <h2>Redberrian Insights</h2>
        <div className='textcovid'>
        <p>We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!</p>
        </div>
      </div>
   </div>
 );
}

export default  Devtalk;