import { LinearProgress } from "@mui/material";
import { BottomNav } from "../components/BottomNav";
import { Navbar } from "../components/Navbar";
import { UserFeed } from "../components/UserFeed";
import React, { useState } from "react";

export const Home = () => {
  const [progress, setProgress] = useState(0);
  React.useEffect(()=>{
    const timer = setInterval(()=>{
      setProgress((oldProgress)=>{
        if(oldProgress === 100){
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    },5)
   return ()=>{
    clearInterval(timer);
   }
  },[]);

  return (
    <>
      <Navbar />
      <LinearProgress variant="determinate" value={progress}/>
      <UserFeed />
      <BottomNav />
    </>
  );
};
