import { isClient } from './isClientServer';

export const GA_TRACKING_ID = `UA-104316136-1`;

export const pageview = (url: string): void => {
  if (isClient()) {
    // @ts-ignore
    window.gtag(`config`, GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }): void => {
  if (isClient()) {
    // @ts-ignore
    window.gtag(`event`, action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
