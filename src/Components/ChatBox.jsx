import React, { useEffect, useRef, useState } from 'react';
import TextMessage from './TextMessage';
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from '../Firebase/firebase.config';


const ChatBox = () => {
    const [messages, setMessages] = useState([])
    const messageEndRef = useRef()
    const scrollToBottom = () => {
        messageEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(scrollToBottom, [messages])
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
                // console.log(doc.data());
                console.log(messages);
                setMessages(messages)
            });
        });
        return () => unsubscribe;
    }, [])

    return (
        <div className='pt-16 pb-44 lg:px-32'>

            {
                messages.map(message => <TextMessage key={message.id} message={message}></TextMessage>)
            }
            <div ref={messageEndRef}></div>

        </div>
    );
};

export default ChatBox;