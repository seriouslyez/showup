import React, { useState } from 'react';
import Event from "./Event";
import EventPane from "./EventPane";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SlidingPane from "react-sliding-pane";


export default function EventList() {
    const [panes, setPanes] = useState({
        eventPane: false,
        detailsPane: false,
    });

    return(
        <div>
        <AppBar elevation={0} position="sticky" 
        sx={{maxWidth: 300, minHeight:"100vH"}} color="inherit" elevation={2}>
        <Stack sx={{pt: 5}} spacing={5}>
        <Button variant = "text" align="center">
            <Typography variant="h4">
            Dashboard
            </Typography>
        </Button>
        <Button variant = "text" align="center" onClick={() => setPanes({eventPane: true})}>
            <Typography variant="h4">
            ALL Events
            </Typography>
        </Button>
        </Stack>
        <SlidingPane isOpen={panes.eventPane}
        from="left"
        onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            setPanes({ isPaneOpen: false });
            }}>
            <EventPane/>
        </SlidingPane>
        </AppBar>
        </div>
    )
}