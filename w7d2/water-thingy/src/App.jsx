import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import SuperFancyfication from "./components/SuperFancyfication";

function App() {
  const someFunction = () => console.log("Hello");
  const someValue = 6;
  return (
    <div className="App">
      <Header someValue={someValue} someFunction={() => someFunction(5)} />
      {/* {Header({someValue, someFunction:() => someFunction(5)})} */}
      <SuperFancyfication>
        <h1>Yo!</h1>
      </SuperFancyfication>
      <PlantList />

      {/* <Button />
      <Button></Button> */}
    </div>
  );
}

export default App;
