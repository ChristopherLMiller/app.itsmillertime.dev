import { createGlobalStyle } from "styled-components";
import { CLOUDINARY_URL, CLOUDINARY_CLOUD, CLOUDINARY_FOLDER } from "../config";

export const defaultTheme = {
  colors: {
    primary: "#0070F3",
  },
  fonts: {
    main: "Roboto, sans-serif",
    alt: "Oswald, sans-serif",
    block: "monospace",
  },
};

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-main: ${defaultTheme.fonts.main};
    --font-alt: ${defaultTheme.fonts.alt};
    --font-block: ${defaultTheme.fonts.block};

    // box shadow
    --box-shadow-elev-0: 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px rgba(0,0,0,0);
    --box-shadow-elev-1: 0px 0px 22px rgba(0,0,0,0.4), 0px 0px 4px rgba(0,0,0,0.25);
    
    --color-black: hsl(0deg 0% 0% / 1);
    --color-white: hsl(0deg 0% 100% / 1);
    --color-white-transparent: hsl(0deg 0% 100% / 0.0);
    --color-red: hsl(0deg 59% 40% / 1);
    --color-red-transparent: hsl(0deg 59% 40% / 0.8);
    --color-red-intermediate: hsl(0deg 59% 30% / 1);
    --color-red-dark: hsl(0deg 59% 20% / 1);
    --color-gold-transparent: hsl(50deg 59% 25% / 0.8);
    --color-grey-intermediate: rgb(107, 107, 107);
    --color-grey-darker: #212121;
    --color-grey-light: #ECECEC;

    --max-width: 1600px;

    --modular1: 1.2;
    --modular2: 1.35;

    --startwidth: 30;
    --endwidth:105;

    //need these numbers for h6 and p without units for calc.
    --base-min: 1.25;
    --base-max:1.45;

    
    --h1-responsive: calc(var(--h1-size) + ((var(--modular2) * var(--modular2) * var(--modular2) * var(--modular2) * var(--modular2)) - (var(--modular1) * var(--modular1) * var(--modular1) * var(--modular1) * var(--modular1))) * ((100vw - (var(--startwidth) * 1em)) / (var(--endwidth) - var(--startwidth))));
    --h2-responsive:calc(var(--h2-size) + ((var(--modular2) * var(--modular2) * var(--modular2) * var(--modular2)) - (var(--modular1) * var(--modular1) * var(--modular1) * var(--modular1))) * ((100vw - (var(--startwidth) * 1em)) / (var(--endwidth) - var(--startwidth))));
    --h3-responsive:calc(var(--h3-size) + ((var(--modular2) * var(--modular2) * var(--modular2)) - (var(--modular1) * var(--modular1) * var(--modular1))) * ((100vw - (var(--startwidth) * 1em)) / (var(--endwidth) - var(--startwidth))));
    --h4-responsive:calc(var(--h4-size) + ((var(--modular2) * var(--modular2)) - (var(--modular1) * var(--modular1))) * ((100vw - (var(--startwidth) * 1em)) / (var(--endwidth) - var(--startwidth))));    
    --h5-responsive:calc(var(--h5-size) + ((var(--modular2)) - (var(--modular1))) * ((100vw - (var(--startwidth) * 1em)) / (var(--endwidth) - var(--startwidth))));
    --h6-responsive:calc(var(--h6-size) + ((var(--base-max)) - (var(--base-min))) * ((100vw - (var(--startwidth) * 1em)) / (var(--endwidth) - var(--startwidth))));
    --p-responsive:calc(var(--p-size) + ((var(--base-max)) - (var(--base-min))) * ((100vw - (var(--startwidth) * 1em)) / (var(--endwidth) - var(--startwidth))));

    //Initially I wanted to use an expression like this, and just change the font-min and font-max for each header:
    //--fontsize-responsive:calc(var(--font-min) * 1rem + ((var(--font-max)) - (var(--font-min))) * ((100vw - (var(--startwidth) * 1rem)) / (var(--endwidth) - var(--startwidth))));
    //But I needed a unit to use calc, and font-min and font-max could not be calculated without a unit. For the above to work, they needed to be unitless. Perhaps there is a way around this?

    --h1-size: calc(var(--modular1) * var(--modular1) * var(--modular1) * var(--modular1) * var(--modular1) * 1rem);

    --h2-size: calc(var(--modular1) * var(--modular1) * var(--modular1) * var(--modular1) * 1rem);

    --h3-size: calc(var(--modular1) * var(--modular1) * var(--modular1) * 1rem);

    --h4-size: calc(var(--modular1) * var(--modular1) * 1rem);

    --h5-size: calc(var(--modular1) * 1rem);

    --h6-size:calc(var(--base-min) * 1rem);

    --p-size:calc(var(--base-min) * 2rem);
  }

  html {
    font-size: 10px;
    min-height: 100vh;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-main);
    background: url('${CLOUDINARY_URL}/${CLOUDINARY_CLOUD}/image/upload/${CLOUDINARY_FOLDER}/assets/background');
    background-attachment: fixed;
  }

  p,a,code,ul,ol,pre {
    font-size: var(--p-responsive);
  }

  h1 {
    font-size: var(--h1-responsive);
  }
  h2 {
    font-size: var(--h2-responsive);
  }
  h3 {
    font-size: var(--h3-responsive);
  }
  h4 {
    font-size: var(--h4-responsive);
  }
  h5 {
    font-size: var(--h5-responsive);
  }
  h6 {
    font-size: var(--h6-responsive);
  }

  a {
    color: var(--color-grey-darker);
    text-decoration: none;
    box-shadow: inset 0 -6px 0 var(--color-red-dark);
    transition: all 0.25s ease;

    :hover {
        box-shadow: inset 0 -30px 0 var(--color-red-dark);
        color: var(--color-white);
    }
  }

/* cyrillic-ext */
@font-face {
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/oswald/v31/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUtiZTaR.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/oswald/v31/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUJiZTaR.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/oswald/v31/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUliZTaR.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/oswald/v31/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUhiZTaR.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/oswald/v31/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUZiZQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin */
@font-face {
  font-family: 'Permanent Marker';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Permanent Marker Regular'), local('PermanentMarker-Regular'), url(https://fonts.gstatic.com/s/permanentmarker/v9/Fh4uPib9Iyv2ucM6pGQMWimMp004La2Cfw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: local('Roboto Thin'), local('Roboto-Thin'), url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1MmgVxFIzIFKw.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: local('Roboto Thin'), local('Roboto-Thin'), url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1MmgVxMIzIFKw.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: local('Roboto Thin'), local('Roboto-Thin'), url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1MmgVxEIzIFKw.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: local('Roboto Thin'), local('Roboto-Thin'), url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1MmgVxLIzIFKw.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: local('Roboto Thin'), local('Roboto-Thin'), url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1MmgVxHIzIFKw.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: local('Roboto Thin'), local('Roboto-Thin'), url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1MmgVxGIzIFKw.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: local('Roboto Thin'), local('Roboto-Thin'), url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1MmgVxIIzI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fCBc4EsA.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fCxc4EsA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`;
