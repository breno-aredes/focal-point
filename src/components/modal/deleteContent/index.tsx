import React from "react";
import "@/styles/components/modal.scss";
import { deleteModal } from "@/types/components/modalTypes";
import Button from "@/components/button";

const DeleteContent = ({ setDeleteVisible }: deleteModal) => {
  return (
    <div className="modalContent">
      <h1>Deletar tarefa</h1>
      <p>Tem certeza que você deseja deletar essa tarefa?</p>
      <div className="modalButtonContent">
        <Button variant="cancel" onClick={() => setDeleteVisible(false)}>
          Cancelar
        </Button>
        <Button variant="delete">Adicionar</Button>
      </div>
    </div>
  );
};

export default DeleteContent;
