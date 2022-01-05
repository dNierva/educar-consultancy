import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
    Typography,
    Container,
    Box,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    CardActionArea,
    CardActions
} from '@mui/material';

import heroSmall from '../assets/projects-hero-sm.jpg';
import heroMedium from '../assets/projects-hero-md.jpg';
import heroLarge from '../assets/projects-hero-lg.jpg';

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

function Projects () {
    return (
        <>
        <Wrap>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={10} md={8}>
                        <Content>
                            <Typography variant="h1" component="div" gutterBottom style={{ textTransform: "uppercase" }}>
                                Our Work
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
            <Box my={8}>
                <Grid container justifyContent="space-between" spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 480 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image="img/project-a.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="h3" component="div">
                                        Project Name
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom component="div">
                                        EDUCAR Consultancy
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button component={Link} to="/projects/1" size="small" color="secondary">
                                    View Project
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 480 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image="img/project-b.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="h3" component="div">
                                        Project Name
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom component="div">
                                        PTS Schools
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button component={Link} to="/projects/1" size="small" color="secondary">
                                    View Project
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 480 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image="img/project-c.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="h3" component="div">
                                        Project Name
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom component="div">
                                        M3 Systec
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button component={Link} to="/projects/1" size="small" color="secondary">
                                    View Project
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 480 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image="img/project-a.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="h3" component="div">
                                        Project Name
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom component="div">
                                        EDUCAR Consultancy
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button component={Link} to="/projects/1" size="small" color="secondary">
                                    View Project
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 480 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image="img/project-b.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="h3" component="div">
                                        Project Name
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom component="div">
                                        PTS Schools
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button component={Link} to="/projects/1" size="small" color="secondary">
                                    View Project
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 480 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image="img/project-c.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="h3" component="div">
                                        Project Name
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom component="div">
                                        M3 Systec
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button component={Link} to="/projects/1" size="small" color="secondary">
                                    View Project
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>{/*** = GRID CONTAINER */}
            </Box>
        </Container>
        </>
    )
}

export default Projects;