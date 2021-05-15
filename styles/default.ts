import { createGlobalStyle } from 'styled-components';
import { CLOUDINARY_CLOUD, CLOUDINARY_FOLDER } from '../config';

export const defaultTheme = {
  colors: {
    primary: `hsl(0deg 59% 40% / 1)`,
  },
  fonts: {
    main: `Roboto, sans-serif`,
    alt: `Oswald, sans-serif`,
    block: `'Source Code pro', monospace`,
    typewriter: `'Special Elite', monospace`,
  },
};

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-main: ${defaultTheme.fonts.main};
    --font-alt: ${defaultTheme.fonts.alt};
    --font-block: ${defaultTheme.fonts.block};
    --font-typewriter: ${defaultTheme.fonts.typewriter};

    // box shadow
    --box-shadow-elev-0: 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px rgba(0,0,0,0);
    --box-shadow-elev-1: 0px 0px 22px rgba(0,0,0,0.4), 0px 0px 4px rgba(0,0,0,0.25);
    --box-shadow-inset: inset 0 0 0 var(--color-white-100);
    --box-shadow-inset-0: inset 0 0px 0 var(--color-red-dark);
    --box-shadow-inset-1: inset 0 -6px 0 var(--color-red-dark);
    --box-shadow-inset-2: inset 0 -10px 0 var(--color-red-dark);

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
    
    --color-red: hsl(0deg 59% 40% / 1);
    --color-red-80: hsl(0deg 59% 40% / 0.8);
    --color-red-40: hsl(0deg 59% 40% / 0.4);
    --color-red-intermediate: hsl(0deg 59% 30% / 1);
    --color-red-dark: hsl(0deg 59% 20% / 1);
    --color-gold-transparent: hsl(50deg 59% 25% / 0.8);
    --color-grey-intermediate: rgb(107, 107, 107);
    --color-grey-darker: #212121;
    --color-grey-light: #ECECEC;

    --max-width: 1800px;

    --h1-size: clamp(5rem, 5vw, 6.25rem);
    --h2-size: clamp(4rem, 5vw, 5.75rem);
    --h3-size: clamp(3.5rem, 5vw, 5rem);
    --h4-size: clamp(3rem, 5vw, 4rem);
    --h5-size: clamp(2.5rem, 5vw, 3rem);
    --h6-size: clamp(2rem, 5vw, 2.5rem);
    --p-size: clamp(2rem, 5vw, 2.5rem);
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
    background: var(--color-grey-intermediate) url('https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/${CLOUDINARY_FOLDER}/assets/background.jpg') no-repeat;
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

  main {
  a {
    color: var(--color-grey-darker);
    text-decoration: none;
    box-shadow: var(--box-shadow-inset-0);
    transition: all 0.25s ease;

    :hover {
        box-shadow: var(--box-shadow-inset-1);
        color: var(--color-white-100);
        scale: 1.05;
    }
  }
}
`;
