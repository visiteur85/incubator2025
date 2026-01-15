// Базовые общие поля
type TaskAttributesBase = {
  id: string;
  title: string;
  boardId: string;
  status: number;
  priority: number;
  addedAt: string;
};

// Полный тип для детальной задачи
type TaskAttributesFull = TaskAttributesBase & {
  description: string | null;
  boardTitle: string;
  order: number;
  startDate: string | null;
  deadline: string | null;
  updatedAt: string;
  attachments: string[];
};

export type TaskData = {
  id: string;
  type: "tasks";
  attributes: TaskAttributesFull;
};

type TaskAttributesList = TaskAttributesBase & {
  attachmentsCount: number;
};

export type TaskListItem = {
  id: string;
  type: "tasks";
  attributes: TaskAttributesList;
};

import { API_KEY, BASE_URL } from "../constants.ts";

export const getTask = async (
  boardId: string | null,
  taskID: string,
): Promise<TaskData> => {
  try {
    const response = await fetch(
      `${BASE_URL}boards/${boardId}/tasks/${taskID}`,
      {
        headers: {
          "api-key": API_KEY,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    return json.data as TaskData;
  } catch (error) {
    console.error("Ошибка загрузки детальной информации:", error);
    throw error;
  }
};

export const getTasks = async (): Promise<TaskListItem[]> => {
  try {
    const response = await fetch(`${BASE_URL}/boards/tasks`, {
      headers: {
        "api-key": API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error("Ошибка загрузки списка задач:", error);
    throw error;
  }
};
