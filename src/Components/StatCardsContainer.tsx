import StatCard from "./StatCard"
import './css/statCardsContainer.css'
import { LuSquareMenu } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";

const StatCardsContainer = () => {
    return (
        <ul className="statCardsContainer">
            <li>
                <StatCard title="TOTAL TASKS" count={0} msg="All recorded items" color="#4F46E5"
                    icon={
                        <div>
                            <LuSquareMenu className="statIcon" />
                        </div>
                    } />
            </li>
            <li>
                <StatCard title="TOTAL TASKS" count={0} msg="All recorded items" color="#10B981" icon={
                    <div >
                        <FaRegCheckCircle className="statIcon" />
                    </div>
                } />
            </li>
            <li>
                <StatCard title="TOTAL TASKS" count={0} msg="All recorded items" color="#F59E0B" icon={
                    <div>
                        <FaBusinessTime className="statIcon" />
                    </div>
                } />
            </li>
        </ul>
    )
}

export default StatCardsContainer;