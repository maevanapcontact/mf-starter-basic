import React from "react";
import "./App.css";

const Header = React.lazy(() => import("remote/Header"));

const App = () => (
  <div>
    <React.Suspense fallback={<header />}>
      <Header />
    </React.Suspense>
    <p>Consumer - App component</p>
  </div>
);

export default App;
