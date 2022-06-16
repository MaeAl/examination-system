import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./report.scss"
import Reportstable from "../../components/datatable/Reportstable"

const Report = () => {
   return(
       <div className="report">
           <Sidebar/>
           <div className="reportContainer">
               <Navbar/>
               <div className="titleContainer">
               <div className="reportTitle">
                   Examination Report
               </div>
               <Reportstable/>
               </div>
           </div>
       </div>

   )  
}

export default Report
