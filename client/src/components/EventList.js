import React, { useContext } from 'react';
import PanelEvent from "./PanelEvent";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { eventsContext } from '../components/EventsContext';


export default function EventList({ openEmail, name }) {
    // Replace with an array containing filtered parsed events
    const [response, setResponse] = useContext(eventsContext);
    let eventlist = [];
    for (let i = 0; i < response.length; i++) {
        if (response[i].event && response[i].category.toLowerCase() == name.toLowerCase()){
            eventlist.push(response[i])
        }
    }
    return(
        <div>
        <Stack>
        <Typography variant = "h5" align="center">
            {name}
        </Typography>
        {
            eventlist.map((Event) =>
            <PanelEvent Event={Event} openEmail={openEmail}/>)
        }
        </Stack>
        </div>
    )
}