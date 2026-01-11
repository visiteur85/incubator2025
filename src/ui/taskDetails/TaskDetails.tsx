
import style from 'src/ui/taskDetails/Taskdetails.module.css'
import { useTaskDetails } from 'src/bll/useTaskDetails.ts';



type PropsType = {
  taskID: string | null;
  boardedId: string | null;
};
export const TaskDetails = ({ taskID, boardedId }: PropsType) => {
  const { taskDetails, loading } = useTaskDetails(taskID, boardedId);
  return (
    <div className={style.detail}>
      <h2>Task details</h2>

      {!taskID ? (
        <p>Таска не выбрана</p>
      ) : loading ? (
        <div>Loading...</div>
      ) : taskDetails ? (
        <>
          <div>{taskDetails.attributes.boardTitle}</div>
          <div>{taskDetails.attributes.title}</div>
          <div>{taskDetails.attributes.description || "no description"}</div>
        </>
      ) : (
        <p>Ошибка загрузки</p>
      )}
    </div>
  );
};
