import React, { useEffect, useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import PlaceIcon from '@mui/icons-material/Place';
import EventIcon from '@mui/icons-material/Event';
import FavBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function PanelEvent({Event, openEmail }) {
    const [expanded, setExpand] = useState(false);
    const [favorited, setFavorite] = useState(false);

    const handleExpand = () => {
        setExpand(!expanded);
    };
    const handleFavorite = (event) => {
        setFavorite(!favorited);
        event.stopPropagation();
    }

    const removeEvent = (event) => {
        event.stopPropagation();
    }

    const handleOpenEmail = (event) => {
        openEmail(true);
        event.stopPropagation();
    }

    return (
        <Card sx={{ minWidth: 500, maxWidth: 500, m:2, pl: 1}} elevation={4}>
            <CardActionArea onClick={handleExpand} disableRipple>
                <CardHeader
                    action={
                    <Stack direction="row" spacing={-1} sx={{ml:-15}}>
                        <IconButton 
                        onMouseDown={(event) => event.stopPropagation()}
                        onClick={handleFavorite}>
                            {favorited ? <FavoriteIcon/> : <FavBorderIcon/>}
                        </IconButton>
                        <IconButton onMouseDown={(event) => event.stopPropagation()}
                        onClick={removeEvent}>
                            <NotInterestedIcon/>
                        </IconButton>
                        <IconButton onMouseDown={(event) => event.stopPropagation()}
                        onClick={handleOpenEmail}>
                            <MailOutlineIcon/>
                        </IconButton>
                    </Stack>
                    }
                    sx={{mb:-3}}
                    title={<Typography variant="h6"> {Event.name}</Typography>}
                    subheader={
                        <Stack sx={{pt:1}} direction="row" spacing = {1}>
                        <Chip size="small" icon={<EventIcon/>} label={Event.date + '\xa0\xa0' + Event.time}/>
                        <Chip size="small" icon ={<PlaceIcon/>} label={Event.location}/>
                        </Stack>
                    }
                />
                {/* {!expanded ?  */}
                <CardContent>
                    {/* <Typography paragraph>
                        Event Description
                    </Typography> */}
                </CardContent>
                {/* // :''} */}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph sx={{mt:-2}}>
                    {Event.summary}
                </Typography>
                </CardContent>
            </Collapse>
            </CardActionArea>
        </Card>
    )
}