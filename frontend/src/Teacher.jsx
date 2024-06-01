import React from "react";
import {Routes,Route,useNavigate} from "react-router-dom";
import Register from "./Register" ;
import EnterMarks from "./EnterMarks";
import EditMarks from "./EditMarks";
import Analysis from "./Analysis";
import "../src/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus,faPenToSquare, faMagnifyingGlassChart, faListOl} from "@fortawesome/free-solid-svg-icons";
import RankList from "./RankList";

function Teacher(){
    const navigate=useNavigate();
    

    function handleRegistering(){
       navigate("/Teacher/Register");

    }
    function handleEnteringMarks(){
        navigate("/Teacher/EnterMarks");
    }

    function handleEditingMarks(){
        navigate("/Teacher/EditMarks");
    }
    
    function handleAnalysis(){
        navigate("/Teacher/Analysis");
    }

    function handleRankList(){
        navigate("/RankList");
    }
   return(
    <div className="Teacher-page">
        <button className="iconButtons" onClick={handleRegistering}>
        <FontAwesomeIcon className="icon" icon={faUserPlus} />
            <h4>Register Students</h4></button>
            
        <button className="iconButtons" onClick={handleEnteringMarks}>
        <FontAwesomeIcon className="icon" icon={faPenToSquare} />
            <h4>Enter Marks</h4></button>
        <button className="iconButtons" onClick={handleEditingMarks}>
        <FontAwesomeIcon className="icon" icon={faPenToSquare} />
          <h4> Edit Marks</h4></button>
        <button className="iconButtons" onClick={handleAnalysis}>
        <FontAwesomeIcon className="icon" icon={faMagnifyingGlassChart} /><h4>Analysis</h4></button>
        <button className="iconButtons" onClick={handleRankList}>
        <FontAwesomeIcon className="icon" icon={faListOl} />
            <h4>view RankList</h4></button>
        

        <Routes>
        <Route path="/Teacher/Register" element={<Register />} />
        <Route path="/Teacher/EnterMarks" element={<EnterMarks />} />
        <Route path="/Teacher/EditMarks" element={<EditMarks />} />
        <Route path="/Teacher/Analysis" element={<Analysis />} />
        <Route path="/RankList" element={<RankList />} />
    </Routes>
    </div>

    
   )
}

export default Teacher;