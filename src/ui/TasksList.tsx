import { TaskItem } from "src/ui/taskItem/TaskItem.tsx";
import { useTasks } from "../bll/useTasks.ts";

type PropsType = {
  taskID: string | null;
  setTaskID: (taskID: string | null) => void;
  setBoardedId: (boardedId: string | null) => void;
};

export const TasksList = ({ taskID, setTaskID, setBoardedId }: PropsType) => {
  const { tasks } = useTasks();
  const onResetSelectionHandler = () => {
    setTaskID(null);
  };
  const onChooseTaskHandler = async (taskId: string, boardId: string) => {
    setTaskID(taskId);
    setBoardedId(boardId);
  };
  if (!tasks) return <>Loading...</>;
  if (tasks && tasks.length === 0) return <>Задачи отсутствуют</>;
  return (
    <div>
      <button onClick={onResetSelectionHandler}>сбросить выделение</button>
      <ul>
        {tasks.map((task: any) => (
          <TaskItem
            key={task.id}
            task={task}
            activeTaskId={taskID}
            chooseTaskHandler={onChooseTaskHandler}
          />
        ))}
      </ul>
    </div>
  );
};
