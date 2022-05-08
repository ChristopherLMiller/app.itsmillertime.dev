import { createGlobalStyle } from "styled-components";
import { cloudinary } from "../config";

export const defaultTheme = {
  colors: {
    primary: `hsl(0deg 59% 40% / 1)`,
  },
  fonts: {
    main: `Roboto, sans-serif`,
    alt: `Oswald, sans-serif`,
    block: `'Source Code pro', monospace`,
    typewriter: `'Special Elite', monospace`,
    permanentMarker: `'Permanent Marker', serif`,
    montserrat: `'Montserrat', sans-serif`,
  },
};

export const GlobalStyles = createGlobalStyle`
  :root {

    --primary-color: hsl(0deg 59% 40%);

    // Fonts
    --font-main: ${defaultTheme.fonts.main};
    --font-alt: ${defaultTheme.fonts.alt};
    --font-block: ${defaultTheme.fonts.block};
    --font-typewriter: ${defaultTheme.fonts.typewriter};
    --font-marker: ${defaultTheme.fonts.permanentMarker};

    // box shadow
    --box-shadow-elev-0: 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px rgba(0,0,0,0);
    --box-shadow-elev-1: 0px 0px 22px rgba(0,0,0,0.4), 0px 0px 4px rgba(0,0,0,0.25);
    --box-shadow-inset: inset 0 0 0 var(--color-white-100);
    --box-shadow-inset-0: inset 0 0px 0 var(--color-red-dark);
    --box-shadow-inset-1: inset 0 -2px 0 var(--color-red-dark);
    --box-shadow-inset-2: inset 0 -6px 0 var(--color-red-dark);
    --box-shadow-inset-3: inset 0 -10px 0 var(--color-red-dark);

    // blacks
    --color-black-0: hsl(0deg 0% 0% / 0);
    --color-black-20: hsl(0deg 0% 0% / 0.2);
    --color-black-40: hsl(0deg 0% 0% / 0.4);
    --color-black-60: hsl(0deg 0% 0% / 0.6);
    --color-black-80: hsl(0deg 0% 0% / 0.8);
    --color-black-100: hsl(0deg 0% 0% / 1);

    // whites
    --color-white-0: hsl(0deg 0% 100% / 0.0);
    --color-black-20: hsl(0deg 0% 100% / 0.2);
    --color-black-40: hsl(0deg 0% 100% / 0.4);
    --color-white-60: hsl(0deg 0% 100% / 0.6);
    --color-white-80: hsl(0deg 0% 100% / 0.8);
    --color-white-100: hsl(0deg 0% 100% / 1);

    // Margins
    --margin-5: 5rem;
    
    --color-red: var(--primary-color);
    --color-red-80: hsl(0deg 59% 40% / 0.8);
    --color-red-40: hsl(0deg 59% 40% / 0.4);
    --color-red-intermediate: hsl(0deg 59% 30% / 1);
    --color-red-dark: hsl(0deg 59% 20% / 1);
    --color-gold-transparent: hsl(50deg 59% 25% / 0.8);
    --color-gold: hsl(50deg 59% 25% / 1);
    --color-gold-highlight: hsl(50deg 59% 35% / 1);
    --color-grey-intermediate: rgb(107, 107, 107);
    --color-grey-darker: #212121;
    --color-grey-light: #ECECEC;

    --max-width-wide: 1800px;
    --max-width-desktop: 1200px;
    --top-bar-height: 55px;

    --h1-size: clamp(5rem, 5vw, 6.25rem);
    --h2-size: clamp(4rem, 5vw, 5.75rem);
    --h3-size: clamp(3.5rem, 5vw, 5rem);
    --h4-size: clamp(2.8rem, 5vw, 3.5rem);
    --h5-size: clamp(2.25rem, 5vw, 2.8rem);
    --h6-size: clamp(1.75rem, 5vw, 2.25rem);
    --p-size: clamp(1.75rem, 5vw, 2.25rem);

    --linen-paper: url('https://images.itsmillertime.dev/${cloudinary.folder}/assets/linen.jpg');
    --border-width: 2px;
    --border: var(--border-width) solid var(--color-red-intermediate);
  }

  html {
    font-size: 62.5%;
    line-height: 1.5;
    min-height: 100vh;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-main);
    background: var(--color-grey-intermediate) url('https://images.itsmillertime.dev/${cloudinary.folder}/assets/background.jpg') no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: var(--color-grey-dark);
  }

  p,a,code,ul,ol,pre,tr,td,span {
    font-size: var(--p-size);
  }

  h1 {
    font-size: var(--h1-size);
  }
  h2 {
    font-size: var(--h2-size);
  }
  h3 {
    font-size: var(--h3-size);
  }
  h4 {
    font-size: var(--h4-size);
  }
  h5 {
    font-size: var(--h5-size);
  }
  h6 {
    font-size: var(--h6-size);
  }
`;
