import React from 'react';
import {
    Container,
    ImageList,
    ImageListItem
} from '@mui/material';

const itemData = [
    {
      img: 'img/pts-logo.png',
      title: 'PTS Schools',
    },
    {
      img: 'img/m3-logo.png',
      title: 'M3 Systec',
    },
    {
      img: 'img/dekra-logo.png',
      title: 'DEKRA',
    }
];

function PartnerLogos () {
    return (
        // <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        <Container maxWidth="lg">
            <ImageList cols={3} rowHeight={80}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={{ alignItems: 'center' }}>
                    <img
                        src={`${item.img}?w=288&h=60&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=288&h=60&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        style={{ 
                            width: '100%', 
                            maxWidth: '288px', 
                            flexGrow: 0,
                        }}
                    />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
}

export default PartnerLogos;