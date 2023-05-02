import React, { useContext } from 'react';
import PanelEvent from "./PanelEvent";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { eventsContext } from '../components/EventsContext';


export default function EventList({ openEmail, name }) {
    // Replace with an array containing events corresponding to category 'name'
    const [response, setResponse] = useContext(eventsContext);
    let eventlist = [];
    if (response != null) {
        for (let i = 0; i < response.length; i++) {
            if (response[i].event && response[i].category.toLowerCase() == name.toLowerCase()){
                eventlist.push(response[i])
            }
        }
    }
    // Sort events in chronological order
    eventlist.sort(function(a, b) {
        var c = new Date(a.date);
        var d = new Date(b.date);
        return c-d;
    });
    return(
        <div>
        <Stack>
        {/* Concept -> Category state: categories (set of all defined categories) */}
        {/* Concept -> Category action: rename -- not yet implemented (will allow users to rename onClick) */}
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