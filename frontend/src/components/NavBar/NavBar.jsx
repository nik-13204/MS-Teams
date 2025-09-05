import React from "react";
import "./NavBar.css";
import SearchBox from "./SearchBox";
import { ChatState } from "../../context/ChatProvider";
import { NameAvatar } from "../Avatar";

function NavBar(){
    const{user}=ChatState();
    return(
        <div className="Navbar">
            {/* <div>
                <input type="text" name="search" id="" style={{background:"transparent"}}/>
            </div> */}
            <SearchBox/>
            <div className="NavBar-options">
                <div style={{color:"white"}}><i className="fa-solid fa-ellipsis"></i></div>
               {user && <NameAvatar name={user.name}/>}
            </div>
        </div>
    );
}
export default NavBar;