import { IoTrashOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

interface TaskProps {
    id: number | string,
    title: string,
    isCompleted?: boolean
}

const Task = ({ id, title, isCompleted = false }: TaskProps) => {
    return (
        <div>
            <div>
                <label htmlFor="task">
                    <input type="checkbox" name="isCompleted" id="" />
                    {title}
                </label>
            </div>
            <div>
                <IoIosArrowForward />
                <IoTrashOutline />
            </div>
        </div>
    )
}

export default Task;