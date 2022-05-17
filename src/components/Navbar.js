import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

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

const linkStyle = {
    textDecoration: "none"
}

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
                <ListItem button>
                    <Link to="/" style={linkStyle}>
                        <ListItemText 
                            primary="Home"
                            sx={{
                                textTransform: 'uppercase',
                                color: '#2980B9',
                            }} 
                        />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link to="/m3systec" style={linkStyle}>
                        <ListItemText 
                            primary="M3 Systec"
                            sx={{
                                textTransform: 'uppercase',
                                color: '#2980B9',
                            }} 
                        />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link to="/ptsschools" style={linkStyle}>
                        <ListItemText 
                            primary="PTS Schools"
                            sx={{
                                textTransform: 'uppercase',
                                color: '#2980B9',
                            }} 
                        />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link to="/projects" style={linkStyle}>
                        <ListItemText 
                            primary="Projects"
                            sx={{
                                textTransform: 'uppercase',
                                color: '#2980B9',
                            }} 
                        />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link to="/about" style={linkStyle}>
                        <ListItemText 
                            primary="About Us"
                            sx={{
                                textTransform: 'uppercase',
                                color: '#2980B9',
                            }} 
                        />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link to="/contact" style={linkStyle}>
                        <ListItemText 
                            primary="Contact Us"
                            sx={{
                                textTransform: 'uppercase',
                                color: '#2980B9',
                            }} 
                        />
                    </Link>
                </ListItem>
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
                        <div style={{ flexGrow: 1 }}>
                            <img src="img/navbar_logo.svg" alt="EDUCAR" />
                        </div>

                        <Typography variant="overline" display="block" style={{ cursor: 'pointer' }} onClick={handleDrawerOpen}>
                            MENU
                        </Typography>
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