import { ReactNode } from "react";

export interface ModalProps {
  modalVisible: boolean;
  children?: ReactNode;
}

export interface addModal {
  setAddVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setToDoList: React.Dispatch<React.SetStateAction<string[]>>;
  toDoList: string[];
}

export interface deleteModal {
  setDeleteVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setToDoList: React.Dispatch<React.SetStateAction<string[]>>;
  toDoList: string[];
  selectedTask: string;
  setSelectedTask: React.Dispatch<React.SetStateAction<string>>;
  setCompletedTasks: React.Dispatch<React.SetStateAction<string[]>>;
  completedTasks: string[];
}
