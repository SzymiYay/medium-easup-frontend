import React from "react";
import DeleteIcon from "@material-ui/icons/Delete"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import './Note.css'

function Note(props) {

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <button>
        <ArrowCircleRightIcon />
      </button>
      <button>
        <ArrowCircleLeftIcon />
      </button>
    </div>
  );
}

export default Note;