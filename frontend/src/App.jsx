import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import Chats from "./pages/Chats";
import SimpleCalendar from "./components/Calendar/Calendar";
import NewMeeting from "./components/Meet/NewMeeting";
import { MeetingProvider } from "./context/MeetingContext";
import Meet from "./pages/Meet";
import Login from "./components/authentication/login";
import Signup from "./components/authentication/SignUp";
import "./App.css";

function App() {
  return (
    <MeetingProvider>
      <div className="app-container">
        <SideBar />
        <div className="main-content">
          <NavBar />
          <div className="page-content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<Signup />} />
              <Route path="/chats" element={<Chats />} />
              <Route path="/calendar" element={<SimpleCalendar />} />
              <Route path="/calendar/new" element={<NewMeeting />} />
              <Route path="/meet" element={<Meet />} />
            </Routes>
          </div>
        </div>
      </div>
    </MeetingProvider>
  );
}

export default App;
