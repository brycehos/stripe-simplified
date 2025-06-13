"use client"

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function Home() {
  const tasks = useQuery(api.tasks.getAllTasks);
  return (
    <>
      <h1>All tasks in db</h1>
      {tasks?.map((task) => (
        <div key={task._id}>
          <h2>
            {task.text} = is completed: {task.isCompleted ? "true" : "false"}
          </h2>
        </div>))}
    </>
  );
}
