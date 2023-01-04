import React from "react";
import DeleteIcon from "@material-ui/icons/Delete"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import './Note.css'

function Note(props) {

  function handleClick() {
    props.onDelete(props.id);
  }

  function moveRight() {
    props.onMoveRight(props.id, props.info);
  }

  function moveLeft() {
    props.onMoveLeft(props.id, props.info);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <button onClick={moveRight}>
        <ArrowCircleRightIcon />
      </button>
      <button onClick={moveLeft}>
        <ArrowCircleLeftIcon />
      </button>
    </div>
  );
}

export default Note;