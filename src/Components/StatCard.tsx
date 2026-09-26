import { useState } from "react";

import "./css/statCard.css"
interface StatCardProps {
    title: string;
    count: number;
    icon: React.ReactNode;
    msg: string;
    color: string;
    percentage?: number;
}

const StatCard = ({ title, count = 0,
    icon, msg = '', color }: StatCardProps) => {
    return (
        <div className="statCard" style={{borderLeft: `3px solid ${color}` }}>
            <p id="title">{title}</p>
            <div>
                <div>
                    {count}
                    <span className="completedPercentage"></span>
                </div>
                <span className="icon">
                    {icon}
                </span>
            </div>
            <p id="msg">{msg}</p>
        </div>
    )
}

export default StatCard;