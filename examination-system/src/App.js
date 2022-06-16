import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { userInputs } from "./formSource";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Subject from "./pages/subject/Subject";
import Exam from "./pages/exam/Exam";
import Report from "./pages/reports/Report";
import Feedback from "./pages/feedback/Feedback";
import HomePage from "./homepage/homePage/HomePage";
import HomeExam from "./homepage/homeExam/HomeExam";
import Register from "./homepage/register/Register";
import Login from "./homepage/login/Login";
import ManageExam from "./pages/manage/ManageExam";
import NewExam from "./pages/new/NewExam";
import StartExam from "./homepage/startExam/StartExam";
import HomeProfile from "./homepage/homeProfile/HomeProfile";
import EditProfile from "./homepage/editProfile/EditProfile";
import NewQuestion from "./pages/new/NewQuestion";
import HomeResult from "./homepage/homeResult/HomeResult";


function App() {

  const {darkMode} = useContext(DarkModeContext)
  return (
   <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="students">
          <Route index element={<List/>}/>
          <Route path=":userId" element={<Single/>}/>
          <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
          </Route>
          <Route path = "subject">
            <Route index element={<Subject/>}/>
            </Route>
            <Route path = "register">
            <Route index element={<Register/>}/>
            </Route>
            <Route path = "login">
            <Route index element={<Login/>}/>
            </Route>
            <Route path = "exam">
            <Route index element={<Exam/>}/>
            <Route path="manage_exam" element={<ManageExam/>}/>
            <Route path="new_exam" element={<NewExam/>}/>
            <Route path="manage_exam/add_question" element={<NewQuestion/>}/>
            </Route>
            <Route path = "reports">
            <Route index element={<Report/>}/>
            </Route>
            <Route path = "feedback">
            <Route index element={<Feedback/>}/>
            </Route>
            <Route path = "home">
            <Route index element={<HomePage/>}/>
            </Route>
            <Route path = "available_exam">
            <Route index element={<HomeExam/>}/>
            <Route path="start_exam" element={<StartExam/>}/>
            </Route>
            <Route path = "profile">
            <Route index element={<HomeProfile/>}/>
            <Route path="edit_profile" element={<EditProfile/>}/>
            </Route>
            <Route path = "exam_result">
            <Route index element={<HomeResult/>}/>
            </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
   </div>
  );
}

export default App;
