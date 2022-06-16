import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./feedback.scss"
import Feedbacktable from "../../components/datatable/Feedbacktable"


const Feedback = () => {
   return (
       <div className="feedback">
           <Sidebar/>
           <div className="feedbackContainer">
               <Navbar/>
               <div className="titleContainer">
                   <div className="feedbackTitle"> Feedback </div>
                   <Feedbacktable/>
               </div>
           </div>
       </div>

   )
}

export default Feedback
