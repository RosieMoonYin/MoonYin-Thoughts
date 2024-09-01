import "./App.css";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import HeroSection from "./Components/Hero";
import StoredThoughts from "./Components/StoredThoughts";
import CardThoughts from "./Components/CardThought";
import CreateInput from "./Components/CreateInput";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />

      <section>
        <div>
          <StoredThoughts />
        </div>
      </section>
      <section className="flex justify-items-center flex-direction-row flex-wrap m-10">
        <CardThoughts />
      </section>
      <section className="flex align-center justify-center flex-direction-row flex-wrap m-10">
        <CreateInput />
      </section>

      <Footer />
    </div>
  );
}

export default App;
