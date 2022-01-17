export default function TaskBanner(props) {
//   console.log(props);
  return (
    <h4>
      {props.taskItems.filter((t) => t.state).length} Complete |
      {" "}
      {props.taskItems.filter((t) => !t.state).length} To do
    </h4>
  );
}
