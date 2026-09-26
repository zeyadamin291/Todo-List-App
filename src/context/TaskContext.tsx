import { createContext, useState } from "react";

export type Task = {
    title: string;
    description: string;
};

type TaskContextType = {
    tasks: Task[];
    addTask: (task: Task) => void;
};

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task: Task) => {
        setTasks(prevTasks => [...prevTasks, task]);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask }}>
            {children}
        </TaskContext.Provider>
    );
};