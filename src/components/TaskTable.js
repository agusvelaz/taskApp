import { useState, useEffect } from "react";
import TaskBanner from "./TaskBanner";
import TaskCreator from "./TaskCreator";
import TaskRow from "./TaskRow";
import ViewControl from "./ViewControl";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function TaskTable() {
  const [userName, setUserName] = useState("user");
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data != null){
      setTaskItems(JSON.parse(data))
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  // crea la tarea
  const createNewTask = (taskName, taskDescription) => {
    if (taskName !== "") {
      if (!taskItems.find((t) => t.name === taskName)) {
        setTaskItems([
          ...taskItems,
          { name: taskName, description: taskDescription, state: false },
        ]);
      }
    }
  };

  // cambia el esatdo de la tarea
  const stateTask = (task) =>
    setTaskItems(
      taskItems.map((t) =>
        t.name === task.name ? { ...t, state: !t.state } : t
      )
    );

  // borra la tarea
  const deleteTask = (task) => {
    let updateTask = taskItems.filter((tasks) => tasks.name != task.name)
    setTaskItems(updateTask);
  };

  // pinta las filas de la tabla de tareas
  const taskTableRows = (stateValue) =>
    taskItems
      .filter((tasks) => tasks.state === stateValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleState={stateTask} deleteTask={deleteTask} />
      ));

  return (
    <Box margin={3}>
      <h1>My tasks</h1>
      <TaskBanner userName={userName} taskItems={taskItems} />
      <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ background: "#f5f5f5" }}>
            <TableRow>
              <TableCell sx={{ width: "20px" }}>State</TableCell>
              <TableCell>Tasks</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TaskCreator createNewTask={createNewTask} />
            {taskTableRows(false)}
            <ViewControl
              description="Completed task"
              showCompleted={showCompleted}
              callback={(checked) => setShowCompleted(checked)}
            />
            {showCompleted && <>{taskTableRows(true)}</>}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
