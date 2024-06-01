import React,{useEffect} from "react";
import Axios from "axios";
import {useNavigate,Routes,Route} from "react-router-dom";
import Teacher from "./Teacher"




function TeacherLogin(){
    const navigate=useNavigate();
   
    useEffect(()=>{
        
            alert("sigin for teacher using this email '421116@teacher.schoolname.ac.in' no need password for now until u store someteacher details in your database as per Teachers schema as described in backend code");
    },[]);

    function handleSubmit(event){
           event.preventDefault();
           const email=document.getElementById("email").value;
           const password=document.getElementById("password").value;
           const id=email.slice(0,6);
           const pattern=email.slice(7);
           console.log(id);
           console.log(pattern);
           if(pattern!=="teacher.schoolname.ac.in"){
            alert("invalid email id..It should be in this format '------@teacher.schoolname.ac.in' "-" indicates a digit from 0 to 9  ")
           }
           else{
          Axios.post("http://localhost:4500/teacherLogin",{
             id:id,
             password:password
            
          }).then(res=>{
            console.log(res.data);
           
            //uncomment this after you have added some teacherinfo in your database
           // var status=res.data;
           var status="exists";
            if (status === "exists") {
                navigate("/Teacher/Home");
              } 
            else{
                alert("Wrong Credentials");
            }
          })
          
    }
}


    return(<div>        
        <div className="heading">
           <h1><i>Teacher Login</i></h1>
        </div>
        <div className="login">
            <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter email" required />
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter password" required />
            </div>
            
            <button type="submit" onClick={handleSubmit}>login</button>
            
             <Routes><Route path="/Teacher/Home" element={<Teacher />} />
            
             </Routes>

           
            
        </div>
       
        </div>
    )

}

export default TeacherLogin;