import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Note from "../Note/Note";
import CreateArea from "../CreateArea/CreateArea";
import data from '../../data/tasks.json'

import './Dashboard.css'

function Dashboard() {
  let [toDoNotes, setToDoNotes] = useState(data['todo']);
  let [doingNotes, setDoingNotes] = useState(data['doing']);
  let [doneNotes, setDoneNotes] = useState(data['done']);


  function addToDoNote(newNote) {
    setToDoNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteToDoNote(id) {
    setToDoNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function addDoingNote(newNote) {
    setDoingNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteDoingNote(id) {
    setDoingNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function addDoneNote(newNote) {
    setDoneNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteDoneNote(id) {
    setDoneNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function moveNoteRight(id, info) {
    if (info === 0) {
      let note = toDoNotes[id];
      setDoingNotes(prevNotes => {
        note.info = 1;
        return [...prevNotes, note];
      })
      deleteToDoNote(id);
    }
    else if (info === 1) {
      let note = doingNotes[id];
      setDoneNotes(prevNotes => {
        note.info = 2;
        return [...prevNotes, note];
      })
      deleteDoingNote(id);
    }
  }

  function moveNoteLeft(id, info) {
    if (info === 1) {
      let note = doingNotes[id];
      setToDoNotes(prevNotes => {
        note.info = 0;
        return [...prevNotes, note];
      })
      deleteDoingNote(id);
    }
    else if (info === 2) {
      let note = doneNotes[id];
      setDoingNotes(prevNotes => {
        note.info = 1;
        return [...prevNotes, note];
      })
      deleteDoneNote(id);
    }
  }

  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <CreateArea onAdd={addToDoNote} section="todo"/>
          <ul>
            {toDoNotes.map((noteItem, index) => {
              return (
                <Note
                  key={index}
                  id={index}
                  info={0}
                  title={noteItem.title}
                  content={noteItem.content}
                  onMoveLeft={moveNoteLeft}
                  onMoveRight={moveNoteRight}
                  onDelete={deleteToDoNote}
                />
              );
            })}
          </ul>
        </div>
        <div className="container">
          <CreateArea onAdd={addDoingNote} section="doing"/>
          <ul>
            {doingNotes.map((noteItem, index) => {
              return (
                  <Note
                      key={index}
                      id={index}
                      info={1}
                      title={noteItem.title}
                      content={noteItem.content}
                      onMoveLeft={moveNoteLeft}
                      onMoveRight={moveNoteRight}
                      onDelete={deleteDoingNote}
                  />
              );
            })}
          </ul>
        </div>
        <div className="container">
          <CreateArea onAdd={addDoneNote} section="done"/>
          <ul>
            {doneNotes.map((noteItem, index) => {
              return (
                <Note
                  key={index}
                  id={index}
                  info={2}
                  title={noteItem.title}
                  content={noteItem.content}
                  onMoveLeft={moveNoteLeft}
                  onMoveRight={moveNoteRight}
                  onDelete={deleteDoneNote}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;