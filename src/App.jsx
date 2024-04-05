import Navigation from "./components/navbar";
import "./App.css";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, BrowserRouter as Router, Routes } from 'react-router-dom'
import MidContentSection from "./components/midContentSection";
import PrivacyPolicyPage from "./components/privacy-Policy-Page";

function App() {
  return (
    <>
      <Router basename="/bapp/">
        <Navigation />
        <Routes path="/" element={<App />}>
          <Route path="" element={<MidContentSection />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
        <Footer />
      </Router>
      {/* <Outlet /> */}
    </>
  );
}

export default App;
