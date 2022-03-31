import React, { useState } from 'react';
import './MessangerChat.css';
import Conversation from './Conversation/Conversation';
import Message from './Message/Message';
import ChatOnline from './ChatOnline/ChatOnline';
import useAuth from './../Components/Hooks/UseFirebase/useAuth';
const MessangerChat = () => {
    const {user}=useAuth()
    const[conversations,setConversations]=useState([])
    console.log(user.email);
    return (
        <div>
            <div className="messenger">
    <div className="chatMenu">
        <div className="chatMenuWrapper">
            <input className='chatMenuInput' type="search" placeholder='Search Your Friends' id="" />
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>

        </div>
    </div>
    <div className="chatBox">
        <div className="chatBoxWrapper">
            <div className="chatBoxTop">
                <Message></Message>
                <Message own={true}></Message>
                <Message></Message>
                <Message own={true}></Message>
                <Message own={true}></Message>
                <Message></Message>
                <Message own={true}></Message>
                <Message></Message>
                <Message></Message>
                <Message></Message>
            </div>
            <div className="chatBoxBottom">
                <textarea className='chatMessageInput' placeholder='Write Something...'></textarea>
                <button className='chatSubmitButton'>Send</button>
            </div>
        </div>
    </div>
    <div className="chatonline">
        <div className="chatOnlineWrapper">
            <ChatOnline></ChatOnline>
            <ChatOnline></ChatOnline>
            <ChatOnline></ChatOnline>
            <ChatOnline></ChatOnline>
        </div>
    </div>
</div>
        </div>
    );
};

export default MessangerChat;