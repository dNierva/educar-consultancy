import React from 'react';
import styled from 'styled-components';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';

import {
    Typography,
    Container,
    Grid,
    Box
} from '@mui/material';

function Summary () {
    return (
        <Container maxWidth="lg">
            <Box mx={0} my={8}>
                <Grid container justifyContent="space-between" spacing={2}>
                    <Grid item xs={12} md={6} lg={7}>
                        <Typography variant="h2" component="div" style={{ textTransform: "uppercase" }} sx={{ mb: 1 }}>
                            We help our clients to expand
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            Our clients benefit from our solutions to overcome their local restrictions.
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Chocolate bar gummi bears lemon drops cotton candy carrot cake gummi bears. Bonbon gummi bears donut toffee jelly. Cupcake topping sugar plum pastry caramels.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5} lg={4}>
                        <Typography 
                            variant="h3" 
                            component="div" 
                            style={{ textTransform: "uppercase", paddingTop: '.1rem', marginTop: '.475rem', borderTop: '1px solid #bdc3c7' }}
                        >
                            Our Expertise
                        </Typography>

                        <List>
                            <ListItem disablePadding>
                                <ListItemButton dense disableGutters>
                                    <ListItemIcon>
                                        <AddIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="CONSULTING &amp; PROJECT MANAGEMENT" disableTypography />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton dense disableGutters> 
                                    <ListItemIcon>
                                        <AddIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="PROFESSIONAL OUTSOURCING" disableTypography />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton dense disableGutters>
                                    <ListItemIcon>
                                        <AddIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="PROFESSIONAL HR TRAINING" disableTypography />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton dense disableGutters>
                                    <ListItemIcon>
                                        <AddIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="INTERNATIONAL CAREER DEVELOPMENT" disableTypography />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton dense disableGutters>
                                    <ListItemIcon>
                                        <AddIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="SOFTWARE &amp; WEB DEVELOPMENT" disableTypography />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Summary;