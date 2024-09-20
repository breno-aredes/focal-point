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
    let updatedToDoList = toDoList;
    let updatedCompletedTasks = completedTasks;

    if (toDoList.includes(selectedTask)) {
      updatedToDoList = toDoList.filter((task) => task !== selectedTask);
      setToDoList(updatedToDoList);
      localStorage.setItem("toDoList", JSON.stringify(updatedToDoList));
    } else if (completedTasks.includes(selectedTask)) {
      updatedCompletedTasks = completedTasks.filter(
        (task) => task !== selectedTask
      );
      setCompletedTasks(updatedCompletedTasks);
      localStorage.setItem(
        "completedTasks",
        JSON.stringify(updatedCompletedTasks)
      );
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
