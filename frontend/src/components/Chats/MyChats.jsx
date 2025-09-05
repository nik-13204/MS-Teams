import React, { useEffect, useState } from "react";
import ChatPreview from "./miscellaneous/ChatPreview";
import { ChatState } from "../../context/ChatProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Chat.css";


function MyChats() {
  const [loggedUser, setLoggedUser] = useState();
  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();
  const navigate = useNavigate();

  //Fetches all the chats in which the user is involved
  const fetchChat = async (token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get("http://localhost:3001/chat", config);
      setChats(data);
      //console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setLoggedUser(userInfo);
    fetchChat(userInfo.token);
  }, []);

  return (
    <div className="MsgBox">
      <div className="mychats-header">
        <div> 
          <b><p style={{fontSize:"20px"}}>Chat</p></b>
        </div>
        <div className="mychats-header-btn-row">
            <button><i className="fa-solid fa-filter"></i></button>
            <button><i className="fa-solid fa-video"></i></button>
            <button><i className="fa-solid fa-pen-to-square"></i></button>
        </div>
        
      </div>
      <div>
          <small><p>&nbsp;Recent</p></small>
        </div>
        {chats.map((chat) => {
          const otherUser = chat.users.find(
            (u) => u._id.toString() !== loggedUser._id.toString()
          );
          return (
            <ChatPreview
              key={chat._id}
              otherUser={otherUser}
              msg={chat.latestMessage}
              chat={chat}
            />
          );
        })}
    </div>
  );
}

export default MyChats;
