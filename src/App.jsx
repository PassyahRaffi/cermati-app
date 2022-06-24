import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./input.css";
import Home from "./pages/Home";
import Alert from "./components/alerts/AlertCookie";

export default function App() {
  return (
    <>
      <Alert>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Alert>
    </>
  );
}
