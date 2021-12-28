import React from 'react';
import styled from 'styled-components';

import {
    Typography,
    Container,
    Grid,
    Button
} from '@mui/material';

import heroSmall from '../assets/hero-sm.jpg';
import heroMedium from '../assets/hero-md.jpg';
import heroLarge from '../assets/hero_lg.jpg';

const Wrap = styled.div`
    background: linear-gradient(0deg, rgba(236, 240, 241, 0.8), rgba(189, 195, 199, 0.6) ), url(${ heroSmall });
    background-position: top left;
    background-size: cover;

    @media screen and (min-width: 768px) {
        background: linear-gradient(0deg, rgba(236, 240, 241, 0.6), rgba(189, 195, 199, 0.6) ), url(${ heroMedium });
        background-size: cover;
    }

    @media screen and (min-width: 1280px) {
        background: url(${ heroLarge });
    }
`;

const Content = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 1280px) {
        padding-top: 8rem;
    }
`;

function Hero () {
    return (
        <Wrap>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={10} md={8}>
                        <Content>
                            <Typography variant="h1" component="div" gutterBottom style={{ textTransform: "uppercase" }}>
                                Professional Education &amp; Career Consultancy &amp; Management Inc.
                            </Typography>
                            <Button variant="contained" size="large" color="secondary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
                                Start A Conversation
                            </Button>
                        </Content>
                    </Grid>
                </Grid>
            </Container>
        </Wrap>
    )
}

export default Hero;