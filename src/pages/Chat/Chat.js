import React, { useRef, useState } from "react";
import "./Chat.css";
import useStyles from "./chatStyles";

import Input from "@material-ui/core/Input";
import SendIcon from "@material-ui/icons/Send";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyAQT4AOX3le_mUWrWwWQ8KmKnzz34jFdCA",
    authDomain: "project-h-66635.firebaseapp.com",
    projectId: "project-h-66635",
    storageBucket: "project-h-66635.appspot.com",
    messagingSenderId: "751842774317",
    appId: "1:751842774317:web:70c196d68fcd759fd5d7a4",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function Chat() {
    // const classes = useStyles();
    const [user] = useAuthState(auth);

    return (
        <div className="Chat">
            <section className="Chat_section">
                {" "}
                {user ? <ChatRoom /> : <SignIn />}
            </section>
        </div>
    );
}

function SignIn() {
    // const classes = useStyles();
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };

    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}>
            구글로 로그인 하세요
            </button>
        </>
    );
}

function ChatRoom() {
    // const classes = useStyles();
    const dummy = useRef();
    const messagesRef = firestore.collection("messages");
    const query = messagesRef.orderBy("createdAt").limit(25);

    const [messages] = useCollectionData(query, { idField: "id" });

    const [formValue, setFormValue] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
        });

        setFormValue("");
        dummy.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <main className="main">
                {messages &&
                    messages.map((msg) => (
                        <ChatMessage key={msg.id} message={msg} />
                    ))}

                <span ref={dummy}></span>
            </main>

            <form onSubmit={sendMessage} className="form" >
                <Input
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    placeholder="이야기를 나누어 보세요"
                    className="input"
                />
                <SendIcon className="button" />
                {/* <button type="submit" disabled={!formValue}>
                    
                </button> */}
            </form>
        </>
    );
}

function ChatMessage(props) {
    // const classes = useStyles();
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

    return (
        <>
            <div className={`message ${messageClass}`}>
                {console.log(messageClass)}
                <img
                    className="img"
                    src={
                        photoURL ||
                        "https://api.adorable.io/avatars/23/abott@adorable.png"
                    }
                />
                <p className="p" >{text}</p>
            </div>
        </>
    );
}

export default Chat;
