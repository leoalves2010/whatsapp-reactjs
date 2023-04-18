import React from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import CloseIcon from "@mui/icons-material/Close";
import EmojiPicker from "emoji-picker-react";
import MessageItem from "../MessageItem";

const ChatWindow = ({ user }) => {
    const recognitionSvc =
        window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new recognitionSvc();
    const body = React.useRef(null);
    const [emojiOpen, setEmojiOpen] = React.useState(false);
    const [listening, setListening] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [listMessages, setListMessages] = React.useState([
        {
            author: 123,
            body: "bla bla bla",
            date: "19:00",
        },
        {
            author: 123,
            body: "bla bla bla bla",
            date: "19:18",
        },
        {
            author: 1234,
            body: "bla bla",
            date: "19:30",
        },
        {
            author: 123,
            body: "bla bla bla",
            date: "19:00",
        },
        {
            author: 123,
            body: "bla bla bla bla",
            date: "19:18",
        },
        {
            author: 1234,
            body: "bla bla",
            date: "19:30",
        },
        {
            author: 123,
            body: "bla bla bla",
            date: "19:00",
        },
        {
            author: 123,
            body: "bla bla bla bla",
            date: "19:18",
        },
        {
            author: 1234,
            body: "bla bla",
            date: "19:30",
        },
        {
            author: 123,
            body: "bla bla bla",
            date: "19:00",
        },
        {
            author: 123,
            body: "bla bla bla bla",
            date: "19:18",
        },
        {
            author: 1234,
            body: "bla bla",
            date: "19:30",
        },
        {
            author: 123,
            body: "bla bla bla",
            date: "19:00",
        },
        {
            author: 123,
            body: "bla bla bla bla",
            date: "19:18",
        },
        {
            author: 1234,
            body: "bla bla",
            date: "19:30",
        },
        {
            author: 123,
            body: "bla bla bla",
            date: "19:00",
        },
        {
            author: 123,
            body: "bla bla bla bla",
            date: "19:18",
        },
        {
            author: 1234,
            body: "bla bla",
            date: "19:30",
        },
        {
            author: 123,
            body: "bla bla bla",
            date: "19:00",
        },
        {
            author: 123,
            body: "bla bla bla bla",
            date: "19:18",
        },
        {
            author: 1234,
            body: "bla bla",
            date: "19:30",
        },
        {
            author: 123,
            body: "bla bla bla",
            date: "19:00",
        },
        {
            author: 123,
            body: "bla bla bla bla",
            date: "19:18",
        },
        {
            author: 1234,
            body: "bla bla",
            date: "19:30",
        },
        {
            author: 123,
            body: "bla bla bla",
            date: "19:00",
        },
        {
            author: 123,
            body: "bla bla bla bla",
            date: "19:18",
        },
        {
            author: 1234,
            body: "bla bla",
            date: "19:30",
        },
        {
            author: 123,
            body: "bla bla bla",
            date: "19:00",
        },
        {
            author: 123,
            body: "bla bla bla bla",
            date: "19:18",
        },
        {
            author: 1234,
            body: "bla bla",
            date: "19:30",
        },
    ]);

    React.useEffect(() => {
        if (body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop =
                body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [listMessages]);

    const handleEmojiClick = (event) => {
        setMessage(message + event.emoji);
    };

    const handleClickMic = () => {
        recognition.onstart = () => {
            setListening(true);
        };

        recognition.onend = () => {
            setListening(false);
        };

        recognition.onresult = (event) => {
            setMessage(event.results[0][0].transcript);
        };
        recognition.start();
    };

    return (
        <div className="chatWindow">
            <div className="chatWindow-header">
                <div className="chatWindow-headerinfo">
                    <img
                        className="chatWindow-avatar"
                        src="https://www.w3schools.com/howto/img_avatar2.png"
                        alt=""
                    />
                    <div className="chatWindow-name">Leonardo Dvulatk</div>
                </div>
                <div className="chatWindow-headerbuttons">
                    <div className="chatWindow-btn">
                        <SearchIcon style={{ color: "#919191" }} />
                    </div>
                    <div className="chatWindow-btn">
                        <AttachFileIcon style={{ color: "#919191" }} />
                    </div>
                    <div className="chatWindow-btn">
                        <MoreVertIcon style={{ color: "#919191" }} />
                    </div>
                </div>
            </div>
            <div className="chatWindow-body" ref={body}>
                {listMessages.map((message, key) => (
                    <MessageItem key={key} message={message} user={user} />
                ))}
            </div>
            <div
                className="chatWindow-emojiArea"
                style={{ height: emojiOpen ? "250px" : "0px" }}
            >
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    skinTonesDisabled
                    searchDisabled
                    width="auto"
                />
            </div>
            <div className="chatWindow-footer">
                <div className="chatWindow-left">
                    <div
                        className="chatWindow-btn"
                        onClick={() => setEmojiOpen(false)}
                        style={{ width: emojiOpen ? "40px" : 0 }}
                    >
                        <CloseIcon style={{ color: "#919191" }} />
                    </div>

                    <div
                        className="chatWindow-btn"
                        onClick={() => setEmojiOpen(true)}
                    >
                        <InsertEmoticonIcon
                            style={{ color: emojiOpen ? "#009688" : "#919191" }}
                        />
                    </div>
                </div>
                <div className="chatWindow-inputArea">
                    <input
                        type="text"
                        className="chatWindow-input"
                        placeholder="Digite uma mensagem..."
                        value={message}
                        onChange={({ target }) => setMessage(target.value)}
                    />
                </div>
                <div className="chatWindow-right">
                    {message === "" && (
                        <div
                            className="chatWindow-btn"
                            onClick={handleClickMic}
                        >
                            <MicIcon
                                style={{
                                    color: listening ? "#009688" : "#919191",
                                }}
                            />
                        </div>
                    )}

                    {message !== "" && (
                        <div className="chatWindow-btn">
                            <SendIcon style={{ color: "#919191" }} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
