import React from 'react';
import styled from 'styled-components';
import {
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    CardActionArea,
    CardActions
} from '@mui/material';

const ViewAllButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
`;

function FeaturedProjects () {
    return (
        <Container maxWidth="lg">
            <Typography variant="h2" component="div" style={{ textTransform: "uppercase" }} sx={{ mb: 3 }}>
                Featured Projects
            </Typography>

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
                            <Button size="small" color="secondary">
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
                            <Button size="small" color="secondary">
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
                            <Button size="small" color="secondary">
                                View Project
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>{/*** = GRID CONTAINER */}

            <ViewAllButton>
                <Button variant="outlined" size="large" color="secondary">
                    View All Projects
                </Button>
            </ViewAllButton>
        </Container>
    )
}

export default FeaturedProjects;