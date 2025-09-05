import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleSignup = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:3001/user",
        {
          name,
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
    
     navigate("/chats");
    } catch (error) {
      
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Signup</h2>
        <label htmlFor="name"><small>Name</small></label>
      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
        name='name'
      /> 
      <label htmlFor="email"><small>Email</small></label>
      <input
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
        name='email'
      />
      <label htmlFor="password"><small>Password</small></label>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
        name='password'
      /> 
      <button onClick={handleSignup} style={styles.button}>Signup</button>
    </div>
  );
}

const styles = {
  container: {
    width: '20rem',
    padding: '1.3rem',
    backgroundColor: '#1b1b1b',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '.8rem',
    position:"absolute",
    top:"8rem",
    left:"40rem",
    boxShadow:"2px 2px 20px black"
  },
  input: {
    backgroundColor:"rgb(20,20,20)",
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    color:"#f5f5f5"
  },
  button: {
    padding: '10px',
    backgroundColor: '#6264A7',
    border: 'none',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize:"16px",
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
};
