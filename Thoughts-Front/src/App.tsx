import "./App.css";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import HeroSection from "./Components/Hero";
import StoredThoughts from "./Components/StoredThoughts";
import CardThoughts from "./Components/CardThought";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />

      <section className="flex items-center m-10">
        <div>
          <StoredThoughts />
        </div>
        <div>
          <StoredThoughts />
        </div>
        <div>
          <StoredThoughts />
        </div>
      </section>
      <section className="flex justify-items-center flex-direction-row flex-wrap m-10">
        <CardThoughts />
      </section>
      <Footer />
    </div>
  );
}

export default App;
