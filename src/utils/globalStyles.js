import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /**
     * = GLOBAL VARIABLES
     *
     * ------------------------------------------------------------------------- */
    :root {
        --primary-500: 44, 62, 80;
        --primary-400: 52, 73, 94;
        --secondary-500: 41, 128, 185;
        --secondary-400: 52, 152, 219;
        --tertiary-500: 127, 140, 141;
        --tertiary-400: 189, 195, 199;
        --tertiary-300: 236, 240, 241;

        --fs-800: 2.074em;   /* 33.18px */ 
        --fs-700: 1.728em;   /* 27.65px */ 
        --fs-600: 1.44em;    /* 23.04px */
        --fs-500: 1.2em;     /* 19.20px */
        --fs-400: 1em;       /* 16.00px */
        --fs-300: 0.833em;   /* 13.33px */

        --ff-sans-cond: "Barlow Condensed", sans-serif;
        --ff-sans-normal: "Barlow", sans-serif;
    }

    @media (min-width: 35rem) {
        --fs-800: 3.157em;   /* 50.52px */ 
        --fs-700: 2.369em;   /* 37.90px */ 
        --fs-600: 1.777em;   /* 28.43px */
        --fs-500: 1.333em;   /* 21.33px */

        --fs-300: 0.75em;    /* 12px */
    }

    @media (min-width: 45rem) {
        --fs-800: 3.998em;   /* 63.96px */ 
        --fs-700: 2.827em;   /* 45.23px */ 
        --fs-600: 1.999em;   /* 31.99px */
        --fs-500: 1.414em;   /* 22.62px */

        --fs-300: 0.707em;   /* 11.32px */
    }

    /**
     * = RESET
     *
     * ------------------------------------------------------------------------- */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
    
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }


    /**
     * = BASE
     *
     * ------------------------------------------------------------------------- */

    html {
        font-size: 100%;
    }

    body {
        font-family: var(--ff-sans-normal);
        background-color: rgb(var(--tertiary-300));
        color: rgb(var(--primary-500));
        line-height: 1.5;
    }

    a:link,
    a:visited,
    a:active {
        color: var(--secondary-500);
        text-decoration: none;
    }

    a:hover {   
        text-decoration: underline;
        color: var(--secondary-400);
    }
`;

export default GlobalStyle;