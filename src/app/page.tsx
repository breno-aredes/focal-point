"use client";
import Header from "@/components/header";
import Main from "@/components/main";
import Modal from "@/components/modal";
import AddContent from "@/components/modal/addContent";
import DeleteContent from "@/components/modal/deleteContent";
import "@/styles/pages/home.scss";
import { useEffect, useState } from "react";

export default function Home() {
  const [addVisible, setAddVisible] = useState<boolean>(false);
  const [deleteVisible, setDeleteVisible] = useState<boolean>(false);
  const [toDoList, setToDoList] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [selectedTask, setSelectedTask] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const savedToDoList = localStorage.getItem("toDoList");
    const savedCompletedTasks = localStorage.getItem("completedTasks");

    if (savedToDoList) {
      setToDoList(JSON.parse(savedToDoList));
    }

    if (savedCompletedTasks) {
      setCompletedTasks(JSON.parse(savedCompletedTasks));
    }

    setIsLoading(false);
  }, []);

  return (
    <div className="home-container">
      <Header />

      {isLoading ? (
        <></>
      ) : (
        <Main
          setAddVisible={setAddVisible}
          setDeleteVisible={setDeleteVisible}
          toDoList={toDoList}
          completedTasks={completedTasks}
          setSelectedTask={setSelectedTask}
          setCompletedTasks={setCompletedTasks}
          setToDoList={setToDoList}
        />
      )}

      <Modal modalVisible={addVisible}>
        <AddContent
          setAddVisible={setAddVisible}
          setToDoList={setToDoList}
          toDoList={toDoList}
        />
      </Modal>

      <Modal modalVisible={deleteVisible}>
        <DeleteContent
          setDeleteVisible={setDeleteVisible}
          setToDoList={setToDoList}
          toDoList={toDoList}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          setCompletedTasks={setCompletedTasks}
          completedTasks={completedTasks}
        />
      </Modal>
    </div>
  );
}
