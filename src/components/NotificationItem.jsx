import { Avatar, Badge, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const truncate = (text, limit) => {
  if (text.length > limit) {
    return text.substring(0, limit - 3) + "...";
  }
  return text;
};

const NotificationItem = ({
  notificationType,
  avatarUrl,
  message,
  notificationCount,
  date,
  senderName,
}) => {
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    navigate(`/category?tab=${notificationType}`);
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
        onClick={handleNotificationClick}
      >
        <div style={{ display: "flex" }}>
          <Badge badgeContent={notificationCount} color="primary">
            <Avatar src={avatarUrl} alt={senderName} />
          </Badge>

          <div
            style={{
              marginLeft: "16px",

              flexDirection: "column",
            }}
          >
            <Typography variant="body1" fontWeight="bold">
              {senderName}
            </Typography>
            <Typography
              variant="body2"
              style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            >
              {truncate(message, 43)}
            </Typography>
          </div>
        </div>

        <Typography variant="body3">{date}</Typography>
      </Paper>

      <Divider />
    </>
  );
};

export default NotificationItem;
