import Container from "./components/layout/container/Container";
import ControlPanel from "./components/layout/control-panel/ControlPanel";
import Header from "./components/layout/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col col-md-3">
          <ControlPanel />
        </div>
        <div className="col col-md-9 ">
          <Container/>
        </div>
      </div>

    </div>
  );
}

export default App;
