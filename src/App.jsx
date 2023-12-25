import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Appointment from "./components/appointment/Appointment";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualifications from "./components/qualifications/Qualifications";
import ScrollUp from "./components/scrollup/ScrollUp";
import Contact from "./components/contact/Contact";
import LastProjects from "./components/lastprojects/LastProjects";
import Work from "./components/work/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <main id="main" className="main" tabIndex={-1}>
        <Home />
        <Appointment className="home__appointment" />
        <About />
        <LastProjects />
        <Skills />
        <Services />
        <Qualifications />
        <Work />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
