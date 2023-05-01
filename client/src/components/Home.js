import Dashboard from "../components/Dashboard";
import EventNav from "../components/EventNav";
import Stack from '@mui/material/Stack';

export default function Home() {
    return (
        <div>
        {/* <NavBar/> */}
        <Stack direction="row" spacing={40}>
        <EventNav/>
        <Dashboard/>
        </Stack>
        </div>
    );
}