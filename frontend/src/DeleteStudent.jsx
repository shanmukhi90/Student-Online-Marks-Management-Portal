import React from 'react';
import Axios from "axios";


function DeleteStudent() {
    function handleSubmit(e){
        e.preventDefault();
        const Class=document.getElementById("class").value;
        const section=document.getElementById("section").value;
       
        
         
        Axios.post("/delete",{
            Class:Class,
            section:section,
            
        }).then(res=>{
            const l=res.data;
             alert(l);
    })
        
    }
    return <div className="Enter-marks">
    <div className="heading">
        <h1><i>Delete Students</i></h1>
     </div>
    <div className="selection">
   
    <label htmlFor="Class"><b>Class</b></label>
<select  name="Class" id="class">
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


<button onClick={handleSubmit} type="submit">DeleteAll</button>
    </div>
    </div>
}

export default DeleteStudent;