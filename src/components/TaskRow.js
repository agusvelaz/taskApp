import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';


export default function TaskRow(task) {
  // console.log(task);
  return (
    <TableRow
      key={task.task.name}
    >
      <TableCell component="th" scope="row" >
        <input
          type="checkbox"
          checked={task.task.state}
          onChange={() => task.toggleState(task.task)}
        ></input>
      </TableCell>
      <TableCell component="th" scope="row" >
        <Box>{task.task.name}</Box>
        <Box>{task.task.description}</Box>
      </TableCell>
      <TableCell component="th" scope="row" align="right">
      <Button variant="outlined" color="error" onClick={() => task.deleteTask(task.task)}>Delete</Button>
      </TableCell>
    </TableRow>
  );
}
