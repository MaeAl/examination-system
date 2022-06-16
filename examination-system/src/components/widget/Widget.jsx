import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';


const Widget = ({type }) => {
    let data;

    switch(type){
        case "course":
            data={
                title: "TOTAL SUBJECT",
                isMoney:false,
                link: "View All subjects",
                icon:<AssignmentOutlinedIcon className="icon"/>,
            };
            break;

            case "exam":
                data={
                    title: "TOTAL EXAMS",
                    isMoney:false,
                    link: "View all exams",
                    icon:< AssessmentOutlinedIcon className="icon"/>,
                };
                break;
            
             case "student":
                data={
                    title: "TOTAL STUDENT",
                     isMoney:false,
                    link: "See all student",
                     icon:< AccountCircleOutlinedIcon className="icon"/>,
                };
                 break;
                     default:
                     break;

                
            
    }
  return (
<div className="widget">
    <div className="left">
       <span className="title">{data.title}</span>
       <span className="counter">213</span>
       <span className="link">{data.link}</span>
      </div>
    <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpOutlinedIcon/>
            20%
        </div>
        {data.icon}
    </div>
</div>
  )
}

export default Widget
