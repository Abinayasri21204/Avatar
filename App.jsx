import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Paper, Box, TextField } from '@mui/material';

function App() {
    return (
        <div>
            {/* Navigation Bar */}
            <AppBar position="static" sx={{ backgroundColor: '#6200ea' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        AI Avatar Project
                    </Typography>
                    <Button color="inherit">Avatar</Button>
                    <Button color="inherit">Voice</Button>
                    <Button color="inherit">Text</Button>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Container sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
                {/* Avatar Section */}
                <Paper sx={{ flex: 1, padding: 2, height: '70vh' }}>
                    <Typography variant="h6">Avatar</Typography>
                </Paper>

                {/* Chatbot Text Output Section */}
                <Paper sx={{ flex: 2, padding: 2, height: '70vh' }}>
                    <Typography variant="h6">Chatbot Text Output</Typography>
                    <Typography>No messages yet...</Typography>
                    <TextField fullWidth placeholder="Enter text..." sx={{ marginTop: 2 }} />
                    <Box sx={{ display: 'flex', gap: 1, marginTop: 1 }}>
                        <Button variant="contained" color="primary">Send</Button>
                        <Button variant="contained" color="secondary">Voice</Button>
                    </Box>
                </Paper>

                {/* Camera Section */}
                <Paper sx={{ flex: 1, padding: 2, height: '70vh' }}>
                    <Typography variant="h6">Camera</Typography>
                    <Button variant="contained" sx={{ backgroundColor: '#6200ea', color: '#fff', marginTop: 1 }}>
                        Hyperlink
                    </Button>
                    <Typography sx={{ margin: '10px 0' }}>OR</Typography>
                    <Button variant="contained" sx={{ backgroundColor: '#6200ea', color: '#fff' }}>
                        Reactive Buttons
                    </Button>
                </Paper>
            </Container>
        </div>
    );
}

export default App;
