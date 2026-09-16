
interface StatCardProps {
    title: string;
    count: number;
    icon: React.ReactNode;
    msg: string;
    color?: 'primary' | 'success' | 'warning' | 'danger'; // ضفنا اللون عشان نغير لون كل كارد
}

const StatCard = ({ title, count = 0,
    icon, msg = '', color}: StatCardProps) => {
    return (
        <div style={{

        }}>
            <p>{title}</p>
            <div>
                {count}
                <span>
                    {icon}
                </span>
            </div>
            <p>{msg}</p>
        </div>
    )
} 

export default StatCard