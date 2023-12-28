import "./home.css";
import Social from "./Social";
import Data from "./Data";
import logo from "../../assets/logo.png";
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__logo">
            <img src={logo} width="250px" alt="logo drondiodev" />
          </div>
          <Social />
          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
