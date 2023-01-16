import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom"

import "./CreateTask.css"

function CreateArea(props) {

  let [isExpanded, setExpanded] = useState(false);

  const [task, setTask] = useState({
    name: "",
    description: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setTask(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitTask(event) {
    props.onAdd();
    setTask({
      name: "",
      description: ""
    });
    setExpanded(false);
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="task">
      <form className="create-note">
        {isExpanded && <input
          name="name"
          onChange={handleChange}
          value={task.name}
          placeholder="Title"
          id="task-name"
        />}
        <textarea
          name="description"
          onClick={expand}
          onChange={handleChange}
          value={task.description}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          id="task-description"
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitTask}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
      <ul></ul>
    </div>
  );
}

export default CreateArea;
