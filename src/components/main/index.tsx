import { LuTrash } from "react-icons/lu";

import "@/styles/components/main.scss";
import Button from "../button";

export default function Main() {
  return (
    <div className="main-container">
      <main>
        <h1>Suas tarefas de hoje</h1>

        <ul className="tasks">
          <li>
            <p>Tasks</p>
            <LuTrash />
          </li>
          <li>
            <p>Tasks 1</p> <LuTrash />
          </li>
          <li>
            <p>Tasks 2</p> <LuTrash />
          </li>
        </ul>
        <h1>Tarefas finalizadas</h1>
        <ul className="completTasks">
          <li>
            <p>completTasks</p> <LuTrash />
          </li>
        </ul>
      </main>

      <Button type="save">Adicionar nova tarefa</Button>
    </div>
  );
}
