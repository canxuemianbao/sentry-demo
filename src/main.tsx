import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from "./App";
import { Severity } from "@sentry/react";

Sentry.init({
  dsn: "https://***@sentry.automizely.org/7",
  integrations: [new BrowserTracing()],
  environment: "development",
  release: "1.0",
  beforeSend: (event, hint) => {
    const error = hint?.originalException as Error;
    console.log({ stack: error });
    if (event.level === Severity.Fatal) {
      return event;
    }
    if (!error?.stack) {
      event.level = Severity.Info;
    } else if (!error?.stack.includes("/sentry_")) {
      return null;
    }
    return event;
  },
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
