import logo from "./logo.svg";
import { Button, FlexContentArea, HeroPhoto } from "./lib";

function App() {
  return (
    <div class="container">
      <h4 class="ut-headline">UTexas Components</h4>
      <Button classes="ut-btn" name="example" label="Example Button"/>
      <Button classes="ut-btn ut-btn--secondary font-white" name="example" label="Example Secondary Button"/>
      <FlexContentArea />
      <HeroPhoto />
    </div>
  );
}

export default App;
