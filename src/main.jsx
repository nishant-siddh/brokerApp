import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import PrivacyPolicyPage from "./components/privacy-Policy-Page.jsx";
import MidContentSection from "./components/midContentSection.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<MidContentSection />} />
      <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode basename="https://broker-app-kappa.vercel.app/privacy-policy">
    <RouterProvider router={router} />
  </React.StrictMode>
);
