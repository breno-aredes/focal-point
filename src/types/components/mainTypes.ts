export interface MainProps {
  setDeleteVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setAddVisible: React.Dispatch<React.SetStateAction<boolean>>;
  toDoList: string[];
  completedTasks: string[];
  setSelectedTask: React.Dispatch<React.SetStateAction<string>>;
  setToDoList: React.Dispatch<React.SetStateAction<string[]>>;
  setCompletedTasks: React.Dispatch<React.SetStateAction<string[]>>;
}
