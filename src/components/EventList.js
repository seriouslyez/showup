import React, { useState } from 'react';
import Event from "../components/Event";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function EventList() {

    return(
        <Stack>
        <Typography variant = "h4" align="center">
            Event Category
        </Typography>
        <Event/>
        <Event/>
        <Event/>
        </Stack>
    )
}