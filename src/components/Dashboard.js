import React, { useState } from 'react';
import Event from "./Event";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';


export default function Dashboard() {
    return(
        <div>
        <Typography variant="h2" sx={{ml:5, mt:5, fontSize:40}}>
            Hi User! Looks like you've got a busy week ahead. &#128064;
        </Typography>
        <Paper sx={{maxWidth:"55vw", maxHeight:"60vh", overflow:"auto", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: 3,
        pl:7,
        pr: 7, pb: 3,
        mt: 3,
        ml: 10}} elevation={2} 
        square>
            <Stack>
            <Typography variant="h2" sx={{fontSize:30, ml:1}}>
                Your week at a glance...
            </Typography>
            <Event/>
            <Event/>
            </Stack>
        </Paper>
        </div>
    )
}