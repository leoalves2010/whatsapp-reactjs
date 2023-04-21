import { initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    setDoc,
    collection,
    getDocs,
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
};
