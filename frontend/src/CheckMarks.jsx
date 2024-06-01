import React,{useState} from "react";
import Axios from "axios";

const Subjects=["Telugu","Hindi","English","Maths","Physics","Biology","Social","Total","Rank"];
function CheckMarks(){
      const [marks,setMarks]=useState({AS1:null,SA1:null,AS2:null,SA2:null});
    function handleSubmit(event){
        event.preventDefault();
        const rollno=document.getElementById("RollNo").value;
        const Class=document.getElementById("Class").value;
        const section=document.getElementById("section").value;

        Axios.post("http://localhost:4500/checkMarks",{
            RollNo:rollno,
            Class:Class,
            section:section

        }).then(res=>{
          console.log(res.data);
          if(typeof(res.data)==="string"){
            alert(res.data);
          }
          else{
            setMarks(res.data.marks);
          }
         

        })
    }

    return(
        <div>
          <div className="selection">
          <label htmlFor="Class"> <b>Class</b></label>
  <select  name="Class" id="Class">
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
            <label htmlFor="RollNo"><b>Rollno</b></label>
            <input type="number" id="RollNo" />
            <button onClick={handleSubmit} type="submit">Get Marks</button>
          </div>
            

        <table>
            <thead>
              <tr>
              <th>Subjects</th>
              <th>AS1</th>
              <th>SA1</th>
              <th>AS2</th>
              <th>SA2</th>
              </tr>
                
            </thead>
            <tbody>
              {Subjects.map(sub=>{

                let style={};
                if(sub==="Total"){
                  style.fontWeight="bold";
                }else if(sub==="Rank"){
                  style.color="blue";
                  style.fontWeight="bold";
                }
                
                 return<tr key={sub}>
                 <th>{sub}</th>
                 <td className="studentMarks" style={style}>{marks.AS1?marks.AS1[sub]:""}</td>
                 <td className="studentMarks"style={style}>{marks.SA1?marks.SA1[sub]:""}</td>
                 <td className="studentMarks" style={style}>{marks.AS2?marks.AS2[sub]:""}</td>
                 <td className="studentMarks" style={style}>{marks.SA2?marks.SA2[sub]:""}</td>
             </tr>
              })
            }
               
            
            </tbody>
        </table> 
        </div>
    )
}

export default CheckMarks;