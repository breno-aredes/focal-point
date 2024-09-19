import { LuTrash } from "react-icons/lu";

import "@/styles/components/main.scss";
import Button from "../button";
import Checkbox from "../checkbox";
import { MainProps } from "@/types/components/mainTypes";

export default function Main({ setDeleteVisible, setAddVisible }: MainProps) {
  return (
    <div className="main-container">
      <main>
        <h1>Suas tarefas de hoje</h1>

        <ul className="tasks">
          <li>
            <p>
              <Checkbox /> Task
            </p>
            <LuTrash onClick={() => setDeleteVisible(true)} />
          </li>
          <li>
            <p>
              <Checkbox /> Tasks 1
            </p>
            <LuTrash />
          </li>
          <li>
            <p>
              <Checkbox /> Tasks 2
            </p>
            <LuTrash />
          </li>
        </ul>
        <h1>Tarefas finalizadas</h1>
        <ul className="completTasks">
          <li>
            <p>
              <Checkbox /> completTasks
            </p>
            <LuTrash />
          </li>
        </ul>
      </main>

      <Button type="button" variant="save" onClick={() => setAddVisible(true)}>
        Adicionar nova tarefa
      </Button>
    </div>
  );
}
