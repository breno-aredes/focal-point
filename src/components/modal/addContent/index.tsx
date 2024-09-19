import React from "react";
import "@/styles/components/modal.scss";
import Button from "@/components/button";
import { addModal } from "@/types/components/modalTypes";

const AddContent = ({ setAddVisible }: addModal) => {
  return (
    <div className="modalContent">
      <h1>Nova tarefa</h1>
      <form>
        <label>Título</label>
        <input placeholder="Digite"></input>
      </form>
      <div className="modalButtonContent">
        <Button variant="cancel" onClick={() => setAddVisible(false)}>
          Cancelar
        </Button>
        <Button variant="save">Adicionar</Button>
      </div>
    </div>
  );
};

export default AddContent;
