import React from "react";
import { BottomNav } from "../../components/BottomNav";
import { SimpleAppBar } from "../../components/SimpleAppBar";
import { MessageList } from "../../components/MessageList";

export const Messages = () => {
  return (
    <>
      <SimpleAppBar pageName="Messages" />
      <MessageList/>
      <BottomNav />
    </>
  );
};
