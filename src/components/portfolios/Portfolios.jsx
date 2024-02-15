import "./portfolios.css";
import Portfolio from "./Portfolio";
import { Data as data } from "../../constants/portfolios/data";

const Portfolios = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container2">
        <h2 className="section__title">Porfolio</h2>
        <h3 className="section__subtitle">
          Découvre l&apos;ensemble de mes réalisations
        </h3>

        <div className="grid2">
          {data.map((portfolio) => (
            <Portfolio key={portfolio.id} data={portfolio} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
