import React, { Fragment } from 'react';
import GlobalStyle from './utils/globalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SiteInfo from './components/SiteInfo';
import Footer from './components/Footer';
import Home from './pages/Home';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#2C3E50'
		},
		secondary: {
			main: '#3498DB',
			dark: '#2980B9'
		}
	},
	typography: {
		fontFamily: "Barlow, sans-serif",
		fontSize: 16,
		h1: {
			fontFamily: "Barlow Condensed, sans-serif",
			fontWeight: 700,
			fontSize: "1.728em",
			'@media (min-width: 768px)': {
				fontSize: "2.369em",
			},
			'@media (min-width: 1280px)': {
				fontSize: "2.827em",
			}
		},
		h2: {
			fontFamily: "Barlow Condensed, sans-serif",
			fontWeight: 700,
			fontSize: "1.44em",
			'@media (min-width: 768px)': {
				fontSize: "1.777em",
			},
			'@media (min-width: 1280px)': {
				fontSize: "1.999em",
			}
		},
		h3: {
			fontFamily: "Barlow Condensed, sans-serif",
			fontWeight: 700,
			fontSize: "1.2em",
			color: "#2c3e50",
			'@media (min-width: 768px)': {
				fontSize: "1.333em",
			},
			'@media (min-width: 1280px)': {
				fontSize: "1.414em",
			}
		},
		h4: {
			fontFamily: "Barlow Condensed, sans-serif",
			fontWeight: 700,
			fontSize: "1em",
			textTransform: "uppercase"
		},
		subtitle1: {
			fontFamily: "Barlow Condensed, sans-serif",
			fontSize: "1.2em",
			lineHeight: 1.2,
			'@media (min-width: 768px)': {
				fontSize: "1.414em",
			},
		},
		subtitle2: {
			fontFamily: "Barlow Condensed, sans-serif",
			fontSize: "1em",
			fontWeight: 500,
			color: "#7f8c8d",
			textTransform: "uppercase"
		},
		button: {
			fontFamily: "Barlow, sans-serif",
			fontWeight: 500,
			fontSize: "1em",
			letterSpacing: "0.1em"
		},
		overline: {
			fontFamily: "Barlow Condensed, sans-serif",
			fontWeight: 400,
			fontSize: "1.2em",
		}
	},
	shape: {
		borderRadius: 0
	}
})

function App() {
	return (
		<Fragment>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Navbar />
				<Hero />
				<Home />
				<SiteInfo />
				<Footer />
			</ThemeProvider>
		</Fragment>
	);
}

export default App;
