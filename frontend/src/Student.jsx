import React from "react";
import {Routes,Route,useNavigate} from "react-router-dom";
import CheckMarks from "./CheckMarks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faListOl } from "@fortawesome/free-solid-svg-icons";
import RankList from "./RankList";

function Student(){
 const navigate=useNavigate();
    function handleCheck(){
        navigate("/Student/CheckMarks");
    }

    function handleRank(){
        navigate("/RankList");
    }
    return(
        <div className="Teacher-page">
            <button className="iconButtons" onClick={handleCheck}>
                <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
                <h4>view Progress Report</h4></button>
            <button className="iconButtons" onClick={handleRank}>
                <FontAwesomeIcon className="icon" icon={faListOl} /><h4>view Rank</h4></button>

            <Routes>
                <Route path="/Student/CheckMarks" element={<CheckMarks />}/>
                <Route path="/RankList" element={<RankList />}/>
            </Routes>
        </div>
       
    )
}

export default Student;