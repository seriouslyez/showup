import React, { useEffect, useState } from 'react';
import Dashboard from "../components/Dashboard";
import EventNav from "../components/EventNav";
import Stack from '@mui/material/Stack';
import emails from "../data/emails.json"

export default function Home() {
    let events = new Set();
    for (var prop in emails) {
        // Parse from AI
        let date = '';
        let location = '';
        let category = '';
        let summary = '';
        events.add({
            id: prop,
            subject: emails[prop][0].subject,
            date: date,
            location: location,
            body: emails[prop][0].text,
            summary: summary,
            category: category,
            removed: false,
            favorited: true
        });
    }

    console.log(events)

    return (
        <div>
        {/* <NavBar/> */}
        <Stack direction="row" spacing={40}>
        <EventNav/>
        <Dashboard/>
        </Stack>
        </div>
    );
}