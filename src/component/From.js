import React, { useState } from 'react';
import './From.css';

function From() {
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
    <div className='container text-center from-body'>
      <div className="text-center ">
          <div className="row my-5">
              <div className="col">
              <h5 className='text-start' >Enter Your Full Name</h5>
                <input htmlFor='name-input' type={'text'}  className="form-control" placeholder="Type your full Name"  />
              </div>
              <div className="col-md-6">
              <h5 className='text-start' >Enter Your Roll No.</h5>
                <input type={'number'} required={true} className="form-control" placeholder="Roll No."  />
              </div>
              <div className="col">
                <h5>Enter Check in Time : </h5>
                <input  type={'time'}  className="form-control" placeholder="Enter Check in Time"/>
              </div>
              <div className="col">
                <h5>Enter Check Out Time : </h5>
                <input  type={'time'}  className="form-control" placeholder="Enter Check in Time"/>
              </div>
              

              <div>
                  <button className="btn btn-dark" onClick={()=>{
                    clear()
                    presentStudent();
                  }} > Submit </button>

                  <button className="btn btn-dark" onClick={clear} >Reset </button>

              </div>
              
          </div>
                
                 
      </div>
      <div className="text-center">
          <h5>Total Students Present :{studentNumber } </h5>
      </div>
          
    </div>
  )
}

export default From
