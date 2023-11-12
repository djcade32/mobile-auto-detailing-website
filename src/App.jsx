import "./App.css";
import Hero from "./sections/hero/Hero";
import Navbar from "./sections/navbar/Navbar";
import Packages from "./sections/packages/Packages";
import Services from "./sections/services/Services";
import Testimonials from "./sections/testimonials/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <Testimonials />
    </div>
  );
}

export default App;
