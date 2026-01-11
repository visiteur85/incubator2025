import { useState } from "react";

export const useTaskSelection = () => {
  const [taskID, setTaskID] = useState<null | string>(null);

  const [boardedId, setBoardedId] = useState<string | null>(null);

  return { taskID, boardedId, setBoardedId, setTaskID };
};
