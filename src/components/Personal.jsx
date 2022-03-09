import { React, useState, useEffect } from 'react';
import Previous from '../images/Previous.png';
import Next from '../images/Next.png';
import Ellipse1 from '../images/Ellipse1.png';
import Ellipse2 from '../images/Ellipse2.png';
import '../App.css'

function Personal({ nextPage, handleInfo, userObject }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const [validateFirstName, setValidateFirstName] = useState('');
    const [validateLastName, setValidateLastName] = useState('');
    const [validateEmail, setValidateEmail] = useState('');
    const [validateNumber, setValidateNumber] = useState('');


    useEffect(() => {
      if (userObject.first_name) {
          setFirstName(userObject.first_name);
      }
      if (userObject.last_name) {
          setLastName(userObject.last_name);
      }
      if (userObject.email) {
          setEmail(userObject.email);
      }
      if (userObject.phone) {
          setNumber(userObject.phone);
      }
  }, [userObject])

 
  const firstNameValidation = () => {
      if(!firstName){
          setValidateFirstName("Name cannot be blank")
        }else if(firstName.trim().length<2){
          setValidateFirstName("At least two letter");
          return false;
        }else{
        return true;
        }
        }
  const lastNameValidation = () => {
      if(!lastName){
          setValidateLastName("LastName cannot be blank")
        }else if(lastName.trim().length<2){
          setValidateLastName("At least two letter");
          return false;
        }
        else{
        return true;
        }
        }
  const emailValidation = () => {
      const validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if(!email){
        setValidateEmail("Email cannot be blank");
      }else if(!email.match(validRegex)){
       setValidateEmail('Invalid email');
       return false;
     }else{
       return true;
     }
   }
  const numberValidation = () => {
      const regex=/^(\+995\s?)(\d{3}[\-\s]?(\d{2}[\-\s]?\d{2}[\-\s]?\d{2}$|\d{3}[\-\s]?\d{3}$))/
       if(!number){
         return true
       }
       else if (number.match(regex) ) {
          return true;
      } else {
          setValidateNumber('Incorrect Number');
          return false;
      }
  }

  
  const validateInputs = () => {
      setValidateFirstName('');
      setValidateLastName('');
      setValidateEmail('');
      setValidateNumber('');
      firstNameValidation();
      lastNameValidation();
      emailValidation();
      numberValidation();
      if (firstNameValidation() && lastNameValidation() &&
          emailValidation() && numberValidation()) {
          handleInfo({
              firstName: firstName,
              lastName: lastName,
              email: email,
              number: number ? number : "no phone"
          })
          nextPage();
      }
  }

  return (
      <div className='main2'>
      <div className='form1'>
      <br/>
      <h2 >Hey, Rocketeer, what are your coordinates?</h2>
      <div className='forms1' >
         <input type="text" placeholder="First Name" onChange={({ target }) => setFirstName(target.value)} defaultValue={firstName} />
         <div style={{color:"#FE3B1F"}}>{validateFirstName}</div>
         <br/>
         <input type="text" placeholder="Last Name" onChange={({ target }) => setLastName(target.value)} defaultValue={lastName} />
         <div style={{color:"#FE3B1F"}}>{validateLastName}</div>
         <br/>
         <input type="email" placeholder="E Mail"onChange={({ target }) => setEmail(target.value)} defaultValue={email} />
         <div style={{color:"#FE3B1F"}}>{validateEmail}</div>
         <br/>
         <input type="text" placeholder=' +995 5_ _' onChange={({ target }) => setNumber(target.value)} defaultValue={number} />
         <div style={{color:"#FE3B1F"}}>{validateNumber}</div>
       </div>

<div className="navigation">
            <button>
            <img src={Previous} alt="previous img"/>
            </button>
            <img src={Ellipse1} alt="img" onClick={validateInputs} />
            <img src={Ellipse2} alt="img1"  />
            <img src={Ellipse2} alt="img2"  />
            <img src={Ellipse2} alt="img3" />
            <img src={Ellipse2} alt="img4"   />
            <button type="submit" onClick={validateInputs}>
            <img src={Next} alt="arrow img"/>
            </button>
        </div>
        </div>
      <div className='text1'>
           <h2>Redberry Origins</h2>
           <div className='textp'>
          <p>You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇</p>
          </div>
     </div>
    </div>
  );
}

export default Personal;