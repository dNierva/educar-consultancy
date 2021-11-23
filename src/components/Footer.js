import React from 'react';
import styled from 'styled-components';

import {
    Container,
    Grid,
    Typography,
    Box,
} from '@mui/material';

const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
`;
const Li = styled.li`
    margin: 0;
    padding: 0;
    cursor: pointer;
    color: #3498DB;
`;

function Footer () {
    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 2 }}>
                <Grid container justifyContent="space-between" spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={4} sm={6} md={2}>
                        <Typography variant="h3" component="div" style={{ color: '#3498DB' }}>
                            EDUCAR
                        </Typography>
                    </Grid>

                    <Grid item xs={8} sm={6} md={4}>
                        <Ul>
                            <Li>Home</Li>
                            <Li>Projects</Li>
                            <Li>About</Li>
                            <Li>Contact</Li>
                        </Ul>
                    </Grid>
                </Grid>
                <Typography variant="body2" component="div" sx={{ my: 1, fontSize: '0.875em' }}>
                    © 2019 EDUCAR Consultancy. All rights reserved.
                </Typography>
            </Box>
        </Container>
    );
}

export default Footer;