// Client side things only, don't put things here that shouldn't be public
export const CLOUDINARY_CLOUD = `christopherleemiller`;
export const CLOUDINARY_FOLDER = `clm-new`;

// SEO defaults
export const SITE_TITLE = `Christopher Lee Miller`;
export const SITE_DEFAULT_IMAGE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/c_scale,w_300/${CLOUDINARY_FOLDER}/assets/logo.png`;
export const SEPARATOR = ` - `;
export const SITE_DEFAULT_IMAGE_FILE = `clm-new/assets/default.jpg`;

export const DISQUS_SHORTNAME = `christopherleemiller-me`;
export const PER_PAGE = 20;
export const MODELS_PER_PAGE = 100;

// AUTH STATE CONSTANTS
export const LOGGED_IN = `LOGGED_IN`;
export const LOGGED_OUT = `LOGGED_OUT`;
export const ANY = `ANY`;

// ROLES
export const ADMIN = `ADMINISTRATOR`;
export const GUEST = `GUEST`;

// CONSTANTS
export const STATUS = {
  FAIL: `fail`,
  SUCCESS: `success`,
  ERROR: `error`,
};

// SendGrid
export const SENDGRID_API = `https://api.sendgrid.com/v3/mail/send`;

export const defaultImage = {
  public_id: "clm-new/assets/default",
  width: 900,
  height: 450,
};
