import React from "react";
import "./styles.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Api } from "../../Api";

const NewChat = ({ user, chatList, showNewChat, setShowNewChat }) => {
    const [contactList, setContactList] = React.useState([]);

    React.useEffect(() => {
        const getUserList = async () => {
            if (user !== null) {
                let results = await Api.getContactList(user.id);
                setContactList(results);
            }
        };
        getUserList();
    }, [user]);

    return (
        <div className="newChat" style={{ left: showNewChat ? "0" : "-415px" }}>
            <div className="newChat-head">
                <div
                    className="newChat-backbutton"
                    onClick={() => setShowNewChat(false)}
                >
                    <ArrowBackIcon />
                </div>
                <div className="newChat-headtitle">Nova Conversa</div>
            </div>
            <div className="newChat-list">
                {contactList.map((contact, key) => (
                    <div className="newChat-item" key={key}>
                        <img
                            className="newChat-itemavatar"
                            src={contact.avatar}
                            alt={contact.name}
                        />
                        <div className="newChat-itemname">{contact.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewChat;
