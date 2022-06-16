import "./examtable.scss"
import { DataGrid} from '@mui/x-data-grid';
import { examColumns, userRows } from "../../examtablesource";
import {Link} from "react-router-dom"

const Examtable = () => {
    const actionColumn = [{field: "action", headerName: "Action", width: 200, renderCell:()=>{
        return(
            <div className="cellAction">
                <div className="manageButton">
                <Link to="/exam/manage_exam" style={{textDecoration:"none"}} className="link">
                    Manage
                </Link>
                </div>
                <div className="deleteButton">Delete</div>
            </div>
        )
    }}];
    return (
        <div className="examtable" >
            <div className="examtableTitle">
                Exam
                <Link to="/exam/new_exam" style={{textDecoration:"none"}} className="link">
                    Add new
                </Link>
            </div>
        <DataGrid
        className="datagrid"
          rows={userRows}
          columns={examColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    )
}

export default Examtable
