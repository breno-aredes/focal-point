import React, { useState } from "react";
import "@/styles/components/modal.scss";
import Button from "@/components/button";
import { addModal } from "@/types/components/modalTypes";

const AddContent = ({ setAddVisible, toDoList, setToDoList }: addModal) => {
  const [taskTitle, setTaskTitle] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    event.preventDefault();
    if (taskTitle === "") {
      return;
    }

    if (taskTitle.trim()) {
      const updatedToDoList = [...toDoList, taskTitle.trim()];
      setToDoList(updatedToDoList);
      localStorage.setItem("toDoList", JSON.stringify(updatedToDoList));
      setAddVisible(false);
      setTaskTitle("");
    }
  };

  return (
    <div className="modalContent">
      <h1>Nova tarefa</h1>
      <form onSubmit={handleSubmit}>
        <label>Título</label>
        <input
          placeholder="Digite"
          value={taskTitle}
          onChange={handleInputChange}
        />
      </form>
      <div className="modalButtonContent">
        <Button
          variant="cancel"
          type="button"
          onClick={() => setAddVisible(false)}
        >
          Cancelar
        </Button>
        <Button variant="save" type="submit">
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default AddContent;
