import "./feedbacktable.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Feedbacktable = () => {
    const rows = [
        {
          student: "John Rommel Rovero",
          feedback: "Ang hihirap",
          date: "1 March",
        },
        {
        
          student: "Mae Belen Alvar",
          feedback: "Ang hihirap",
          date: "1 March",
        
        },
        {
        
          student: "Jovan Lacaba",
          feedback: "Ang hihirap",
          date: "1 March",
        },
        {
         
          student: "Gean Marie Garcia",
          feedback: "Ang hihirap",
          date: "1 March",
        },
        {
         
          student: "Rosebeth Sarmiento",
          feedback: "Ang hihirap",
          date: "1 March",
        },
      ];
      return (
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Student</TableCell>
                {/* <TableCell className="tableCell">Product</TableCell> */}
                <TableCell className="tableCell">Feedback</TableCell>
                <TableCell className="tableCell">Date</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="tableCell">{row.student}</TableCell>
                  {/* <TableCell className="tableCell">
                    <div className="cellWrapper">
                      <img src={row.img} alt="" className="image" />
                      {row.product}
                    </div>
                  </TableCell> */}
                  <TableCell className="tableCell">{row.feedback}</TableCell>
                  <TableCell className="tableCell">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default Feedbacktable

