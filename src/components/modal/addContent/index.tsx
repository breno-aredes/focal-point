import React, { useState } from "react";
import "@/styles/components/modal.scss";
import Button from "@/components/button";
import { addModal } from "@/types/components/modalTypes";

const AddContent = ({ setAddVisible, toDoList, setToDoList }: addModal) => {
  const [taskTitle, setTaskTitle] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleSubmit = () => {
    if (taskTitle === "") {
      return;
    }

    if (taskTitle.trim()) {
      setToDoList([...toDoList, taskTitle.trim()]);
      setAddVisible(false);
      setTaskTitle("");
    }
  };

  return (
    <div className="modalContent">
      <h1>Nova tarefa</h1>
      <form>
        <label>Título</label>
        <input
          placeholder="Digite"
          value={taskTitle}
          onChange={handleInputChange}
        />
      </form>
      <div className="modalButtonContent">
        <Button variant="cancel" onClick={() => setAddVisible(false)}>
          Cancelar
        </Button>
        <Button variant="save" onClick={() => handleSubmit()}>
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default AddContent;
