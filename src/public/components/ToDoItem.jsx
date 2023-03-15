import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>
        {props.text}
        <DeleteOutlinedIcon />
      </li>
    </div>
  );
}

export default ToDoItem;
