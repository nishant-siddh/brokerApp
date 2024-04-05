import Navigation from "./components/navbar";
import "./App.css";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import PrivacyPolicyPage from "./components/privacy-Policy-Page";

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
