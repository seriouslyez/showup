import React, { useState, useContext, useEffect } from 'react';
import Event from "./Event";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Menu from '@mui/material/Menu';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { eventsContext } from '../components/EventsContext';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function Dashboard() {
    // List of this week's events
    // Concept -> Dashboard state: empty/filled 
    let dashboardEvents = [];
    let dashboardFilled = false;
    const [response, setResponse] = useContext(eventsContext);

    // Concept -> Category state: categories (set of all defined categories)
    const categories = ['Academic', 'Parties', 'Extracurricular', 'Other'];
    // Concept -> Dashboard action: filter (work-in-progress)
    let defaultChecked = {};
    for (let i = 0; i < categories.length; i++) {
        defaultChecked[categories[i]] = false
    }
    const [checked, setChecked] = React.useState(defaultChecked);

    const [showFavorite, setFavorite] = useState(false);
    const [openedFull, setOpenFull] = useState(false);
    const openFull = (val) => {
        setOpenFull(val)
    }

    // Concept -> Dashboard action: filter
    // Favorite events
    const handleFavorite = () => {
        setFavorite(!showFavorite)
    }
    
    const clickSwitch = (event) => {
        setChecked({
          ...checked,
          [event.target.id]: event.target.checked,
        })
      };
      
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    if (response != null) {
        // Concept -> Dashboard state: filtered, action: filter
        // let filters = [];
        // if (Object.values(defaultChecked).every((v) => v === false)) {
        //     filters = categories;
        // }
        // else {
        //     for (const prop in defaultChecked) {
        //         if (defaultChecked[prop]) {
        //             filters.push(prop)
        //         }
        //     }
        // }
        
        // Add events that are within a week from today to the dashboard
        // Concept -> Dashboard action: fill, state: empty/filled
        for (let i = 0; i < response.length; i++) {
            let d1 = new Date(response[i].date).getTime()
            let d2 = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
            if (response[i].event && d1 < d2 && d1 >= new Date().getTime()
                // && filters.includes(response[i].category)
                ) {
                dashboardEvents.push(response[i])
                dashboardFilled = dashboardEvents != [];
                dashboardEvents.sort(function(a, b) {
                    var c = new Date(a.date);
                    var d = new Date(b.date);
                    return c-d;
                });
            }
        }
    }
    

    return(
        <Stack direction="row" sx={{minWidth: 1000}}>
        <Stack>
        <Typography variant="h2" sx={{ml:5, mt:5, fontSize:40}}>
            Hi there! Looks like you've got a busy week ahead. &#128064;
        </Typography>
        <Paper sx={{maxWidth:"55vw", maxHeight:"70vh", overflow:"auto", 
        pt: 3,
        pl:7,
        pr: 7, pb: 3,
        mt: 3,
        ml: 10}} elevation={2} 
        square>
            <Stack>
            <Stack direction="row">
            <Typography variant="h2" sx={{fontSize:30, ml:1}}>
                Your week at a glance...
            </Typography>
            {/* Concept -> Dashboard action: filter */}
            {/* Switch to filter for favorited */}
            {/* <FormGroup sx={{ml:10}}> */}
            {/* <FormControlLabel control={<Switch checked={showFavorite} onChange={handleFavorite}/>} 
            label="Favorites only" /> 
            </FormGroup> */}
            
            {/* Concept -> Dashboard action: refresh */}
            <IconButton sx={{ml:30}} onClick={handleClick}><RefreshIcon/>Refresh</IconButton>
            {/* <Menu anchorEl={anchorEl} open={open} onClose={handleClose} PaperProps={{sx: {pl:2}}}>
                {categories.map((name) => 
                <FormGroup sx={{}}>
                <FormControlLabel control={<Switch id={name} checked={checked[name]} onClick={clickSwitch}/>} 
                label={name} />
                </FormGroup>
                )}
            </Menu> */}
            </Stack>
            {/* Concept -> Dashboard state: empty/filled */}
            {dashboardFilled ? dashboardEvents.map((dEvent) =>
            <Event dEvent={dEvent} openFull={openFull} />
            ) : ''}
            </Stack>
        </Paper>
        </Stack>
        <Slide direction="left" in={openedFull} mountOnEnter unmountOnExit>
        <AppBar position="sticky"
        sx={{maxWidth: 600, minHeight:"100vH", pl:4, pt:2, zIndex:98}} color="inherit" elevation={10}>
            <IconButton sx={{maxWidth:10}} onClick={()=>openFull(false)}>
                <ArrowBackIosNewIcon/>
            </IconButton>
            Full Email
        </AppBar>
        </Slide>
        </Stack>
    )
}