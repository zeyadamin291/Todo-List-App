import { IoAddCircleOutline } from "react-icons/io5";

const NewTaskForm = () => {

    const newTask = () => {

    }

    return (
        <form>
            <input type="text" name="Task" id="addTask"
                placeholder="Enter a new task" />
            <button>
                <IoAddCircleOutline />
                Add Task
            </button>
        </form>
    )

}

export default NewTaskForm;