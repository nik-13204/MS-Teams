import React, { useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { ChatState } from "../../context/ChatProvider";
import MyChats from "../Chats/MyChats";
import axios from "axios";

function SideBar() {
  
  return (
    <>
      <div className="sideBar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ESQjRXbHvnHbwtlqKUNDzUFDAG8tDWZFAw&s" />
        <div className="sidebar-icons">
          <Link to="http://localhost:5173/chats" className="sidebar-link">
            <i className="icons fa-solid fa-comment"></i>
            <p>&nbsp; Chats</p>
          </Link>
        </div>

        <div className="sidebar-icons">
          <Link to="http://localhost:5173/meet" className="sidebar-link">
            <i className="icons fa-solid fa-video"></i>
            <p>&nbsp;&nbsp;Meet</p>
          </Link>
        </div>
        <div className="sidebar-icons">
          <i className="icons fa-solid fa-people-group"></i>
          <p>Community</p>
        </div>
        <div className="sidebar-icons">
          <Link to="http://localhost:5173/calendar" className="sidebar-link">
            <i className="icons fa-solid fa-calendar-days"></i>              
            <p>Calendar</p>
          </Link>
        </div>

        <div style={{fontSize:"clamp(1rem, 1vw, 1.5rem)"}} className="sidebar-icons">
          <Link to="http://localhost:5173/dashboard" className="sidebar-link">
          <i className="fa-solid fa-bell"></i>
          <p>Activity</p>
          </Link>
        </div>
      </div>
        
    </>
  );
}

export default SideBar;
