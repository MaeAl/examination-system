import "./resultTable.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ResultTable = () => {
    const rows = [
        {
          exam: "Programming Language",
          score: "90",
          rating:"90%",
          
        },
        {
        
            exam: "Hardware",
            score: "100",
            rating:"100%",
        
        
        },
        {
        
            exam: "Web System",
            score: "80",
            rating:"80%"
         
        },
        {
         
            exam: "System Administration",
            score: "50",
            rating:"75%",
         
        },
        {
         
            exam: "Application Development",
            score: "90",
            rating:"90%",
         
        },
      ];
      return (
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Exam</TableCell>
                <TableCell className="tableCell">Scores</TableCell>
                <TableCell className="tableCell">Ratings</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="tableCell">{row.exam}</TableCell>
                  <TableCell className="tableCell">{row.score}</TableCell>
                  <TableCell className="tableCell">{row.rating}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default ResultTable
