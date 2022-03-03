import React, { useState } from "react";
import { ErrorBoundary, Severity } from "@sentry/react";
import logo from "./logo.svg";
import "./App.css";

const a = () => {
  throw new Error("my component is broken4");
};

const Hello = React.lazy(() => import("./Hello"));

const ErrorMe = () => {
  a();
  return <div>ErrorMe</div>;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Suspense fallback={() => {}}>
      <ErrorBoundary
        beforeCapture={(scope) => {
          scope.setLevel(Severity.Fatal);
        }}
        showDialog
      >
        {/* <ErrorMe></ErrorMe> */}
        <button
          onClick={() => {
            // gaSearch(1, {});
            // a();
            throw new Error("124 18 ");
          }}
        >
          test me
        </button>
        <Hello></Hello>
      </ErrorBoundary>
    </React.Suspense>
  );
}

export default App;
