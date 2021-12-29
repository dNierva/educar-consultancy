import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
    Typography,
    Container,
    Box,
    Grid,
    ImageList,
    ImageListItem,
    Button,
} from '@mui/material';

const Wrap = styled.div`
    background-color: #2980B9;
`;

const Content = styled.div`
    padding: 6rem 0 8rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 1280px) {
        padding: 8rem 0 10rem 0;
    }
`;

const Img = styled.img`
    width: 100%;
    max-height: 420px;
    object-fit: cover;
    margin-top: -6rem;

    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
              0 1px 10px 0 rgba(0, 0, 0, 0.12),
              0 2px 4px -1px rgba(0, 0, 0, 0.20);
`;

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        cols: 2,
    },
];

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

function About () {
    return (
        <>
        <Wrap>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={10} md={8}>
                        <Content>
                            <Typography variant="h1" component="div" gutterBottom style={{ textTransform: "uppercase", color: "#ECF0F1" }}>
                                About Us
                            </Typography>
                            <Typography variant="body1" component="div" gutterBottom style={{ color: "#ECF0F1" }}>
                                We will make your product look modern and professional while saving you precious time.
                            </Typography>
                        </Content>
                    </Grid>
                </Grid>
            </Container>
        </Wrap>

        <Container maxWidth="lg">
            <Img src="img/about_main_img.jpg" />

            <Box my={8}>
                <Typography variant="h2" component="div" gutterBottom>
                    Who we are
                </Typography>
                <Typography variant="body1" component="div" gutterBottom sx={{ columnCount: {md: '2'}, columnGap: '2rem' }}>
                    Lemon drops jelly-o dragée liquorice jelly beans croissant pastry. Cookie sweet fruitcake croissant cheesecake cake cake oat cake fruitcake. Toffee cake pastry danish jujubes dessert topping. Gingerbread halvah halvah icing pie toffee topping liquorice. Sugar plum gummies jelly-o tart soufflé dragée. Powder chocolate bar gummies cheesecake apple pie jelly beans. Soufflé cake caramels halvah chocolate bar gummi bears caramels. Bonbon tart chupa chups carrot cake icing. Sesame snaps fruitcake cupcake chocolate bar jelly sugar plum marzipan tart powder. Chocolate bar dessert brownie biscuit jujubes tiramisu tart gingerbread cake.
                </Typography>
            </Box>

            <ImageList
                // sx={{ width: 500, height: 450 }}
                // variant="quilted"
                // cols={4}
                // rowHeight={121}
                cols={4}
                variant="quilted"
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

            <Box mt={8} mb={2}>
                <Typography variant="h2" component="div" gutterBottom>
                    What we do
                </Typography>
                <Typography variant="body1" component="div" gutterBottom sx={{ columnCount: {md: '2'}, columnGap: '2rem' }}>
                    Lemon drops jelly-o dragée liquorice jelly beans croissant pastry. Cookie sweet fruitcake croissant cheesecake cake cake oat cake fruitcake. Toffee cake pastry danish jujubes dessert topping. Gingerbread halvah halvah icing pie toffee topping liquorice. Sugar plum gummies jelly-o tart soufflé dragée. Powder chocolate bar gummies cheesecake apple pie jelly beans. Soufflé cake caramels halvah chocolate bar gummi bears caramels. Bonbon tart chupa chups carrot cake icing. Sesame snaps fruitcake cupcake chocolate bar jelly sugar plum marzipan tart powder. Chocolate bar dessert brownie biscuit jujubes tiramisu tart gingerbread cake.
                </Typography>
            </Box>

            <Box mt={6} mb={8} sx={{ textAlign: 'center' }}>
                <Button component={Link} to="/projects" variant="outlined" size="large" color="secondary">
                    View Our Projects
                </Button>
            </Box>
        </Container>
        </>
    )
}

export default About;