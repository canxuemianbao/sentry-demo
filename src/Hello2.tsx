import { useState } from "react";
import { ErrorBoundary, Severity } from "@sentry/react";
import "./App.css";

function Hello2() {
  const [count, setCount] = useState(0);

  return (
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
          throw new Error("qiwoo ");
        }}
      >
        test me2
      </button>
    </ErrorBoundary>
  );
}

export default Hello2;
