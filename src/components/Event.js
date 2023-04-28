import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import PlaceIcon from '@mui/icons-material/Place';
import EventIcon from '@mui/icons-material/Event';
import FavBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

export default function Event({content}) {
    const [expanded, setExpand] = useState(false);
    const [favorited, setFavorite] = useState(false);
    const handleExpand = () => {
        setExpand(!expanded);
    };
    const handleFavorite = () => {
        setFavorite(!favorited);
    }

    return (
        <Card sx={{ minWidth: 450, maxWidth: 450, m:2}}>
            <CardActionArea onClick={handleExpand} disableRipple>
                <CardHeader
                    action={
                    <Stack direction="row" spacing={-1} sx={{ml:-5}}>
                        <IconButton 
                        onMouseDown={(event) => event.stopPropagation()}
                        onClick={handleFavorite}>
                            {favorited ? <FavoriteIcon/> : <FavBorderIcon/>}
                        </IconButton>
                        <IconButton onMouseDown={(event) => event.stopPropagation()}>
                            <NotInterestedIcon/>
                        </IconButton>
                        <IconButton onMouseDown={(event) => event.stopPropagation()}>
                            <EditCalendarIcon/>
                        </IconButton>
                    </Stack>
                    }
                    sx={{mb:-3}}
                    title="Event Name"
                    subheader={
                        <Stack direction="row" spacing = {1}>
                        <Chip size="small" icon={<EventIcon/>} label="00/00/0000 00:00"/>
                        <Chip size="small" icon ={<PlaceIcon/>} label="Event Location"/>
                        </Stack>
                    }
                />
                {/* {!expanded ?  */}
                <CardContent>
                    <Typography paragraph>
                        Event Description
                    </Typography>
                </CardContent>
                {/* // :''} */}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>
                    Longer Description
                </Typography>
                </CardContent>
            </Collapse>
            </CardActionArea>
        </Card>
    )
}
