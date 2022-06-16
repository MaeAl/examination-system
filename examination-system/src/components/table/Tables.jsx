import "./tables.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Tables = () => {

  const rows = [
    {
      id: 2018101356,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      student: "John Rommel Rovero",
      date: "1 March",
      exam: "Programming Language",
      score: 69,
      status: "Passed",
    },
    {
      id: 2018101354,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      student: "Mae Belen Alvar",
      date: "1 March",
      exam: "Web System and Technologies",
      score: 95,
      status: "Passed",
    },
    {
      id: 2018105643,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      student: "Jovan Lacaba",
      date: "1 March",
      exam: "Hardware",
      score: 75,
      status: "Passed",
    },
    {
      id: 2018145632,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      student: "Gean Marie Garcia",
      date: "1 March",
      exam: "Foreign Language",
      score: 67,
      status: "Passed",
    },
    {
      id: 2018564324,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      student: "Rosebeth Sarmiento",
      date: "1 March",
      exam: "Mobile and Application development",
      score: 100,
      status: "Passed",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Student ID</TableCell>
            {/* <TableCell className="tableCell">Product</TableCell> */}
            <TableCell className="tableCell">Student</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Exam</TableCell>
            <TableCell className="tableCell">Score</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              {/* <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell> */}
              <TableCell className="tableCell">{row.student}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.exam}</TableCell>
              <TableCell className="tableCell">{row.score}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables
