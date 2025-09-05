import React, { useState, useEffect } from "react";
import socket from "../../socket";
import ChatHistory from "./miscellaneous/ChatHistory";
import MessageBar from "./miscellaneous/MessageBar";
import axios from "axios";
import { ChatState } from "../../context/ChatProvider";
import "./miscellaneous/ChatHistory.css";

function ChatWindow() {
  const { user, selectedChat } = ChatState();
  const [messages, setMessages] = useState([]);
  const [socketConnected, setSocketConnected] = useState(false);
  const ENDPOINT = "http://localhost:3001";
  let selectedChatCompare;

  //Fetches all the messages from a particular chat with the help of chat._id
  const fetchMessage = async () => {
    if (!selectedChat?._id) return;
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      };
      const { data } = await axios.get(
        `http://localhost:3001/message/${selectedChat._id}`,
        config
      );
      setMessages(data);
      socket.emit("join chat", selectedChat._id);
    } catch (err) {
      console.log(err);
    }
  };

  //To join user to a room with its user._id
  useEffect(() => {
    socket.emit("setup", user);
    socket.on("connection", () => setSocketConnected(true));
  }, []);

  //Every time when a chat is selected we fetch message of that particular chat
  useEffect(() => {
    if (!selectedChat?._id) return;
    fetchMessage();
    selectedChatCompare = selectedChat;
  }, [selectedChat]);

  //when a new message is recieved on socket add it to messages state
  useEffect(() => {
    socket.on("message recieved", (newMessageRecieved) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageRecieved.chat._id
      ) {
        //give notification
      } else {
        //console.log(newMessageRecieved);
        setMessages([...messages, newMessageRecieved]);       
      }
    });
  });
  
  //To send message and emit it to particular chat room
  const handleSend = async (text) => {
    if (!selectedChat || !selectedChat._id) {
      console.log("No chat selected");
      return;
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post(
        "http://localhost:3001/message",
        {
          content: text,
          chatId: selectedChat._id,
        },
        config
      );
      socket.emit("new message", data);
      setMessages((prev) => [...prev, data]);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
  const chatHistory = document.querySelector(".chat-history");
  if (chatHistory) {
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }
}, [messages]);

  return (
    <div className="chat-window">
      <ChatHistory messages={messages} />  
      <MessageBar onSend={handleSend} />   
    </div>                                 
  );
}

export default ChatWindow;
