import { ReactNode } from "react";

export interface ModalProps {
  modalVisible: boolean;
  children?: ReactNode;
}

export interface addModal {
  setAddVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface deleteModal {
  setDeleteVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
