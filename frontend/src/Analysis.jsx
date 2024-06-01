import React,{useState} from "react";
import Axios from "axios";



function Analysis(){
    const [data,setData]=useState({});

    function handleSelect(event){
       
        event.preventDefault();
       
        const Class=document.getElementById("class").value;
        const section=document.getElementById("section").value;
        const exam=document.getElementById("exam").value;
        const subject=document.getElementById("subject").value;
        
         
        Axios.post("/getMarks",{
            Class:Class,
            section:section,
            exam:exam,
            subject:subject
        }).then(res=>{
                
                if(res.data!=="No marks exists")
                    setData(res.data);
                else{
                    alert("No marks are entered for this section")
                }
                
            })
    }
     return <div>
        <div className="heading">
            <h1><i> MARKS ANALYSIS</i></h1>
         </div>

        <div className="selection">
     <label htmlFor="Class"><b>Class</b></label>
   <select name="Class" id="class">
     <option value="6">6</option>
     <option value="7">7</option>
     <option value="8">8</option>
     <option value="9">9</option>
     <option value="10">10</option>
   </select>
   <br></br>
 
   <label htmlFor="Section"><b>Section</b></label>
   <select name="section" id="section">
       <option value="A">A</option>
       <option value="B">B</option>
   </select>
 
   <label htmlFor="Exam"><b>Exam</b></label>
   <select name="exam" id="exam">
       <option value="AS1">AS1</option>
       <option value="SA1">SA1</option>
       <option value="AS2">AS2</option>
       <option value="SA2">SA2</option>
   </select>

   <label htmlFor="Subject"><b>Subject</b></label>
   <select name="subject" id="subject">
      
       <option value="Telugu">Telugu</option>
       <option value="Hindi">Hindi</option>
       <option value="English">English</option>
       <option value="Maths">Maths</option>
       <option value="Science">Science</option>
       <option value="Social">Social</option>
   </select>
   <button onClick={handleSelect} type="submit">Select</button>

    </div>
        
   <div className="Analysis">
    <div className="left">
    <p><b>Average Marks:</b>{data.avg}</p>
    <p><b>Minimum Marks:</b>{data.min}</p>
    <p><b>Maximum Marks:</b>{data.max}</p>
    <p><b>Number of A1's:</b>{data.A1}</p>
    <p><b>Number of A2's:</b>{data.A2}</p>
    </div>
    
    <div className="Right">
    <p><b>Number of B1's:</b>{data.B1}</p>
    <p><b>Number of B2's:</b>{data.B2}</p>
    <p><b>Number of C1's:</b>{data.C1}</p>
    <p><b>Number of C2's:</b>{data.C2}</p>
    <p><b>Number of D1's:</b>{data.D1}</p>
    <p><b>Number of D2's:</b>{data.D2}</p>
    </div>
   
   </div>
     </div>
}

export default Analysis;