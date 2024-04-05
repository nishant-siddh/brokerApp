import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, BrowserRouter as Router, Routes } from 'react-router-dom'
import PrivacyPolicyPage from "./components/privacy-Policy-Page.jsx";
import MidContentSection from "./components/midContentSection.jsx";

// const router = createBrowserRouter({
//   basename: '/brokerapp', // Add basename here
//   routes: createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="" element={<MidContentSection />} />
//       <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
//     </Route>
//   )
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);