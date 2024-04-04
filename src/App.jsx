import Navigation from "./components/navbar";
import HeroSection from "./components/heroSection";
import "./App.css";
import AppFeatures from "./components/AppFeatures";
import Video from "./components/video";
import Footer from "./components/footer";
import ContactForm from "./components/contactForm";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <>
      <div>
        <Navigation />
        <HeroSection />
        <AppFeatures />
        <Testimonials />
        <Video />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
