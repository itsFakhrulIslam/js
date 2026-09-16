import { use } from "react";
import MySon from "./MySon";
import "./style.css";
import { AssetsContext } from "../../contexts/AssetsContext";

const Me = () => {
  const astLand = use(AssetsContext);
  let ast = astLand[2];
  return (
    <div className="me">
      <p>me / myself</p>
      <span>get to the assets: {ast}</span>
      <MySon />
    </div>
  );
};

export default Me;
