import React from "react";
import "./styles.css";

const MessageItem = ({ message, user }) => {
    const [time, setTime] = React.useState("");

    React.useEffect(() => {
        if (message.date > 0) {
            const d = new Date(message.date.seconds * 1000);
            let hours = String(d.getHours()).padStart(2, "0");
            let minutes = String(d.getMinutes()).padStart(2, "0");
            setTime(`${hours}:${minutes}`);
        }
    }, [message]);

    return (
        <div
            className="messageLine"
            style={{
                justifyContent:
                    user.id === message.author ? "flex-end" : "flex-start",
            }}
        >
            <div
                className="messageItem"
                style={{
                    backgroundColor:
                        user.id === message.author ? "#dcf8c6" : "#fff",
                }}
            >
                <div className="messageText">{message.body}</div>
                <div className="messageDate">{time}</div>
            </div>
        </div>
    );
};

export default MessageItem;
