import { use } from "react";
import Me from "./Me";
import "./style.css";
import { AssetsContext } from "../../contexts/AssetsContext";

const Baba = () => {
  const astLand = use(AssetsContext);
  let ast = astLand[0];
  return (
    <div className="baba">
      <p>baba</p>
      <span>get to the assets: {ast}</span>
      <Me />
    </div>
  );
};

export default Baba;
