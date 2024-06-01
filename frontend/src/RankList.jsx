import React,{useState} from "react";
import Axios from "axios";

function RankList(){

    const [rankList,setRankList]=useState([]);

    function handleSelect(){
        const Class=document.getElementById("class").value;
        const section=document.getElementById("section").value;
        const exam=document.getElementById("exam").value;
        Axios.post("/getRankList",{
            Class:Class,
            section:section,
            exam:exam
        }).then(res=>{
            console.log(res.data);
            setRankList(res.data);
        })

    }
  return <div>
      <div className="heading">
            <h1><i>Rank List</i></h1>
         </div>
         <div className="selection">
         <label htmlFor="Class"><b>Class</b> </label>
   <select  name="Class" id="class">
     <option value="6">6</option>
     <option value="7">7</option>
     <option value="8">8</option>
     <option value="9">9</option>
     <option value="10">10</option>
   </select>
   <br></br>
 
   <label htmlFor="Section"><b> Section</b></label>
   <select  name="section" id="section">
       <option value="A">A</option>
       <option value="B">B</option>
   </select>
 
   <label htmlFor="Exam">Choose Exam:</label>
   <select  name="exam" id="exam">
       <option value="AS1">AS1</option>
       <option value="SA1">SA1</option>
       <option value="AS2">AS2</option>
       <option value="SA2">SA2</option>
   </select>
   <button onClick={handleSelect} type="submit">Select</button>
         </div>

    <div>
        <table>
            <thead>
                <th>Rank</th>
                <th>Roll No</th>
                <th>Name</th>
                <th>Telugu</th>
                <th>Hindi</th>
                <th>English</th>
                <th>Maths</th>
                <th>Physics</th>
                <th>Biology</th>
                <th>Social</th>
                <th>Total</th>
            </thead>
            <tbody>
                {
                    rankList.length>0?rankList.map((ranks,index)=>{
                     return <tr key={index}> 
                        <td>{ranks.fail===0?index+1:"fail"}</td>
                        <td>{ranks.rollno}</td>
                        <td>{ranks.name}</td>
                        <td>{ranks.telugu}</td>
                        <td>{ranks.hindi}</td>
                        <td>{ranks.english}</td>
                        <td>{ranks.maths}</td>
                        <td>{ranks.physics}</td>
                        <td>{ranks.biology}</td>
                        <td>{ranks.social}</td>
                        <td>{ranks.total}</td>

                      </tr>
                    }):""
                }
            </tbody>
        </table>
    </div>
        
  </div>
}

export default RankList;