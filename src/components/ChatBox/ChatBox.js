import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined, Send } from '@material-ui/icons';
import React, { useState } from 'react';
import axios from './../Axios/Axios';
import './ChatBox.css';

const ChatBox = ({ messages }) => {

    const [input, setInput] = useState("")


    const sendMessage = async (e) => {
        e.preventDefault()
        await axios.post('/messages/new', {
            message: input,
            name: "Hassan",
            timeStamp: "just Now",
            received: true
        })
        setInput("");
    }


    return (
        <div className="chat-box">
            <div className="chatBox__header">
                <Avatar />

                <div className="chatBox__headerInfo">
                    <h3>Room Name</h3>
                    <p>last seen.....</p>
                </div>
                <div className="chatBox__headerIcon">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chatBox__body">
                {
                    messages.map((message, index) => (
                        <p key={index} className={`chat__message ${message.received && "chat__reciver"}`}>
                            <span className="chat-name">{message.name}</span>
                            {message.message}
                            <span className="chat_timetemp">{message.timeStamp}</span>
                        </p>
                    ))
                }
            </div>
            <div className="chatBox__footer">
                <InsertEmoticon />
                <form action="">
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message" />
                    <button onClick={sendMessage} type="submit">{<Send />}</button>
                </form>
                <Mic />
            </div>
        </div>
    );
};

export default ChatBox;