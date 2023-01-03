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
                  title={noteItem.title}
                  content={noteItem.content}
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
                  title={noteItem.title}
                  content={noteItem.content}
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
                  title={noteItem.title}
                  content={noteItem.content}
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