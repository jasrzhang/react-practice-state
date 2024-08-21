import { useState, useRef } from "react";
import Modal from "./Modal";

function NewTasks({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modalRef = useRef();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    setEnteredTask("");
    if (enteredTask.trim() === "") {
      modalRef.current.open();
      return;
    }
    onAddTask(enteredTask);
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700  my-4">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">
          Opps... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every field
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          onChange={handleChange}
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          value={enteredTask}
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
}

export default NewTasks;
