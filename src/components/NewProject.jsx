import { useRef } from "react";
import Input from "./Input";
function NewProject({ onAddProject }) {
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDueDate = dueDateRef.current.value;
    onAddProject({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className=" px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={titleRef} label="Title" />
        <Input ref={descRef} label="Description" isTextarea />
        <Input ref={dueDateRef} label="Due Date" />
      </div>
    </div>
  );
}

export default NewProject;
