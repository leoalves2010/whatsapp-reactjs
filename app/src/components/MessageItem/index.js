import React from "react";
import "./styles.css";

const MessageItem = ({ message, user }) => {
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
                <div className="messageDate">{message.date}</div>
            </div>
        </div>
    );
};

export default MessageItem;
