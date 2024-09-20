import React from "react";
import "@/styles/components/modal.scss";
import { deleteModal } from "@/types/components/modalTypes";
import Button from "@/components/button";

const DeleteContent = ({
  setDeleteVisible,
  toDoList,
  setToDoList,
  completedTasks,
  setCompletedTasks,
  selectedTask,
  setSelectedTask,
}: deleteModal) => {
  const handleConfirmDelete = () => {
    if (toDoList.includes(selectedTask)) {
      setToDoList(toDoList.filter((task) => task !== selectedTask));
    } else if (completedTasks.includes(selectedTask)) {
      setCompletedTasks(completedTasks.filter((task) => task !== selectedTask));
    }

    setDeleteVisible(false);
    setSelectedTask("");
  };

  return (
    <div className="modalContent">
      <h1>Deletar tarefa</h1>
      <p>Tem certeza que você deseja deletar essa tarefa?</p>
      <div className="modalButtonContent">
        <Button variant="cancel" onClick={() => setDeleteVisible(false)}>
          Cancelar
        </Button>
        <Button variant="delete" onClick={handleConfirmDelete}>
          Deletar
        </Button>
      </div>
    </div>
  );
};

export default DeleteContent;
