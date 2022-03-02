import logo from "./logo.svg";
import "./App.css";
import { Button, FlexContentArea, HeroPhoto } from "./lib";

function App() {
  return (
    <div class="App">
      <h4>UTexas Components</h4>
      <Button name="example" value="Example Button" label="Example Button"/>
      <FlexContentArea />
      <HeroPhoto />
    </div>
  );
}

export default App;
