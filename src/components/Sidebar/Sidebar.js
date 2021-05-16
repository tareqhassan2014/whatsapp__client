import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat/SidebarChat';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <IconButton>
                    <Avatar src="https://avatars.githubusercontent.com/u/73466036?s=60&v=4" />
                </IconButton>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar-seach">
                <div className="sidebar-searchContainer">
                    <SearchOutlined className="MuiSvgIcon" />
                    <input type="text" placeholder="Search or start new chat" />
                </div>
            </div>
            <div className="sidebar__chatsContainer">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
};

export default Sidebar;