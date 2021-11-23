import React from 'react';

import {
    Container,
    Grid,
    Button,
    Typography,
    List,
    ListItemButton,
    ListItemIcon,
    ListItem,
    ListItemText,
    Box
} from '@mui/material';

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';

function SiteInfo () {
    return (
        <Container maxWidth="lg">
            <Box sx={{ p: 4, backgroundColor: '#34495E' }}>
                <Grid container justifyContent="space-between" spacing={2}>
                    <Grid item xs={12} md={4}>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton dense disableGutters>
                                    <ListItemIcon sx={{ color: '#ECF0F1' }}>
                                        <PhoneIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="+63966 123 1234" sx={{ color: '#ECF0F1' }} primaryTypographyProps={{ variant: 'subtitle1' }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton dense disableGutters> 
                                    <ListItemIcon sx={{ color: '#ECF0F1' }}>
                                        <EmailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="info@educarconsultancy.com" sx={{ color: '#ECF0F1' }} primaryTypographyProps={{ variant: 'subtitle1' }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton dense disableGutters>
                                    <ListItemIcon sx={{ color: '#ECF0F1' }}>
                                        <FacebookIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="facebook.com/Educar" sx={{ color: '#ECF0F1' }} primaryTypographyProps={{ variant: 'subtitle1' }} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h2" component="div" gutterBottom sx={{ color: '#ECF0F1' }}>
                            Ready to discuss a project with us?
                        </Typography>
                        <Button variant="contained" size="large" color="secondary">
                            Start A Conversation
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default SiteInfo;