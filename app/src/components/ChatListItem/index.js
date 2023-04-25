import React from "react";
import "./styles.css";

const ChatListItem = ({ onClick, active, data }) => {
    const [time, setTime] = React.useState("");

    React.useEffect(() => {
        if (data.lastDateMessage > 0) {
            const d = new Date(data.lastDateMessage.seconds * 1000);
            let hours = String(d.getHours()).padStart(2, "0");
            let minutes = String(d.getMinutes()).padStart(2, "0");
            setTime(`${hours}:${minutes}`);
        }
    }, [data]);

    return (
        <div
            className={`chatListItem ${active ? "active" : ""}`}
            onClick={onClick}
        >
            <img
                className="chatListItem-avatar"
                src={data.image}
                alt={data.title}
            />
            <div className="chatListItem-lines">
                <div className="chatListItem-line">
                    <div className="chatListItem-name">{data.title}</div>
                    <div className="chatListItem-date">{time}</div>
                </div>
                <div className="chatListItem-line">
                    <div className="chatListItem-lastMsg">
                        <p>{data.lastMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatListItem;
