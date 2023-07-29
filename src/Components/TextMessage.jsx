import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthPorvider';

const TextMessage = ({ message }) => {
    const { user } = useContext(AuthContext)
    console.log(user);
    console.log(message.text)
    return (
        <div>
            <div className={`chat ${message.uid === user.uid ?"chat-end":"chat-start"}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={message.avatar || 'https://randomuser.me/api/portraits/lego/7.jpg'} />
                    </div>
                </div>
                <div className="chat-header">
                    {message.name}
                </div>
                <div className="chat-bubble">{message.text}</div>
                <div className="chat-footer opacity-50">
                    Delivered
                </div>
            </div>

        </div>
    );
};

export default TextMessage;