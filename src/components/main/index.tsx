import React, { useState } from "react";
import { LuTrash } from "react-icons/lu";
import "@/styles/components/main.scss";
import Button from "../button";
import Checkbox from "../checkbox";
import { MainProps } from "@/types/components/mainTypes";

export default function Main({
  setDeleteVisible,
  setAddVisible,
  toDoList,
  completedTasks,
  setToDoList,
  setCompletedTasks,
  setSelectedTask,
}: MainProps) {
  const handleDeleteClick = (task: string) => {
    setSelectedTask(task);
    setDeleteVisible(true);
  };

  const handleCheckChange = (task: string, isChecked: boolean) => {
    if (isChecked) {
      setToDoList(toDoList.filter((t) => t !== task));
      setCompletedTasks([...completedTasks, task]);
    } else {
      setCompletedTasks(completedTasks.filter((t) => t !== task));
      setToDoList([...toDoList, task]);
    }
  };

  return (
    <div className="main-container">
      <main>
        <h1>Suas tarefas de hoje</h1>

        {toDoList.length === 0 ? (
          completedTasks.length > 0 ? (
            <h2>
              Você terminou suas tarefas. Adicione novas tarefas para continuar.
            </h2>
          ) : (
            <h2>Você ainda não tem nenhuma tarefa, adicione tarefas.</h2>
          )
        ) : (
          <>
            <ul className="tasks">
              {toDoList.map((toDo) => (
                <li key={toDo}>
                  <p>
                    <Checkbox
                      task={toDo}
                      isChecked={false}
                      onCheckChange={handleCheckChange}
                    />
                    {toDo}
                  </p>
                  <LuTrash onClick={() => handleDeleteClick(toDo)} />
                </li>
              ))}
            </ul>
          </>
        )}

        <h1>Tarefas finalizadas</h1>
        {completedTasks.length === 0 ? (
          <h2>Você ainda não finalizou nenhuma tarefa.</h2>
        ) : (
          <ul className="completedTasks">
            {completedTasks.map((task) => (
              <li key={task}>
                <p>
                  <Checkbox
                    task={task}
                    isChecked={true}
                    onCheckChange={handleCheckChange}
                  />
                  {task}
                </p>
                <LuTrash onClick={() => handleDeleteClick(task)} />
              </li>
            ))}
          </ul>
        )}
      </main>

      <Button type="button" variant="save" onClick={() => setAddVisible(true)}>
        Adicionar nova tarefa
      </Button>
    </div>
  );
}
