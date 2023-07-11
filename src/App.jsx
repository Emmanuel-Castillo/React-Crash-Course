import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import Hello from "./components/Hello";
import Modal from "./components/Modal";
import Counter from "./components/Counter";
import React, {useState, useEffect} from "react";

function App() {
  // use state
  const [showModal, setShowModal] = useState(false) 

  function onTodoDelete() {
    setShowModal(true)
    console.log('onTodoDelete()')
  }

  function onCancel() {
    setShowModal(false)
    console.log('cancel')
  }

  function onConfirm() {
    setShowModal(false)
    console.log('confirm')
  }

  // use effect

  useEffect(() => {           //callback, then dependency list
    console.log('ONLY on mount')
  },[])

  // useEffect(() => {           //callback, then dependency list
  //   console.log(`on mount AND on ${showModal} change`)
  // },[showModal])

  // useEffect(() => {           //callback, then dependency list
  //   console.log('EVERY RENDER on mount')
  // })


  return (
    <>
    <Counter></Counter>
      <Hello></Hello>
      <div className="">
        <input
          type="text"
          onChange={(event) => console.log(event.target.value)}
        />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDeleteProperty={onTodoDelete} title="Finish Frontend Simplified"></Todo>
        <Todo onTodoDeleteProperty={onTodoDelete} title="Finish Interview Section"></Todo>
        <Todo onTodoDeleteProperty={onTodoDelete} title="Land $100k job"></Todo>
      </div>
      {showModal? <Modal title="Let's do this" onConfirmProperty={onConfirm} onCancelProperty={onCancel}></Modal> : null}
    </>
  );
}

export default App;
