import { Avatar, Badge, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const truncate = (text, limit) => {
  if (text.length > limit) {
    return text.substring(0, limit - 3) + "...";
  }
  return text;
};

const MessageItem = ({
  senderName,
  avatarUrl,
  date,
  message,
  messageCount,
}) => {
    const navigate = useNavigate();

    const handleMessageClick = ()=>{
        navigate('/:userId/chat');
    };

  return (
    <>
    <Paper
      elevation={0}
      style={{
        padding: "16px",
        width: "100%",
        margin: "auto",
        marginLeft: "-15px",
        justifyContent: "space-between",
        cursor: "pointer",
        display: "flex",
      }} 
      onClick={handleMessageClick}
    >
      <div style={{ display: "flex" }}>
        <Badge badgeContent={messageCount} color="primary">
          <Avatar src={avatarUrl} alt={senderName} />
        </Badge>
        <div style={{ marginLeft: "16px", flexDirection: "column" }}>
          <Typography variant="body1" fontWeight="bold">
            {senderName}
          </Typography>
          <Typography
            variant="body1"
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
          >
            {truncate(message, 43)}
          </Typography>
        </div>
      </div>
      <Typography variant="body3">{date}</Typography>
    </Paper>
    <Divider/>
    </>
  );
};

export default MessageItem;
