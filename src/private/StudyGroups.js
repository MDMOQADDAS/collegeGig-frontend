import { Button, List, ListItemButton } from "@mui/material";


function StudyGroups(props) {
    return (
        <>
            <div className="study-groups-main-div">
                <h1>StudyGroups</h1>
                <List>
                    <ListItemButton>
                        <Button href="https://google.com" variant="contained" fullWidth>Python Group</Button>

                    </ListItemButton>
                    <ListItemButton>
                        <Button href="https://google.com" variant="contained" fullWidth>C++ Group</Button>
                    </ListItemButton>
                    <ListItemButton>
                        <Button href="https://google.com" variant="contained" fullWidth>Full Stack Development Group</Button>
                    </ListItemButton>
                    <ListItemButton>
                        <Button href="https://google.com" variant="contained" fullWidth>Java Group</Button>
                    </ListItemButton>
                    <ListItemButton>
                        <Button href="https://google.com" variant="contained" fullWidth>Go Lang Group</Button>
                    </ListItemButton>
                </List>
            </div>
        </>
    )
}

export default StudyGroups;