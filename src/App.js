import './App.css';
import React, { useState } from 'react';

function App() {
  const [studentNumber, setStudentNumber] = useState(0);
  
 
  const clear =()=>{
    let btnClear = document.querySelectorAll('button')
    let inputs = document.querySelectorAll('input');
    
    btnClear.addEventListener('click' , ()=>{
         inputs.forEach(input=> input.value= '');
    });
   
  }
  const presentStudent =()=>{
    let NewStudentNumber = studentNumber +1 ;
    setStudentNumber(NewStudentNumber); 
  }
  return (
    <div className="App">
      <header className="App-header">
    <div className='body'>
      <div className="content-body">
          <div className="">
              <div className="input-section-name">
                <h5 className='header' >Enter Your Full Name</h5>
                <input htmlFor='name-input' type={'text'}  className="input" placeholder="Type your full Name"  />
              </div>
              <div className="input-section-name">
              <h5 className='header' >Enter Your Roll No.</h5>
                <input type={'number'} required={true} className="input" placeholder="Roll No."  />
              </div>
              <div className="input-section-name">
                <h5 className='header' >Enter Check in Time</h5>
                <input  type={'time'}  className="input" placeholder="Enter Check in Time"/>
              </div>
              <div className="input-section-name">
                <h5 className='header' >Enter Check Out Time</h5>
                <input  type={'time'}  className="input" placeholder="Enter Check in Time"/>
              </div>
              <div className='input-section-name' >
                  <button className='button' onClick={()=>{
                    clear()
                    presentStudent()
                  }}>submit </button>
                  <button className='button' onClick={clear}>Reset</button>
              </div>  
              <div className="heading">
                  <h5>Total Students Present :{studentNumber } </h5>
              </div>
          </div>           
      </div>
          
    </div>
    </header>
    
    </div>
  );
}

export default App;
