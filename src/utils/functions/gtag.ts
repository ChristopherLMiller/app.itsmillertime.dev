import { isClient } from './isClientServer';

export const GA_TRACKING_ID = `UA-104316136-1`;

export const pageview = (url: string): void => {
  if (isClient()) {
    window.gtag(`config`, GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

interface iEvent {
  action: string;
  category: string;
  label: string;
  value: string;
}

export const event = ({ action, category, label, value }: iEvent): void => {
  if (isClient()) {
    window.gtag(`event`, action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
