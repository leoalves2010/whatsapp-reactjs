import React from "react";
import "./App.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";

const App = () => {
    const [chatList, setChatList] = React.useState([
        {
            chatId: 1,
            name: "Fulando de Tal 1",
            image: "https://www.w3schools.com/howto/img_avatar2.png",
        },
        {
            chatId: 2,
            name: "Fulando de Tal 2",
            image: "https://www.w3schools.com/howto/img_avatar2.png",
        },
        {
            chatId: 3,
            name: "Fulando de Tal 3",
            image: "https://www.w3schools.com/howto/img_avatar2.png",
        },
        {
            chatId: 4,
            name: "Fulando de Tal 4",
            image: "https://www.w3schools.com/howto/img_avatar2.png",
        },
    ]);
    const [activeChat, setActiveChat] = React.useState({});

    return (
        <div className="app-window">
            <div className="sidebar">
                <header>
                    <img
                        className="header--avatar"
                        src="https://www.w3schools.com/howto/img_avatar2.png"
                        alt="Avatar"
                    />
                    <div className="header--buttons">
                        <div className="header--btn">
                            <DonutLargeIcon style={{ color: "#919191" }} />
                        </div>
                        <div className="header--btn">
                            <ChatIcon style={{ color: "#919191" }} />
                        </div>
                        <div className="header--btn">
                            <MoreVertIcon style={{ color: "#919191" }} />
                        </div>
                    </div>
                </header>
                <div className="search">
                    <div className="search--input">
                        <SearchIcon
                            fontSize="small"
                            style={{ color: "#919191" }}
                        />
                        <input
                            type="search"
                            placeholder="Procurar ou começar uma nova conversa"
                        />
                    </div>
                </div>
                <div className="chat-list">
                    {chatList.map((chat, key) => (
                        <ChatListItem
                            key={key}
                            onClick={() => setActiveChat(chatList[key])}
                        />
                    ))}
                </div>
            </div>
            <div className="content-area">
                {activeChat.chatId !== undefined && <ChatWindow />}
                {activeChat.chatId === undefined && <ChatIntro />}
            </div>
        </div>
    );
};

export default App;
