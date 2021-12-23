import React from 'react';
import styled from 'styled-components';
import {
    Typography,
    Container,
    Box,
    Grid,
    ToggleButton,
    ToggleButtonGroup,
    TextField,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material';

import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import heroSmall from '../assets/contact-banner-sm.jpg';
import heroMedium from '../assets/contact-banner-md.jpg';
import heroLarge from '../assets/contact-banner-lg.jpg';

const Wrap = styled.div`
    background: linear-gradient(0deg, rgba(236, 240, 241, 0.8), rgba(189, 195, 199, 0.6) ), url(${ heroSmall });
    background-position: top center;
    background-size: cover;

    @media screen and (min-width: 768px) {
        background: linear-gradient(0deg, rgba(236, 240, 241, 0.6), rgba(189, 195, 199, 0.6) ), url(${ heroMedium });
        background-size: cover;
        background-position: center;
    }

    @media screen and (min-width: 1280px) {
        background: linear-gradient(0deg, rgba(236, 240, 241, 0.6), rgba(189, 195, 199, 0.6) ), url(${ heroLarge });
        background-position: center;
    }
`;

const Content = styled.div`
    padding: 6rem 0 4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 1280px) {
        padding: 8rem 0 6rem 0;
    }
`;

function Contact () {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <>
        <Wrap>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={10} md={8}>
                        <Content>
                            <Typography variant="h1" component="div" gutterBottom style={{ textTransform: "uppercase" }}>
                                Contact Us
                            </Typography>
                            <Typography variant="body1" component="div" gutterBottom>
                                We will make your product look modern and professional while saving you precious time.
                            </Typography>
                        </Content>
                    </Grid>
                </Grid>
            </Container>
        </Wrap>

        <Container maxWidth="lg">
            <Box mt={8} mb={2} sx={{ textAlign: 'center'}}>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="web">General Inquiry Form</ToggleButton>
                    <ToggleButton value="android">Project Inquiry Form</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Grid container spacing={2} mb={8}>
                <Grid item xs={12} md={8}>
                    <Box mt={2} p={4} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                        <TextField fullWidth id="standard-basic" label="Name" variant="outlined" margin="normal" />
                        <TextField fullWidth id="standard-basic" label="Email" variant="outlined" margin="normal" />
                        <TextField fullWidth multiline minRows="4" id="standard-basic" label="Message" variant="outlined" margin="normal" />
                        <Button variant="contained" size="large" color="secondary" sx={{ margin: "2rem 0"}}>
                            Send Message
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <List sx={{ width: '100%', margin: '1rem 0 0 0' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemIcon>
                                <PhoneIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Phone Numbers"
                                secondary={
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        +63 966 1234 123 <br />
                                        +63 966 4321 321
                                    </Typography>
                                }
                            />
                        </ListItem>

                        <Divider variant="inset" component="li" />

                        <ListItem alignItems="flex-start">
                            <ListItemIcon>
                                <MailOutlineIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Email Address"
                                secondary={
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        info@educar-consultancy.com <br />
                                        support@educar-consultancy.com
                                    </Typography>
                                }
                            />
                        </ListItem>

                        <Divider variant="inset" component="li" />

                        <ListItem alignItems="flex-start">
                            <ListItemIcon>
                                <LocationOnIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Location"
                                secondary={
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        1104 Alabang Business Tower, Madrigal Business Park
                                        1216 Acacia Ave., Alabang, Muntinlupa City, 1780
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default Contact;