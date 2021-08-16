import { tasks } from "./mock";

export const getTasks = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(tasks);
    }, 2000)
  );
};
