import { IoAddCircleOutline } from "react-icons/io5";
import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const NewTaskForm = () => {

    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("NewTaskForm must be used inside TaskProvider");
    }

    const { addTask } = context;

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const targetData = new FormData(e.currentTarget);

        const newTask = {
            title: String(targetData.get("task")),
            description: String(targetData.get("description")),
        };

        if (newTask.title !== '') {
            addTask(newTask);
        }
        e.currentTarget.reset();
    };

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="task"
                id="addTask"
                placeholder="Enter a new task"
            />

            <input
                type="text"
                hidden
                name="description"
                id="description"
                placeholder="Task description"
            />

            <button type="submit">
                <IoAddCircleOutline />
                Add Task
            </button>

        </form>
    );
};

export default NewTaskForm;