# MS-Teams Clone

A Microsoft Teams–like web application built with **React + Vite** for seamless team collaboration.  
It provides real-time chat, video meetings, calendar scheduling, and user authentication — all in one place.

---

## 🚀 Features

- 💬 **Real-time Chat System**

  - One-to-one and group chats
  - Chat history with options and previews
  - Message bar with instant updates

- 🎥 **Meetings**

  - Create new meetings with unique links
  - Join scheduled or instant meetings
  - Meeting side cards for quick access

- 📅 **Calendar Integration**

  - Teams-style calendar with scheduled meetings
  - Easy meeting management

- 👤 **User Authentication**

  - Sign up and login system
  - User list and search functionality

- 🖼️ **UI Components**
  - Responsive navigation bar & sidebar
  - Avatar support for users
  - Modern Teams-like design

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Styling**: CSS + custom components
- **State Management**: React Context API
- **Real-time Communication**: Socket.io
- **Build Tools**: Vite + ESLint

---

## 📂 Project Structure
```
Frontend
├── public
│   └── vite.svg
├── src
│   ├── Animation
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── Calendar
│   │   │   ├── Calendar.jsx
│   │   │   └── TeamsCalendar.css
│   │   ├── Chats
│   │   │   ├── miscellaneous
│   │   │   │   ├── ChatHistory.css
│   │   │   │   ├── ChatHistory.jsx
│   │   │   │   ├── ChatOptions.css
│   │   │   │   ├── ChatOptions.jsx
│   │   │   │   ├── ChatPreview.css
│   │   │   │   ├── ChatPreview.jsx
│   │   │   │   ├── MessageBar.css
│   │   │   │   └── MessageBar.jsx
│   │   │   ├── Chat.css
│   │   │   ├── ChatWindow.jsx
│   │   │   └── MyChats.jsx
│   │   ├── Meet
│   │   │   ├── Meet.css
│   │   │   ├── MeetLinks.jsx
│   │   │   ├── MeetingLinks.jsx
│   │   │   ├── NewMeeting.jsx
│   │   │   └── ScheduledMeetings.jsx
│   │   ├── NavBar
│   │   │   ├── NavBar.css
│   │   │   ├── NavBar.jsx
│   │   │   ├── SearchBox.jsx
│   │   │   └── UserList.jsx
│   │   ├── SideBar
│   │   │   ├── SideBar.css
│   │   │   └── SideBar.jsx
│   │   ├── authentication
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── SignUp.jsx
│   │   │   └── login.jsx
│   │   ├── common
│   │   │   ├── AppLoader.css
│   │   │   └── AppLoader.jsx
│   │   ├── Avatar.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── MeetSideCard.jsx
│   │   ├── MeetSideCard2.jsx
│   │   └── VideoCall.jsx
│   ├── config
│   │   ├── api.js
│   │   └── chatLogic.js
│   ├── context
│   │   ├── ChatProvider.jsx
│   │   └── MeetingContext.jsx
│   ├── hooks
│   ├── pages
│   │   ├── Chats.jsx
│   │   ├── Dashboard.css
│   │   ├── Dashboard.jsx
│   │   ├── Home.css
│   │   ├── Home.jsx
│   │   └── Meet.jsx
│   ├── services
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── socket.js
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

```
Server
├── Schemas
│   ├── chatModel.js
│   ├── messageModel.js
│   └── userModel.js
├── config
│   ├── db.js
│   └── generateToken.js
├── controllers
│   ├── chatControllers.js
│   ├── messageControllers.js
│   └── userControllers.js
├── middlewares
│   ├── authMiddleware.js
│   └── errorMiddlewares.js
├── routes
│   ├── chatRoutes.js
│   ├── messageRoutes.js
│   └── userRoutes.js
├── index.js
├── package-lock.json
└── package.json
```
