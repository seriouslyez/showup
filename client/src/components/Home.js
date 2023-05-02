import React, { useEffect, useState } from 'react';
import Dashboard from "../components/Dashboard";
import EventNav from "../components/EventNav";
import Stack from '@mui/material/Stack';
import emails from "../emails.json"
import axios from 'axios';
import { eventsContext } from '../components/EventsContext';

export default function Home() {
    // let events = [];
    // const [response, setResponse] = useState(null);
    // const loadResponse = (prompt, id, body) => {
    //     axios
    //     .post("/chat", { prompt })
    //     .then((res) => {
    //         let apidata = res.data[0];
    //         apidata["id"] = id;
    //         apidata["body"] = body;
    //         events.push(apidata);
    //         setResponse(events);
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //         setResponse(err)
    //     });
    // };
    // let count = 0
    // for (var prop in emails) {
    //     // Email hasn't been previously recorded 
    //     if (count == 0) {
    //     // if (events.find((elt) => elt.id == prop) == undefined) {
    //         // Parse from AI
    //         count += 1;
    //         let prompt = `Return just a valid JSON array of objects for this email`+ emails[prop][0].text + `following this format: [{“event”: "a boolean of whether or not it is promoting an event with a date and location”,
    //         "name":"Short title for event",
    //         “date”: “Numeric Month/Day/2023 of event”,
    //         "time": "Time of event",
    //         “location”: “the location of the event”,
    //         “summary”: “1- 2 sentence summary of the event”,
    //         “category”: “the best matching category from educational, parties, clubs, or other”]`;
    //         try {
    //             loadResponse(prompt, prop, emails[prop][0].text);
    //         } catch (error) {
    //             console.log("error with email count ", count - 1 )
    //         }
    //     }
    // }

    // console.log(events)

    return (
        <div>
        {/* <NavBar/> */}
        <eventsContext.Provider
            value="hello">
                {/* value="{[response, setResponse]}"> */}
        <Stack direction="row" spacing={40}>
        <EventNav/>
        <Dashboard/>
        </Stack>
        </eventsContext.Provider>
        </div>
    );
}