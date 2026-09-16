import { use } from "react";
import Baba from "./Baba";
import "./style.css";
import { AssetsContext } from "../../contexts/AssetsContext";

const Dada = () => {
  const astLand = use(AssetsContext);

  return (
    <div className="dada">
      <p>dada</p>
      <span>all assets to here: {astLand}</span>
      <Baba />
    </div>
  );
};

export default Dada;
