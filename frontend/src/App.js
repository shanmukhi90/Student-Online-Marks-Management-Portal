import React from "react";
import {useNavigate,Routes,Route,useLocation} from 'react-router-dom';
import Teacher from "./Teacher";
import Student from "./Student";
import Register from "./Register" ;
import EnterMarks from "./EnterMarks";
import EditMarks from "./EditMarks";
import Analysis from "./Analysis";
import CheckMarks from "./CheckMarks";
import TeacherLogin from "./TeacherLogin";
import RankList from "./RankList";
import "../src/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChild, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import DeleteStudent from "./DeleteStudent";


function App() {

  const navigate=useNavigate();
  const location=useLocation();


 function handleTeacher(event){
           navigate("/Teacher");
          
  }
    
  function handleStudent(event){
      navigate("/Student");
}

const isTeacherPage=location.pathname ==="/Teacher/Home";
const isTeacherLoginPage=location.pathname ==="/Teacher";
const isStudentPage=location.pathname ==="/Student";
const isRegisterPage=location.pathname ==="/Teacher/Register";
const isEnterPage=location.pathname ==="/Teacher/EnterMarks";
const isEditPage=location.pathname ==="/Teacher/EditMarks";
const isAnalysisPage=location.pathname ==="/Teacher/Analysis";
const isCheckMarksPage=location.pathname ==="/Student/CheckMarks";
const isRankListPage=location.pathname==="/RankList";
const isDeletePage=location.pathname==="/Teacher/DeleteStudent"


   return (
    
      <div>

        <nav>
           <h1>Student Online Marks Management Portal</h1>
        </nav>

          {
          isTeacherPage || isStudentPage || isDeletePage || isRegisterPage || isAnalysisPage || isEditPage||isEnterPage ||isCheckMarksPage || isTeacherLoginPage || isRankListPage ? null : 
          <div className="Home">
            <button className="iconButtons" onClick={handleTeacher}> <FontAwesomeIcon className="icon" icon={ faPersonChalkboard } /> <h4>Teacher</h4> </button>
          <button className="iconButtons" onClick={handleStudent}><FontAwesomeIcon className="icon" icon={faChild} /><h4>Student</h4></button> 
          </div>
          }

      <Routes>
        <Route  path="/Teacher/*" element={<TeacherLogin />} />
        <Route path="/Student/*" element={<Student />} />
        <Route path="/Teacher/Register" element={<Register />} />
        <Route path="/Teacher/EnterMarks" element={<EnterMarks />} />
        <Route path="/Teacher/EditMarks" element={<EditMarks />} />
        <Route path="/Teacher/Analysis" element={<Analysis />} />
        <Route path="/Teacher/DeleteStudent" element={<DeleteStudent />} />
        <Route path="/Teacher/Home" element={<Teacher />} />
        <Route path="/RankList" element={<RankList />} />
        <Route path="/Student/CheckMarks" element={<CheckMarks />} />
      </Routes>

      </div>
      
    
   );
}

export default App;
