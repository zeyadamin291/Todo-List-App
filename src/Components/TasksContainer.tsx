import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskContainer = () => {

    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("TaskContainer must be used inside TaskProvider");
    }

    const { tasks } = context;

    return (
        <div>
            {tasks.map((task, index) => (
                <div key={index} className="task">
                    <input type="checkbox" />
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    );
};

export default TaskContainer;