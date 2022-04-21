export const cloudinary = {
  cloudName: "christopherleemiller",
  folder: "clm-new",
};

export const SEO = {
  title: "Christopher Lee Miller",
  separator: " - ",
};

export const pageSettings = {
  forgotPassword: {
    title: `Forgot Password?`,
    description: `How could you forget your password?`,
  },
  login: {
    title: `Login`,
    description: `Access to your account`,
  },
  myAccount: {
    title: `My Account`,
    description: `Manage your account`,
  },
  resetPassword: {
    title: `Reset Password`,
    description: `Recover your account`,
  },
  blog: {
    title: `From my Desk`,
    description: `Archives concerning all matters web development and beyond`,
  },
  digitalGarden: {
    title: `Digital Garden`,
    description: `A collection of digital media`,
  },
  gallery: {
    title: `Gallery`,
    description: `A visual of all the things me!`,
  },
  models: {
    title: `Models`,
    description: `Airplanes, Tanks, Cars, its all here`,
  },
  home: {
    title: `Home`,
    description: `Programmer.  Amateur Designer.  Model Enthsiast.`,
  },
};

export const DISQUS_SHORTNAME = `christopherleemiller-me`;

// ROLES
export const roles = {
  admin: `ADMINISTRATOR`,
  guest: `GUEST`,
};

// CONSTANTS
export const status = {
  FAIL: `fail`,
  SUCCESS: `success`,
  ERROR: `error`,
};

// AUTH STATE
export const AUTH_STATE = {
  ANY: `ANY`,
  LOGGED_IN: `LOGGED_IN`,
  LOGGED_OUT: `LOGGED_OUT`,
  NONE: `NONE`,
};

// SendGrid
export const sendgrid = {
  endpoint: `https://api.sendgrid.com/v3/mail/send`,
};

export const defaultImage = {
  path: `https://res.cloudinary.com/christopherleemiller/image/upload/c_scale,q_auto,f_auto/clm-new/assets/default`,
  public_id: "clm-new/assets/default",
  width: 900,
  height: 450,
  altText: "Default site image",
  blurred: `data:image/jpeg;base64,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`,
};

export const CloudinaryBaseUrl =
  "https://res.cloudinary.com/christopherleemiller/image/upload";
export const ApiBaseUrl = "http://localhost:3000";
export const ApiEndpoint = "https://api.itsmillertime.dev";

// SRL defaults
export const lightboxOptions = {
  settings: {
    overlayColor: "var(--color-black-80)",
  },
  buttons: {
    showDownloadButton: false,
  },
  caption: {
    captionFontFamily: "var(--font-alt)",
    captionFontSize: "var(--h4-size)",
    captionContainerPadding: "1rem",
  },
  thumbnails: {
    thumbnailsPosition: "top",
  },
};
