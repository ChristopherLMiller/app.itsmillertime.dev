import { isClient } from "./isClientServer";
export const GA_TRACKING_ID = "104316136";

export const pageview = (url) => {
  if (isClient()) {
    window?.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }) => {
  if (isClient()) {
    window?.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
