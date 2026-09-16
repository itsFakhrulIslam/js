import { use } from "react";
import "./style.css";
import { AssetsContext } from "../../contexts/AssetsContext";

const MySon = () => {
  const astLand = use(AssetsContext);
  let ast = astLand[1];

  return (
    <div className="son">
      <p>my son</p>
      <span>get to the assets: {ast}</span>
    </div>
  );
};

export default MySon;
