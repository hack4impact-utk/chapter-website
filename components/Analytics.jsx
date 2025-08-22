import { initialize, pageview, event } from 'react-ga';

const initializeGA = () => {
  initialize('UA-144770649-1');
};

const logPage = () => {
  pageview(window.location.pathname + window.location.search);
};

const logEvent = (name, action) => {
  event({
    category: name,
    action: action,
  });
};

export { initializeGA, logPage, logEvent };
