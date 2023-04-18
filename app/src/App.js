import React from "react";
import "./App.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
import NewChat from "./components/NewChat";

const App = () => {
    const [chatList, setChatList] = React.useState([
        {
            chatId: 0,
            name: "Fulando de Tal 1",
            image: "https://www.w3schools.com/howto/img_avatar2.png",
        },
        {
            chatId: 1,
            name: "Fulando de Tal 2",
            image: "https://www.w3schools.com/howto/img_avatar2.png",
        },
        {
            chatId: 2,
            name: "Fulando de Tal 3",
            image: "https://www.w3schools.com/howto/img_avatar2.png",
        },
        {
            chatId: 3,
            name: "Fulando de Tal 4",
            image: "https://www.w3schools.com/howto/img_avatar2.png",
        },
    ]);
    const [activeChat, setActiveChat] = React.useState({});
    const [user, setUser] = React.useState({
        id: 1234,
        avatar: "https://www.w3schools.com/howto/img_avatar2.png",
        name: "Leonardo Dvulatk",
    });
    const [showNewChat, setShowNewChat] = React.useState(false);

    return (
        <div className="app-window">
            <div className="sidebar">
                <NewChat
                    user={user}
                    chatList={chatList}
                    showNewChat={showNewChat}
                    setShowNewChat={setShowNewChat}
                />
                <header>
                    <img
                        className="header--avatar"
                        src={user.avatar}
                        alt={user.name}
                    />
                    <div className="header--buttons">
                        <div className="header--btn">
                            <DonutLargeIcon style={{ color: "#919191" }} />
                        </div>
                        <div
                            className="header--btn"
                            onClick={() => setShowNewChat(true)}
                        >
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
                            data={chat}
                            active={activeChat.chatId === key}
                            onClick={() => setActiveChat(chatList[key])}
                        />
                    ))}
                </div>
            </div>
            <div className="content-area">
                {activeChat.chatId !== undefined && <ChatWindow user={user} />}
                {activeChat.chatId === undefined && <ChatIntro />}
            </div>
        </div>
    );
};

export default App;
