import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppNavbar } from './Component/AppNavbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { delayForDemo } from "./helper/delayForDemo";

const Home = React.lazy(() => delayForDemo(import("./pages/Home")));
const DogApi = React.lazy(() => delayForDemo(import("./pages/DogApi")));
const JSONPlaceholderApi = React.lazy(() =>
  delayForDemo(import("./pages/JsonPlaceholderApi"))
);

function App() {
  return (
    <Router>
      <div>
        <AppNavbar />

        <Suspense fallback={<div>🌀🌀Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dog" element={<DogApi />} />
            <Route
              path="/jsonPlaceholderApi"
              element={<JSONPlaceholderApi />}
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
