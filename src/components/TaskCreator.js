import { useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import InputBase from '@mui/material/InputBase';

const ariaLabel = { "aria-label": "description" };

export default function TaskCreator(props) {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const updateNewTaskName = (e) => setNewTaskName(e.target.value);
  const updateNewTaskDescription = (e) => setNewTaskDescription(e.target.value);
//   console.log(props)
  const createNewTask = () => {
    props.createNewTask(newTaskName, newTaskDescription)
    setNewTaskName("");
    setNewTaskDescription("");
  };
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Button variant="text" onClick={createNewTask} sx={{minWidth:"13px"}} >
          +
        </Button>
      </TableCell>
      {/* <input type="text" value={newTask} onChange={updateNewTask}></input> */}
      <TableCell component="th" scope="row">
        <InputBase
          placeholder="Add a task Name"
          inputProps={ariaLabel}
          type="text"
          value={newTaskName}
          onChange={updateNewTaskName}
        
        />
        <InputBase
          placeholder="Description"
          inputProps={ariaLabel}
          type="text"
          value={newTaskDescription}
          onChange={updateNewTaskDescription}
        
        />
      </TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
}
