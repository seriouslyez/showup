import React, { useEffect, useState } from 'react';
import Dashboard from "../components/Dashboard";
import EventNav from "../components/EventNav";
import Stack from '@mui/material/Stack';
import emails from "../emails.json"
import axios from 'axios';
import { eventsContext } from '../components/EventsContext';

export default function Home() {
    let events = [];
    const [response, setResponse] = useState(null);

    // Get data from openai; adapted from https://www.codingthesmartway.com/how-to-use-chatgpt-with-react/
    const loadResponse = (prompt, id, text) => {
        axios
        .post("/chat", { prompt })
        .then((res) => {
            let apidata = res.data[0];
            if (apidata != "\n" && apidata != undefined){
                apidata["id"] = id;
                apidata["body"] = text;
                events.push(apidata);
                setResponse(events);
            }
        })
        .catch((err) => {
            console.error(err);
        });
    };
    for (var prop in emails) {
        // Email hasn't been previously recorded 
        if (events.find((elt) => elt["id"] == prop) == undefined) {
            // Parse email and generate a json with relevant properties using openai
            if (emails[prop][0].text != undefined) {
                let text = emails[prop][0].text
                text = text.replace(/\s\s+/g, ' ');
                text = text.substring(0, 2000);
                // Concept -> Category action: affix/remove
                let prompt = `Return just a valid JSON array of objects for this email`+ text + `following this format: [{“event”: "a boolean of whether or not it is promoting an event with a date and location”,
                "name":"Short title for event",
                “date”: “Numeric Month/Day/2023 of event”,
                "time": "Time of event",
                “location”: “the location of the event”,
                “summary”: “1- 2 sentence summary of the event”,
                “category”: “the best matching category from academic, parties, extracurricular, or other”]`;
                loadResponse(prompt, prop, emails[prop][0].text);
            }
        }
    }

    return (
        <div>
        {/* <NavBar/> */}
        <eventsContext.Provider
            value={[response, setResponse]}>
        <Stack direction="row" spacing={40}>
        <EventNav/>
        <Dashboard/>
        </Stack>
        </eventsContext.Provider>
        </div>
    );
}