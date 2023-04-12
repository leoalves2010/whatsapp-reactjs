import React from "react";
import "./App.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const App = () => {
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
                <div className="search">Search</div>
                <div className="chat-list">Chat List</div>
            </div>
            <div className="content-area">Content Area</div>
        </div>
    );
};

export default App;
