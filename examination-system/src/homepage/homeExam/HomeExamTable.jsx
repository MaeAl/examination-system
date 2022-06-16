import "./homeExamTable.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom"

const HomeExamTable = () => {
    const rows = [
        {
          exam: "Programming Language",
          
        },
        {
        
            exam: "Hardware",
        
        
        },
        {
        
            exam: "Web System",
         
        },
        {
         
            exam: "System Administration",
         
        },
        {
         
            exam: "Application Development",
         
        },
      ];
      return (
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Exam</TableCell>
                <TableCell className="tableCell">Action</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="tableCell">{row.exam}</TableCell>
                  <TableCell className="tableCell"><div className="startButton">
                  <Link to="/available_exam/start_exam" style={{textDecoration:"none"}} className="link">
                  Start Exam
                </Link>
                    </div></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default HomeExamTable
