import "./App.css";
import Dada from "./components/nested/Dada";
import UserForm from "./components/UserForm";
import AssetsProvider from "./providers/AssetsProvider";
import UseEff from "./useEff/UseEff";
import UseEffDataFetch from "./useEff/UseEffDataFetch";

function App() {
  return (
    <>
      <AssetsProvider>
        <h1>hello module 3</h1>
        {/* <UserForm/> */}

        {/* props drill and context api */}
        {/* <Dada /> */}
      </AssetsProvider>

      {/* <UseEff /> */}
      <UseEffDataFetch />
    </>
  );
}

export default App;
