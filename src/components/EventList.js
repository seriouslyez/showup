import React, { useState } from 'react';
import PanelEvent from "./PanelEvent";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export default function EventList({ openEmail, name }) {
    console.log(name)
    // Replace with an array containing filtered parsed events
    const eventlist = [1, 2, 3];

    return(
        <div>
        <Stack>
        <Typography variant = "h5" align="center">
            {name}
        </Typography>
        {
            eventlist.map(() =>
            <PanelEvent openEmail={openEmail}/>)
        }
        </Stack>
        </div>
    )
}