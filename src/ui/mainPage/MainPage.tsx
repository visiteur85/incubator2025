import "../../App.css";
import { TasksList } from "../../ui/TasksList.tsx";

import { useTaskSelection } from "../../bll/useTaskSelection.ts";
import style from "../mainPage/MainPage.module.css";
import { TaskDetails } from "../taskDetails/TaskDetails.tsx";

export function MainPage() {
  const { taskID, boardedId, setBoardedId, setTaskID } = useTaskSelection();
  return (
    <div>
      <div className={style.element}>
        <TasksList
          taskID={taskID}
          setTaskID={setTaskID}
          setBoardedId={setBoardedId}
        />
        <TaskDetails boardedId={boardedId} taskID={taskID} />
      </div>
    </div>
  );
}
