import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
function NewProject({ onAddProject, onCancel }) {
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();

  const modalRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // show the error modal
      modalRef.current.open();
      return;
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDueDate,
    });
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
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className=" px-6 py-2 bg-stone-800 text-stone-50 rounded-md hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label="Title" />
          <Input ref={descRef} label="Description" isTextarea />
          <Input ref={dueDateRef} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
