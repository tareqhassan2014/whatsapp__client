import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';


const SidebarChat = () => {
    return (
        <div className="sidebar-chat">
            <Avatar />
            <div className="sidebar-chatInfo">
                <h2>Room Name</h2>
                <p>last message</p>
            </div>
        </div>
    );
};

export default SidebarChat;