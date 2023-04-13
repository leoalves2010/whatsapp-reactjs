import React from "react";
import "./ChatListItem.css";

const ChatListItem = () => {
    return (
        <div className="chatListItem">
            <img
                className="chatListItem-avatar"
                src="https://www.w3schools.com/howto/img_avatar2.png"
                alt="Avatar"
            />
            <div className="chatListItem-lines">
                <div className="chatListItem-line">
                    <div className="chatListItem-name">Leonardo Dvulatk</div>
                    <div className="chatListItem-date">19:00</div>
                </div>
                <div className="chatListItem-line">
                    <div className="chatListItem-lastMsg">
                        <p>A live vai ficar no ar por quanto tempo? A live vai ficar no ar por quanto tempo?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatListItem;
