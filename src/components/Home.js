import EventList from "../components/EventList";
import Dashboard from "../components/Dashboard";
import EventNav from "../components/EventNav";
import NavBar from "../components/NavBar";
import Login from "../components/Login";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Home() {
    return (
        <div>
        <NavBar/>
        <Stack direction="row">
        <EventNav/>
        <Dashboard/>
        </Stack>
        </div>
    );
}