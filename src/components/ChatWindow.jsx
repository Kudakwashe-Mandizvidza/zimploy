import { AttachFile, Send } from "@mui/icons-material";
import {
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { useWeavy } from "@weavy/uikit-react";

export const ChatWindow = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  
  const weavy = useWeavy({
    url:'https://myenvironment.weavy.io',
    tokenUrl:'https://myserver.test/api/token',
  });

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([
        ...messages,
        { text: message, sender: "me", timestamp: new Date() },
      ]);
      setMessage("");
    }
  };

  return (
    <div
      style={{ position: "fixed", bottom: "0", width: "90%", margin: "20px" }}
    >
      <div style={{ maxHeight: "90vh", overflowY: "auto", padding: "10px" }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: "10px",
              textAlign: msg.sender === "me" ? "left" : "right",
            }}
          >
           
            <Paper
              elevation={3}
              style={{
                padding: "10px",
                textAlign: "left",
                borderRadius:'20px',
                color:'white',
                backgroundColor:'#1877f2',
                maxWidth:'300px',
   
              }}
            >
              {msg.text}
            </Paper>
            <Typography variant="caption" align="center" gutterBottom>
              {msg.timestamp && msg.timestamp.toLocaleTimeString()}
            </Typography>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton aria-label="attach-file" >
          <AttachFile/>
        </IconButton>
        <TextField
          label="Type a message"
          variant="outlined"
          fullWidth
          multiline
          value={message}
          onChange={handleMessageChange}
          
        />
        <IconButton aria-label="send" onClick={handleSendMessage}>
          <Send />
        </IconButton>
      </div>
    </div>
  );
};
