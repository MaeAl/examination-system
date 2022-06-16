import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
// import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import {Link} from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
        <div className="top">
          <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">OEMS</span>
            </Link>
        </div>
        <hr />
        <div className="center"> <span className="list">
          <ul>
            <li>
            <Link to="/" style={{textDecoration:"none"}}>
              <DashboardIcon className="icon"/>
              <span>Dashboard</span>
              </Link>
            </li>
            <li>
            <Link to="/subject" style={{textDecoration:"none"}}>
            <AssignmentOutlinedIcon className="icon"/>
              <span>Subject</span>
              </Link>
            </li>
            <li>
            <Link to="/exam" style={{textDecoration:"none"}}>
            <AssessmentOutlinedIcon className="icon"/>
              <span>Exam</span>
              </Link>
              </li>
              <li>
            <Link to="/students" style={{textDecoration:"none"}}>
            <AccountCircleOutlinedIcon className="icon"/>
              <span>Students</span>
              </Link>
            </li>
            <li>
            <Link to="/reports" style={{textDecoration:"none"}}>
            <SummarizeOutlinedIcon className="icon"/>
              <span>Reports</span>
              </Link>
              </li>
            {/* <li>
            <Link to="/feedback" style={{textDecoration:"none"}}>
            <ChatOutlinedIcon className="icon"/>
              <span>Feedback</span>
              </Link>
              </li> */}
          </ul>
            
        </span>
        </div>

        <div className="bottom">
          <div className="colorOption"
           onClick={() => dispatch({type: "LIGHT"})}></div>
          <div className="colorOption"
           onClick={() => dispatch({type: "DARK"})}></div>
        
        </div>
    </div>
  )
}

export default Sidebar
