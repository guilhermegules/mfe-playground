import React from "react";

import ErrorBoundary from "./components/ErrorBoundary";

const RemoteApp = React.lazy(() => import("Remote/App"));
const RemoteButton = React.lazy(() => import("Remote/Button"));

const RemoteWrapper = ({ children }) => {
  return (
    <div style={{ border: "1px solid red", background: "white" }}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ background: "rgba(200, 200, 200, 0.8)" }}>
      <h1>I'm the host!</h1>
      <h2>Remote App:</h2>
      <RemoteWrapper>
        <RemoteApp />
      </RemoteWrapper>
      <h2>Remote Button:</h2>
      <RemoteWrapper>
        <RemoteButton text="Remote button" />
      </RemoteWrapper>
      <br />
      <a href="http://localhost:4000">Link to Remote App</a>
    </div>
  );
};

export default App;
