import React from 'react';
import styled from 'styled-components';
import {
    Typography,
    Container,
    Box,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Divider
} from '@mui/material';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';

import CheckIcon from '@mui/icons-material/Check';

import heroSmall from '../assets/avantage-project-sm.jpg';
import heroMedium from '../assets/avantage-project-md.jpg';
import heroLarge from '../assets/avantage-project-lg.jpg';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
    padding: 8rem 0 6rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 1280px) {
        padding: 10rem 0 8rem 0;
    }
`;

// DESIGN PROCESS STEPS
const steps = [
    {
      label: 'Phase 1: Discover',
      description: `In this initial phase the goal is to learn as much as possible about what makes your business unique. This phase may include: competitive analysis, mission/vision exploration, business goals and creating a plan of attack.`,
    },
    {
      label: 'Phase 2: Architect',
      description: `After the information gathering has been complete in the Discover process, a plan is laid out to set the foundation for the Design process. This phase may include: wireframes, concept work/ sketches, mood boards, copy outlining/writing and information architecture.`,
    },
    {
      label: 'Phase 3: Design',
      description: `The Design phase is where the work from the first two phases comes together and is expressed as design deliverables. In this phase multiple design options will be presented and feedback gathered for refining and final selection.`,
    },
    {
        label: 'Phase 4: Build',
        description: `Once design options have been created, mockups and concepts presented, approved deliverables will move to build out. This phase may include: logo refinement, brand
        finalization and website coding.`,
    }
];

// END RESULT IMAGES
const itemData = [
    {
        img: '/img/av_b.jpg',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: '/img/av_a.jpg',
        title: 'Burger',
    },
    {
        img: '/img/av_c.jpg',
        title: 'Camera',
    },
    {
        img: '/img/av_d.jpg',
        title: 'Coffee',
        cols: 2,
    }
];

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

function Projects () {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
        <Wrap>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={10} md={10}>
                        <Content>
                            <Typography variant="h1" component="div" style={{ textTransform: "uppercase" }}>
                                A-Vantage International Recruitment Corp.
                            </Typography>
                            <Typography variant="overline" component="div" gutterBottom style={{ fontStyle: "italic" }}>
                                Web Design &amp; Development
                            </Typography>
                        </Content>
                    </Grid>
                </Grid>
            </Container>
        </Wrap>

        <Container maxWidth="lg">
            
            <Grid container justifyContent="space-between" spacing={2}>
                <Grid item xs={12} md={7}>
                    <Box my={8}>
                        <Typography variant="h2" component="div" gutterBottom>
                            Project Brief
                        </Typography>
                        <Typography variant="body1" component="div" gutterBottom>
                            Oat cake jujubes pie muffin icing pastry cupcake tiramisu jelly-o. Macaroon fruitcake dessert halvah lollipop pudding tootsie roll. Sesame snaps cotton candy apple pie sesame snaps marshmallow marshmallow.
                        </Typography>
                    </Box>

                    <Box my={8}>
                        <Typography variant="h2" component="div" gutterBottom>
                            How We Work
                        </Typography>

                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                optional={
                                    index === 3 ? (
                                    <Typography variant="caption">Last step</Typography>
                                    ) : null
                                }
                                >
                                {step.label}
                                </StepLabel>
                                <StepContent>
                                <Typography>{step.description}</Typography>
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                    <Button
                                        variant="outlined"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    </div>
                                </Box>
                                </StepContent>
                            </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length && (
                            <Paper square elevation={0} sx={{ p: 3 }}>
                                <Typography>All steps completed - you&apos;re finished</Typography>
                                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                    Reset
                                </Button>
                            </Paper>
                        )}
                    </Box>

                    <Box my={8}>
                        <Typography variant="h2" component="div" gutterBottom>
                            Results
                        </Typography>
                        <Typography variant="body1" component="div" gutterBottom>
                            Sesame snaps cotton candy apple pie sesame snaps marshmallow marshmallow. Lollipop jujubes cheesecake bonbon shortbread gingerbread. Croissant macaroon macaroon apple pie wafer cake.
                        </Typography>

                        <List dense={true}>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Works on all devices and browsers"
                                    secondary={true ? 'Responsive' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="User and content management system"
                                    secondary={true ? 'Strapi' : null}
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box my={6}>
                        <Paper elevation={0} sx={{ background: 'rgba(255, 255, 255, 0.4)' }}>
                            <Box py={2} px={4}>
                                <Typography variant="overline" display="block" sx={{ color: 'rgba(0, 0, 0, 0.3)' }}>
                                    Client
                                </Typography>
                                <Typography variant="h3" gutterBottom component="div">
                                    A-Vantage International <br /> Recruitment Corp.
                                </Typography>
                                <Typography variant="body2" gutterBottom sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                                    As a recruitment company, A-Vantage International Recruitment Corp. plays a crucial role in supplying developed countries with the needed qualified and skilled manpower from the Philippines.
                                </Typography>

                                <Typography variant="overline" display="block" sx={{ color: 'rgba(0, 0, 0, 0.3)' }}>
                                    Industry
                                </Typography>
                                <Typography variant="body2" gutterBottom sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                                    Recruitment
                                </Typography>

                                <Divider sx={{ margin: '2rem 0 1rem 0' }} />

                                <Typography variant="overline" display="block" sx={{ color: 'rgba(0, 0, 0, 0.3)' }}>
                                    Category
                                </Typography>
                                <Typography variant="body2" gutterBottom sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                                    Web Design &amp; Development
                                </Typography>

                                <Typography variant="overline" display="block" sx={{ color: 'rgba(0, 0, 0, 0.3)' }}>
                                    Website
                                </Typography>
                                <Typography variant="body2" gutterBottom sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                                    <a href="www.a-vantageinternational.com" target="_blank">www.a-vantageinternational.com</a>
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
            
            <Box mb={ 8 }>
                <Typography variant="h2" component="div" gutterBottom>
                    Gallery
                </Typography>
                <ImageList
                    // sx={{ width: 500, height: 450 }}
                        variant="quilted"
                        cols={4}
                        rowHeight={132}
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Container>
        </>
    )
}

export default Projects;