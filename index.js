// let a = 100;

function showGreeting() {
  return 'Hello!';
}

showGreeting();


import * as Sentry from '@sentry/browser';

import { Integrations } from '@sentry/tracing';

Sentry.init({

  dsn: 'YOUR_SENTRY_DSN',

  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 1.0,

});