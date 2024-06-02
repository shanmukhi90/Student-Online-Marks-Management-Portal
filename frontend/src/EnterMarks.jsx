import React,{useState} from "react";
import Axios from "axios";

var roll;

function EnterMarks(){
    //used to store students from backend whose marks are to be entered 
   const [students,setStudents]=new useState([]);
   //store present entered input
   const [input,setInput]=new  useState({Telugu:"",Hindi:"",English:"",Maths:"",Physics:"",Biology:"",Social:""})

function handleSelect(event){
    
    event.preventDefault();
    
    const Class=document.getElementById("class").value;
    const section=document.getElementById("section").value;
    const exam=document.getElementById("exam").value;
    
     
    Axios.post("/displayNames",{
        Class:Class,
        section:section,
        exam:exam
    }).then(res=>{
        const list=res.data;
        if(students.length===0 && list.length>0 && res.data!=="no students"){
        list.map((data)=>{
           return setStudents(prev=>{
                return [...prev,data]
            })
        })
    }else{
        if(res.data==="no students"){
            alert("No Students...Register them first");
        }
        else if(list.length===0){
        alert("Entered marks for this section");
    }
}    
})
}

function  handleSubmit(name, rollno){

    Axios.post("/enterMarks",{
           name:name,
           rollno:rollno,
           Telugu:input.Telugu,
           Hindi: input.Hindi,
           English:input.English,
           Maths: input.Maths,
           Physics: input.Physics,
            Biology: input.Biology,
            Social:input.Social
    }).then(res=>{
        console.log(res.data);
    }

    )
    setStudents(students.filter(student=>{return student.name!==name}));
    setInput({Telugu:"",Hindi:"",English:"",Maths:"",Physics:"",Biology:"",Social:""})

}

function handleChange(event,rollno){
    const {name,value}=event.target;
    roll=rollno;
    if(name==="Physics" || name==="Biology"?value>=0 && value<=50:value>=0 && value<=100){
    setInput(prev=>{
        return{
            ...prev,
            [name]:value
        }
    })
   
}
    
}
function handleSelectionChange(){
    setStudents([]);
}
    return(<div className="Enter-marks">
        <div className="heading">
            <h1><i>ENTER MARKS</i></h1>
         </div>
        <div className="selection">
        <label htmlFor="Class"><b>Class</b></label>
  <select onChange={handleSelectionChange} name="Class" id="class">
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select>
  <br></br>

  <label htmlFor="Section"><b>Section</b></label>
  <select onChange={handleSelectionChange} name="section" id="section">
      <option value="A">A</option>
      <option value="B">B</option>
  </select>

  <label htmlFor="Exam"><b>Exam</b></label>
  <select onChange={handleSelectionChange} name="exam" id="exam">
      <option value="AS1">AS1</option>
      <option value="SA1">SA1</option>
      <option value="AS2">AS2</option>
      <option value="SA2">SA2</option>
  </select>
  <button onClick={handleSelect} type="submit">Select</button>
        </div>

        <table >
        <thead>
            <tr>
            <th>Roll No</th>
            <th>Name</th>
           <th>Telugu</th>
           <th>Hindi</th>
           <th>English</th>
           <th>Maths</th>
           <th>Physics</th>
           <th>Biology</th>
           <th>Social</th>
           <th>Submit</th>
            </tr>
           
            
        </thead>
        <tbody>
        
        {students.map((student)=>
       
        <tr  key={student.rollno}>

            <td><input type="number" id="rollno"  value={student.rollno} readOnly={true}/></td>
            <td  ><input type="text"  id="name"  value={student.name} readOnly={true} /></td>
            <td><input onChange={e=>handleChange(e,student.rollno)} type="number"  name="Telugu"  value={roll===student.rollno?input.Telugu:""}/></td>
            <td><input onChange={e=>handleChange(e,student.rollno)} type="number"  name="Hindi" value={roll===student.rollno?input.Hindi:""} /></td>
            <td><input onChange={e=>handleChange(e,student.rollno)} type="number"  name="English" value={roll===student.rollno?input.English:""} /></td>
            <td><input onChange={e=>handleChange(e,student.rollno)} type="number"  name="Maths"  value={roll===student.rollno?input.Maths:""} /></td>
            <td><input onChange={e=>handleChange(e,student.rollno)} type="number"  name="Physics" value={roll===student.rollno?input.Physics:""}/></td>
            <td><input onChange={e=>handleChange(e,student.rollno)} type="number"  name="Biology" value={roll===student.rollno?input.Biology:""} /></td>
            <td><input onChange={e=>handleChange(e,student.rollno)} type="number"  name="Social" value={roll===student.rollno?input.Social:""} /></td>
              
            <td className="button" ><button type="submit" onClick={(event) =>{ event.preventDefault();
          
                handleSubmit(student.name, student.rollno)}} >enter</button></td>
           
        </tr>
    
)}
            
        </tbody>
    </table>
  
    </div>
    )
}

export default EnterMarks;