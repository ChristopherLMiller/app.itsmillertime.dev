// Client side things only, don't put things here that shouldn't be public
export const GRAPHQL_ENDPOINT = `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`;
export const CLOUDINARY_URL = `https://res.cloudinary.com`;
export const CLOUDINARY_CLOUD = `christopherleemiller`;
export const CLOUDINARY_FOLDER = `clm-new`;

// SEO defaults
export const SITE_TITLE = `Christopher Lee Miller`;
export const SITE_DEFAULT_IMAGE = `${CLOUDINARY_URL}/${CLOUDINARY_CLOUD}/image/upload/c_scale,w_300/${CLOUDINARY_FOLDER}/assets/logo.png`;
export const SEPARATOR = ` - `;
export const SITE_DEFAULT_IMAGE_FILE = `clm-new/assets/default`;

export const DISQUS_SHORTNAME = `christopherleemiller-me`;
export const PER_PAGE = 20;
export const MODELS_PER_PAGE = 100;

// AUTH STATE CONSTANTS
export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";
export const ANY = "ANY";

// ROLES
export const ADMIN = "ADMINISTRATOR";
export const GUEST = "GUEST";

// CONSTANTS
export const STATUS = {
  FAIL: "FAIL",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};
