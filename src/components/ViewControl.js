import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function ViewControl(props) {
  return (
    <TableRow sx={{ background: "#f5f5f5", height: "56.5px"}}>
      <TableCell component="th" scope="row">
        <input
          type="checkbox"
          checked={props.showCompleted}
          onChange={(e) => props.callback(e.target.checked)}
        ></input>
      </TableCell>
      <TableCell component="th" scope="row">
        <Box>Show {props.description}</Box>
      </TableCell>
      <TableCell></TableCell>
    </TableRow>
    
  );
}
