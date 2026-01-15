import { useEffect, useState, useCallback } from "react";
import { getTask, type TaskData } from "../dal/api.ts";

export function useTaskDetails(
  selectedTaskId: string | null,
  boardId: string | null,
) {
  const [taskDetails, setTaskDetails] = useState<TaskData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTask = useCallback(async () => {
    if (!boardId || !selectedTaskId) return;
    setLoading(true);
    try {
      const task = await getTask(boardId, selectedTaskId);
      setTaskDetails(task);
    } catch (err) {
      console.error("Ошибка загрузки:", err);
      setTaskDetails(null);
    } finally {
      setLoading(false);
    }
  }, [selectedTaskId, boardId]);


  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  return { taskDetails, loading };
}
