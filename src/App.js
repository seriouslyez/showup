import logo from './logo.svg';
import './App.css';
import EventList from "./components/EventList";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div>
    <Box>
    <AppBar position="static" color="inherit" elevation={2} sx={{mb:5}}>
    <Toolbar>
      <Typography variant="h3" component="div" sx={{ml:3, mb:2, mt:2}}>
        showUP
      </Typography>
      </Toolbar>
    </AppBar>
    </Box>
    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
      <EventList/>
      <EventList/>
      <EventList/>
    </Stack>
    </div>
  );
}

export default App;
