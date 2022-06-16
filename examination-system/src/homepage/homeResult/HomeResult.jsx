import "./homeResult.scss"
import HomeSidebar from '../homeSidebar/HomeSidebar'
import HomeNavbar from '../homeNavbar/HomeNavbar'
import ResultTable from "./ResultTable"
const HomeResult = () => {
  return (
    <div className="homeResult">
        <HomeSidebar/>
        <div className="homeResultContainer">
            <HomeNavbar/>
            <div className="titleContainer">
            <div className="homeTitle">Exam Results</div>
            <ResultTable/>
          </div>
        </div>

    </div>
  )
}

export default HomeResult
