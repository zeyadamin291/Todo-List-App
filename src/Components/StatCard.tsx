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
            <p className="statTitle">{title}</p>
            <div className="stats">
                <div>
                    {count}
                    <span className="completedPercentage"></span>
                </div>
                <span className="icon" style={{
                    color: color,
                    backgroundColor: `color-mix(in srgb, ${color} 10%, transparent)`
                }}>
                    {icon}
                </span>
            </div>
            <p className="msg">{msg}</p>
        </div>
    )
}

export default StatCard;