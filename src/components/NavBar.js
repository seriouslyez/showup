import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
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