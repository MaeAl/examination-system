import "./datatable.scss"
import { DataGrid} from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import {Link} from "react-router-dom"



const Datatable = () => {
    const actionColumn = [{field: "action", headerName: "Action", width: 200, renderCell:()=>{
        return(
            <div className="cellAction">
                <div className="viewButton">
                <Link to="/students/userId" style={{textDecoration:"none"}} className="link">
                    View
                </Link>
                  </div>
                <div className="deleteButton">Delete</div>
            </div>
        )
    }}];
  return (
    <div className="datatable" >
      <div className="datatableTitle">
        Student
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

export default Datatable
