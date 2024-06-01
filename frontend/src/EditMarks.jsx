import React,{useState} from "react";
import Axios from "axios";
var tflag=0,hflag=0,eflag=0,mflag=0,pflag=0,bflag=0,sflag=0,roll;

function EditMarks(){
    //it stores currently edited marks
    const [studentupdatedmarks,setStudentUpdatedMarks]=new useState({Telugu:"",Hindi:"",English:"",Maths:"",Physics:"",Biology:"",Social:""});
    //it stores all entered student marks from database
    const [studentmarks,setStudentMarks]=new useState([]);
 
 function handleSelect(event){
     event.preventDefault();
    
     const Class=document.getElementById("class").value;
     const section=document.getElementById("section").value;
     const exam=document.getElementById("exam").value;
     
      
     Axios.post("/displayMarks",{
         Class:Class,
         section:section,
         exam:exam
     }).then(res=>{
         const list=res.data;
         if(studentmarks.length===0 &&list.length!==0 && res.data!=="No marks entered to edit"){
         list.map((data)=>{
          return  setStudentMarks(prev=>{
                 return [...prev,data]
             })
         })
     }else{
         if(res.data==="No marks entered to edit"){
             alert("No marks entered to edit");
             setStudentMarks([]);

         }
         else
         console.log("Entered marks already");
     }
    
         
      })
 
 
 
 }
 
 function  handleSubmit(name, rollno,Telugu,Hindi,English,Maths,Physics,Biology,Social){

 console.log(studentmarks.Telugu);
   var telugu,hindi,english,maths,physics,biology,social;
    //if any marks updated then those updated marks are noted else if old marks
     telugu=tflag?studentupdatedmarks.Telugu:Telugu;
     hindi=hflag?studentupdatedmarks.Hindi:Hindi;
     english=eflag?studentupdatedmarks.English:English;
     maths=mflag?studentupdatedmarks.Maths:Maths;
     physics=pflag?studentupdatedmarks.Physics:Physics;
     biology=bflag?studentupdatedmarks.Biology:Biology;
     social=sflag?studentupdatedmarks.Social:Social;
    
     Axios.post("/editMarks",{
            name:name,
            rollno:rollno,
            Telugu:telugu,
            Hindi:hindi,
            English: english,
            Maths: maths,
            Physics: physics,
             Biology: biology,
             Social:social
     }).then(res=>{
         const list=res.data;
         if(studentmarks.length===list.length && res.data!=="no students"){
            setStudentMarks([]);
         list.map((data)=>{
           return setStudentMarks(prev=>{
                 return [...prev,data]
             })
         })
        
     }else{
         if(res.data==="no students"){
             console.log("no Students...enter marks first");
         }
         else
         console.log("updated marks already");
     }
     }
 
     )
     setStudentUpdatedMarks({Telugu:"",Hindi:"",English:"",Maths:"",Physics:"",Biology:"",Social:""});
     tflag=0;hflag=0;eflag=0;mflag=0;pflag=0;bflag=0;sflag=0;
 
 }
 
 function handleChange(event,rollno){
    
     const {name,value}=event.target;
     console.log(name);
     console.log(value);
     console.log(rollno);
     roll=rollno;
     if(name==="Telugu")
         tflag=1;
         if(name==="Hindi")
         hflag=1;
         if(name==="English")
         eflag=1;
         if(name==="Maths")
         mflag=1;
         if(name==="Physics")
         pflag=1;
         if(name==="Biology")
         bflag=1;
         if(name==="Social")
         sflag=1;
         
         if(name==="Physics" || name==="Biology"?value>=0 && value<=50:value>=0 && value<=100){
     setStudentUpdatedMarks(prev=>{
        return {
            ...prev,
            [name]:value
        }
     })
    }
     
  
     
 }
 function handleSelectChange(){
    setStudentMarks([]);
 }
     return(<div className="Edit-marks">
        
         <div className="heading">
            <h1><i>EDIT MARKS</i></h1>
         </div>
         <div className="selection">
         <label htmlFor="Class"><b>Class</b> </label>
   <select onChange={handleSelectChange} name="Class" id="class">
     <option value="6">6</option>
     <option value="7">7</option>
     <option value="8">8</option>
     <option value="9">9</option>
     <option value="10">10</option>
   </select>
   <br></br>
 
   <label htmlFor="Section"><b> Section</b></label>
   <select onChange={handleSelectChange} name="section" id="section">
       <option value="A">A</option>
       <option value="B">B</option>
   </select>
 
   <label htmlFor="Exam">Choose Exam:</label>
   <select onChange={handleSelectChange} name="exam" id="exam">
       <option value="AS1">AS1</option>
       <option value="SA1">SA1</option>
       <option value="AS2">AS2</option>
       <option value="SA2">SA2</option>
   </select>
   <button onClick={handleSelect} type="submit">Select</button>
         </div>
        
       
         <table  >
         <thead>
         <th>Roll No</th>
            <th>Name</th>
           <th>Telugu</th>
           <th>Hindi</th>
           <th>English</th>
           <th>Maths</th>
           <th>Physics</th>
           <th>Biology</th>
           <th>Social</th>
           <th>Edit</th>
         </thead>
         <tbody>
         
         {studentmarks.map(student=>
        
         <tr>
 
             <td><input type="number" id="rollno" value={student.studentRollNo} /></td>
             <td><input type="text"  id="name" value={student.studentName} /></td>
             <td><input onChange={e=>handleChange(e,student.studentRollNo)} type="number"  name="Telugu" value={tflag && student.studentRollNo===roll?studentupdatedmarks.Telugu:student.Telugu} /></td>
             <td><input onChange={e=>handleChange(e,student.studentRollNo)} type="number"  name="Hindi" value={hflag && student.studentRollNo===roll?studentupdatedmarks.Hindi:student.Hindi} /></td>
             <td><input onChange={e=>handleChange(e,student.studentRollNo)} type="number"  name="English" value={eflag && student.studentRollNo===roll?studentupdatedmarks.English:student.English} /></td>
             <td><input onChange={e=>handleChange(e,student.studentRollNo)} type="number"  name="Maths"  value={mflag && student.studentRollNo===roll?studentupdatedmarks.Maths:student.Maths} /></td>
             <td><input onChange={e=>handleChange(e,student.studentRollNo)} type="number"  name="Physics" value={pflag && student.studentRollNo===roll?studentupdatedmarks.Physics:student.Physics} /></td>
             <td><input onChange={e=>handleChange(e,student.studentRollNo)} type="number"  name="Biology" value={bflag && student.studentRollNo===roll?studentupdatedmarks.Biology:student.Biology} /></td>
             <td><input onChange={e=>handleChange(e,student.studentRollNo)} type="number"  name="Social" value={sflag && student.studentRollNo===roll?studentupdatedmarks.Social:student.Social}/></td>
               
             <td className="button" ><button type="submit" onClick={(event) =>{ event.preventDefault();
           
                 handleSubmit(student.studentName, student.studentRollNo,student.Telugu,student.Hindi,student.English,student.Maths,student.Physics,student.Biology,student.Social)}} >edit</button></td> 
          
              
         </tr>
        
    
   
 )}
             
         </tbody>
     </table>
   
     </div>
     )
}

export default EditMarks;