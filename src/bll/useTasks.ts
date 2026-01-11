import { useEffect, useState } from "react";
import { getTasks, type TaskListItem } from "../dal/api.ts";

export const useTasks = () => {
  const [tasks, setTasks] = useState<TaskListItem[] | null>(null);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getTasks();
        setTasks(tasks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, []);
  return { tasks, setTasks };
};
