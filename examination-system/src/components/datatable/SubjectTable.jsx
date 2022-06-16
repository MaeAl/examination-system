import "./subjectTable.scss"
import { DataGrid} from '@mui/x-data-grid';
import { userColumns, userRows } from "../../subjecttablesource";


const SubjectTable = () => {
    const actionColumn = [{field: "action", headerName: "Action", width: 150, renderCell:()=>{
        return(
            <div className="cellAction">
                <div className="updateButton">Update</div>
                <div className="deleteButton">Delete</div>
            </div>
        )
    }}];
    return (
        <div className="subjecttable" >
          <div className="subjecttableTitle">
        List of Subjects
      </div>
        <DataGrid
        className="datagrid"
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    )
}

export default SubjectTable
