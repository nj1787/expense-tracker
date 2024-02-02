import Balance from "./components/Balance";
import Header from "./components/Header";
import NewTransaction from "./components/NewTransaction";

function App() {
  return (
    <>
      <Header />
      <div className="grid grid-flow-col grid-rows-1 grid-cols-2 gap-8">
        <div className="mx-5 my-5 px-3">
          <NewTransaction />
        </div>
        <div className="col-start-2 ">
          <Balance />
        </div>
      </div>
    </>
  );
}

export default App;
