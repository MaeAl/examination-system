import "./homeSidebar.scss"
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
// import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import {Link} from "react-router-dom"
// import { useContext } from "react";
// import { DarkModeContext } from "../../context/darkModeContext";

const HomeSidebar = () => {
  return (
    <div className='homeSidebar'>
        <div className="top">
          <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">HOMEPAGE</span>
            </Link>
        </div>
        <hr />
        <br></br>
        <div className="center"> <span className="list">
          <ul>
            <li>
            <Link to="/available_exam" style={{textDecoration:"none"}}>
            <AssignmentOutlinedIcon className="icon"/>
              <span>Available Exams</span>
              </Link>
            </li>
            <li>
            <Link to="/exam_result" style={{textDecoration:"none"}}>
            <AssessmentOutlinedIcon className="icon"/>
              <span>Exam Result</span>
              </Link>
              </li>
              <li>
            {/* <Link to="/reports" style={{textDecoration:"none"}}>
            <SummarizeOutlinedIcon className="icon"/>
              <span>Feedback</span>
              </Link> */}
              </li>
              <li>
            <Link to="/profile" style={{textDecoration:"none"}}>
            <AccountCircleOutlinedIcon className="icon"/>
              <span>Profile</span>
              </Link>
            </li>
            {/* <li>
            <Link to="/reports" style={{textDecoration:"none"}}>
            <SummarizeOutlinedIcon className="icon"/>
              <span>Account Settings</span>
              </Link>
              </li> */}
          </ul>
            
        </span>
        </div>

        {/* <div className="bottom">
          <div className="colorOption"
           onClick={() => dispatch({type: "LIGHT"})}></div>
          <div className="colorOption"
           onClick={() => dispatch({type: "DARK"})}></div>
        
        </div> */}
    </div>
  )
}

export default HomeSidebar
