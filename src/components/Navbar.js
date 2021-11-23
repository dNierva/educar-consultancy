import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemText,
    Container,
} from '@mui/material';

function Navbar() {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={handleDrawerClose}
            onKeyDown={handleDrawerClose}
        >
            <List>
                {['M3 Systec', 'PTS Schools', 'Projects', 'Contact'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemText 
                        primary={text}
                        sx={{
                            textTransform: 'uppercase',
                            color: '#2980B9',
                        }} 
                    />
                </ListItem>
                ))}
            </List>
        </Box>
    );

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }));

    return (
        <React.Fragment>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Container maxWidth="lg">
                    <Toolbar variant="dense" disableGutters="true">
                        <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
                            EDUCAR
                        </Typography>

                        <Typography variant="overline" display="block" style={{ cursor: 'pointer' }} onClick={handleDrawerOpen}>MENU</Typography>
                        {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton> */}
                        <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>

        <Drawer
            anchor='right'
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    <HighlightOffIcon color="error" />
                </IconButton>
            </DrawerHeader>
            <Divider />
            {list('right')}
        </Drawer>
        </React.Fragment>
    );
}

export default Navbar;