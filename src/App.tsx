import { useState } from "react";
import "./App.css";
import CustomizedAccordions from "./CustomizedAccordions";

function App() {
  const [heightScreen] = useState(window.innerHeight);

  console.log("heightScreen", heightScreen);

  return (
    <div className="App">
      <CustomizedAccordions heightScreen={heightScreen} />
    </div>
  );
}

export default App;
