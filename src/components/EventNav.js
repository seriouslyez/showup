import React, { useState } from 'react';
import EventList from "./EventList";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom";

export default function EventNav() {
    const navigate = useNavigate();
    // List of event categories (preset)
    const categories = ['Educational', 'Parties', 'Clubs', 'Other'];
    // const [selectedAll, setNavAll] = useState(false);
    const [selectedEvent, setEventSelect] = useState(false);
    const [openedEmail, setOpen] = useState(false);
    const [curr_name, setName] = useState('');

    // const handleNavAll = () => {
    //     setNavAll(!selectedAll);   
    // }

    const handleLogout = () => {
        navigate('/');
    }

    const handleEventSelect = (this_name) => {
        if (selectedEvent && openedEmail) {
            setOpen(false);
        }
        setEventSelect(!selectedEvent);   
        setName(this_name);
        console.log(this_name)
    }
    
    const openEmail = openedEmail => {
        setOpen(openedEmail);
    }

    return(
        <Stack direction="row" position="absolute">
        <AppBar position="sticky"
        sx={{minWidth:300, maxWidth: 300, minHeight:"100vH", zIndex:100}} color="inherit" elevation={2}>
        <Stack sx={{pt: 5}} spacing={2}>
            {/* <Button variant = "text" align="center">
                <Typography variant="h4">
                Dashboard
                </Typography>
            </Button> */}
            {/* <Button variant = "text" align="center" onClick={handleNavAll}> */}
                <Typography variant="h2" align="center" sx={{fontSize: 45, mb: 3}}>showUP</Typography>
                <Typography variant="h4" align="center">
                ALL EVENTS
                </Typography>
            {/* </Button> */}
            {/* {selectedAll ?  */}
            <Stack spacing={2}>
                {categories.map((name) => 
                    <Button variant = "text" align="center" onClick={()=>{handleEventSelect(name)}}>
                        <Typography variant="h5">
                        {name}
                        </Typography>
                    </Button>
                )}
            </Stack> 
            {/* : ''} */}
            <Button sx={{pt: 25}} onClick={handleLogout}>
                Log Out
            </Button>
        </Stack>
        </AppBar>
        <Slide direction="right" in={selectedEvent} mountOnEnter unmountOnExit>
        <AppBar position="sticky"
        sx={{maxWidth: 600, minHeight:"100vH", pl:4, pt:2, zIndex:99}} color="inherit" elevation={2}>
            <EventList name={curr_name} openEmail={openEmail}/>
        </AppBar>
        </Slide>
        <Slide direction="right" in={openedEmail} mountOnEnter unmountOnExit>
        <AppBar position="sticky"
        sx={{maxWidth: 500, minHeight:"100vH", pl:4, pt:2, zIndex:98}} color="inherit" elevation={10}>
            <IconButton sx={{maxWidth:10}} onClick={()=>openEmail(false)}>
                <ArrowBackIosNewIcon/>
            </IconButton>
            <Typography variant="h2" align="center">
                Email
            </Typography>
        </AppBar>
        </Slide>
        </Stack>
    )
}