import React from "react";
import { Navbar } from "../components/Navbar";
import { BottomNav } from "../components/BottomNav";
import { NotificationList } from "../components/NotificationList";

export const Notifications = () => {
  return (
    <>
      <Navbar />
      <NotificationList/>
      <BottomNav />
    </>
  );
};
