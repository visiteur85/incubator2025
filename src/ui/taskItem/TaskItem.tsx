import type { TaskListItem } from "src/dal/api.ts";
import style from 'src/ui/taskItem/taskItem.module.css'
import clsx from "clsx"

type propsType = {
  task: TaskListItem;
  chooseTaskHandler: (taskId: string, boardId: string) => any;
  activeTaskId: string | null;
};



export const TaskItem = ({
  task,
  chooseTaskHandler,
  activeTaskId,
}: propsType) => {
  console.log('123', activeTaskId);
  console.log('456',task.id);

  const classNames = clsx(
    style.task,  // базовый класс
    style[`priority${task.attributes.priority}`],  // динамический priority (style.priority0, style.priority1 и т.д.)
    {
      [style.active]: activeTaskId && task.id === activeTaskId,  // active только если activeTaskId не null
    }
  );
  const titleClass = clsx({
    [style.notDone]: task.attributes.priority === 0,
  });
  return (
    <li
      className={classNames}
      onClick={() => chooseTaskHandler(task.id, task.attributes.boardId)}
    >
      <h3 className={titleClass}>
        Заголовок:{task.attributes.title}
      </h3>
      <h3>
        Статус:
        <input type="checkbox" checked={task.attributes.status === 2} />
      </h3>
      <h3>Дата создания задачи:{task.attributes.addedAt}</h3>
    </li>
  );
};
