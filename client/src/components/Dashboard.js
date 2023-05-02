import React, { useState } from 'react';
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

export default function Dashboard() {
    // List of this week's events
    let dashboardEvents = [1, 2, 3, 4, 5];
    const categories = ['Educational', 'Parties', 'Clubs', 'Other'];
    const [showFavorite, setFavorite] = useState(false);
    const [openedFull, setOpenFull] = useState(false);
    const openFull = (val) => {
        setOpenFull(val)
    }
    const handleFavorite = () => {
        setFavorite(!showFavorite)
    }
    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <Stack direction="row" sx={{minWidth: 1000}}>
        <Stack>
        <Typography variant="h2" sx={{ml:5, mt:5, fontSize:40}}>
            Hi User! Looks like you've got a busy week ahead. &#128064;
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
            <FormGroup sx={{ml:10}}>
            <FormControlLabel control={<Switch checked={showFavorite} onChange={handleFavorite}/>} 
            label="Favorites only" />
            </FormGroup>
            <Button onClick={handleClick}>Filter by category</Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} PaperProps={{sx: {pl:2}}}>
                {categories.map((name) => 
                <FormGroup sx={{}}>
                <FormControlLabel control={<Switch/>} 
                label={name} />
                </FormGroup>
                )}
            </Menu>
            </Stack>
            { dashboardEvents.map(() =>
            <Event openFull={openFull} />
            )}
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