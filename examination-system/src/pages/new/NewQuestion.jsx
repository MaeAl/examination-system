import "./newQuestion.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const NewQuestion = () => {
  return (
    <div className="newQuestion">
        <Sidebar/>
        <div className="newQuestionContainer">
            <Navbar/>
            <div className="leftContainer">
            <div className="leftTitle">
             Add Question
            </div>
            <br />
              <form action="">
                 <label htmlFor="">Questions</label>
                 <input type="text" placeholder="question"/>
                 <h6>Input words for choices</h6>

              <label htmlFor="">Choice A</label>
              <input type="text" placeholder='Input Choice A'/>
              <label htmlFor="">Choice B</label>
              <input type="text" placeholder='Input Choice B'/>
              <label htmlFor="">Choice C</label>
              <input type="text" placeholder='Input Choice C'/>
              <label htmlFor="">Choice D</label>
              <input type="text" placeholder='Input Choice D'/>
              <label htmlFor="">Correct Answer</label>
              <input type="text" placeholder='Correct Answer'/>

              <button>Add</button>
              </form>

            </div>
        </div>
    </div>
  )
}

export default NewQuestion
