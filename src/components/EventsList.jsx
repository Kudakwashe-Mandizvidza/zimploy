import React from "react";
import { SimpleAppBar } from "./SimpleAppBar";

import { Container } from "@mui/system";
import { EventItem } from "./EventItem";

export const EventsList = () => {
  return (
    <>
    <SimpleAppBar pageName="Events" />
    <Container sx={{marginBottom:'10px'}} >
        <EventItem/>
        <EventItem/>
        <EventItem/>
        <EventItem/>
    </Container>
    </>
  );
};
