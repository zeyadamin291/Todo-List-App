import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";


import './css/tasksContainer.css'
const TaskContainer = () => {

    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("TaskContainer must be used inside TaskProvider");
    }

    const { tasks } = context;

    return (
        <section className="tasksContainer">
            <div className="tasksContainerHeader">
                <div>
                    <p>Tasks</p>
                    <span className="tasksNumber">0</span>
                </div>
                <p>Click checkbox to complete</p>
            </div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <div key={index} className="task">
                        <div className="liftSide">
                            <input type="checkbox" />
                            <p>{task.title}</p>
                        </div>
                        <div className="rightSide">
                            <MdKeyboardArrowRight />
                            <FaRegTrashAlt />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TaskContainer;