import { AssetsContext } from "../contexts/AssetsContext";

const AssetsProvider = ({ children }) => {
  const assets = ["gold", "land", "cash"];

  return (
    <AssetsContext.Provider value={assets}>
      {children}
    </AssetsContext.Provider>
  );
};

export default AssetsProvider;
