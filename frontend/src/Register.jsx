import React,{useState} from "react";
import Axios from "axios";

function Register(){
  const [classDetails,setClassDetails]=useState({Class:"",section:""})
  const [details,setDetails]=new useState({name:"",rollno:""});

  function handleInput(){
    const name=document.getElementById("Name").value;
          const rollno=document.getElementById("rollno").value;
         setDetails({
          name:name,
          rollno:rollno
         })
  }
    function handleSubmit(event){
        event.preventDefault();
          const name=document.getElementById("Name").value;
          const rollno=document.getElementById("rollno").value;
         setDetails({
          name:"",
          rollno:""
         })

          Axios.post("http://localhost:4500/",{
            Name:name,
            rollno:rollno,
            Class:classDetails.Class,
            section:classDetails.section
            
           
          }).then((res)=>{
              const data=res.data;
              alert(data);
            
          })

        
          
          
    }

    function handleSelectionChange(event){
      const {name,value}=event.target;
      setClassDetails(prev=>{
       return{ ...prev,
        [name]:value}
      });
    }

    function handleSelect(event){
      event.preventDefault();
      // const Class=document.getElementById("class").value;
      // const section=document.getElementById("section").value;
      
      Axios.post("http://localhost:4500/selectClass",{
            Class:classDetails.Class,
            section:classDetails.section
          }).then((res)=>{
            console.log(res.data);
          
           
          })

    }
     return(
        <div className="Register">
          <div className="heading">
            <h1><i>REGISTER STUDENTS</i></h1>
         </div>

          <form className="selection" onSubmit={handleSelect} action="/selectClass" method="post">
          <label htmlFor="Class"><b>Class</b></label>
  <select onChange={handleSelectionChange} name="Class" id="class">
  <option value="select">Select Class</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select>
  <br></br>
  <label htmlFor="Section"><b> Section</b></label>
  <select onChange={handleSelectionChange} name="section" id="section">
  <option value="select">Select Section</option>
    <option value="A">A</option>
    <option value="B">B</option>
   
  </select>     
    <button type="submit">select</button>

    </form>
          
            <form className="Registerform" onSubmit={handleSubmit} action="/" method="post">
                <div className="input">
                <label htmlFor="Name" ><b>Name</b></label>
                <input onChange={handleInput} type="text" name="Name" id="Name" value={details.name} placeholder="Enter Name" required/>
                </div>
                
              <div  className="input">
              <label htmlFor="RollNo" ><b>RollNo</b></label>
                <input onChange={handleInput} type="Number" name="rollno" id="rollno" value={details.rollno} placeholder="Enter RollNo" required/>
              </div>
               
              
               
                <button type="submit"  >Register</button>
                
            </form>
        </div>
     );
}

export default Register;