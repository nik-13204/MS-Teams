import React from "react";
import ChatOptions from "../components/Chats/miscellaneous/ChatOptions";
import MessageBar from "../components/Chats/miscellaneous/MessageBar";
import ChatWindow from "../components/Chats/ChatWindow";
import MyChats from "../components/Chats/MyChats";
import "../components/Chats/Chat.css"

export default function Chats() {
  return (
    <div className="chats-container">
      <MyChats />
      <div className="chatBox">
        <ChatOptions />
        <ChatWindow />
      </div>
    </div>
  );
}
