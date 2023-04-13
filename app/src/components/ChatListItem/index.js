import React from "react";
import "./styles.css";

const ChatListItem = ({ onClick, active, data }) => {
    return (
        <div
            className={`chatListItem ${active ? "active" : ""}`}
            onClick={onClick}
        >
            <img
                className="chatListItem-avatar"
                src={data.image}
                alt={data.name}
            />
            <div className="chatListItem-lines">
                <div className="chatListItem-line">
                    <div className="chatListItem-name">{data.name}</div>
                    <div className="chatListItem-date">19:00</div>
                </div>
                <div className="chatListItem-line">
                    <div className="chatListItem-lastMsg">
                        <p>
                            A live vai ficar no ar por quanto tempo? A live vai
                            ficar no ar por quanto tempo?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatListItem;
