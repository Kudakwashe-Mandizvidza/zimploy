import { Container } from "@mui/material";
import React from "react";
import MessageItem from "./MessageItem";

export const MessageList = () => {
  return (
    <Container sx={{ marginTop: "50px", width: "100%" }}>
      <MessageItem
        senderName="Hydrogen Bond"
        avatarUrl="url1"
        message="I love the way you designed this app dude, pretty good"
        messageCount={3}
        date="Mon"
      />
      <MessageItem
        senderName="William Micheal"
        avatarUrl="url2"
        message="I heard you're now working at Hazaar, i'm happy for you"
        messageCount={1}
        date="Tue"
      />
      <MessageItem
        senderName="Andrew Mabika"
        avatarUrl="url1"
        message="We were supposed to get a term sheet from Dr Rusike"
        messageCount={6}
        date="Fri"
      />
      <MessageItem
        senderName="Shyleen Chikukwa"
        avatarUrl="url1"
        message="I've applied at Nukleus, i'm still waiting for their reply"
        messageCount={2}
        date="Mon"
      />
      <MessageItem
        senderName="Tyler Muvhengi"
        avatarUrl="url1"
        message="The way you so determined, its scary"
        messageCount={3}
        date="Dec 30"
      />
    </Container>
  );
};
