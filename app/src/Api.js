import { initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    setDoc,
    collection,
    getDocs,
    getDoc,
    updateDoc,
    arrayUnion,
    addDoc,
    onSnapshot,
} from "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const Api = {
    fbPopup: async () => {
        const auth = getAuth(app);
        const provider = new FacebookAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result;
    },
    addUser: async (user) => {
        try {
            await setDoc(doc(db, "users", user.id), {
                name: user.name,
                avatar: user.avatar,
            });
        } catch (error) {
            console.log(
                "Ocorreu um erro ao adicionar um novo usuário: ",
                error
            );
        }
    },
    getContactList: async (userId) => {
        const userList = [];

        const results = await getDocs(collection(db, "users"));
        results.forEach((user) => {
            const data = user.data();
            if (user.id !== userId)
                userList.push({
                    id: user.id,
                    name: data.name,
                    avatar: data.avatar,
                });
        });

        return userList;
    },
    addNewChat: async (user, user2) => {
        try {
            const newChat = await addDoc(collection(db, "chats"), {
                messages: [],
                users: [user.id, user2.id],
            });

            await updateDoc(doc(db, "users", user.id), {
                chats: arrayUnion({
                    chatId: newChat.id,
                    image: user2.avatar,
                    title: user2.name,
                    with: user2.id,
                }),
            });

            await updateDoc(doc(db, "users", user2.id), {
                chats: arrayUnion({
                    chatId: newChat.id,
                    image: user.avatar,
                    title: user.name,
                    with: user.id,
                }),
            });
        } catch (error) {
            console.log("Erro: " + error);
        }
    },
    onChatList: (userId, setChatList) => {
        return onSnapshot(doc(db, "users", userId), (doc) => {
            if (doc.exists) {
                if (doc.data().chats) {
                    const chats = [...doc.data().chats];

                    chats.sort((a, b) => {
                        if (
                            a.lastDateMessage === undefined ||
                            b.lastDateMessage === undefined
                        ) {
                            return -1;
                        }

                        if (
                            a.lastDateMessage.seconds <
                            b.lastDateMessage.seconds
                        ) {
                            return 1;
                        } else {
                            return -1;
                        }
                    });
                    setChatList(chats);
                }
            }
        });
    },
    onChatContent: (chatId, setListMessages, setUsers) => {
        return onSnapshot(doc(db, "chats", chatId), (doc) => {
            if (doc.exists) {
                if (doc.data().messages) {
                    setListMessages(doc.data().messages);
                    setUsers(doc.data().users);
                }
            }
        });
    },
    sendMessage: async (chatId, userId, type, body, users) => {
        let now = new Date();

        await updateDoc(doc(db, "chats", chatId), {
            messages: arrayUnion({
                author: userId,
                type,
                body,
                date: now,
            }),
        });

        for (const i in users) {
            const u = await getDoc(doc(db, "users", users[i]));
            const uData = u.data();
            if (uData.chats) {
                const chats = [...uData.chats];
                for (const e in chats) {
                    if (chats[e].chatId === chatId) {
                        chats[e].lastMessage = body;
                        chats[e].lastDateMessage = now;
                    }
                }

                await updateDoc(doc(db, "users", users[i]), {
                    chats,
                });
            }
        }
    },
};
