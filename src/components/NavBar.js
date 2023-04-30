import EventList from "../components/EventList";
import Dashboard from "../components/Dashboard";
import EventNav from "../components/EventNav";
import Login from "../components/Login";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


 export default function NavBar() {
    return (
    <div>
        <AppBar position="static" color="inherit" elevation={2} sx={{mb:0.2}}>
        <Toolbar>
        <Typography variant="h3" component="div" sx={{ml:3, mb:2, mt:2}}>
            showUP
        </Typography>
        {/* <Login sx={{}}/> */}
        </Toolbar>
        </AppBar>

    </div>
    );
 }