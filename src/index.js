import React from "react";
import ReactDOM from "react-dom";

//import App from "./App";

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morgen";
  } else if (hours >= 12 && hours < 18) {
    timeOfDay = "eftermiddag";
  } else {
    timeOfDay = "aften";
  }

  const styles = {
    backgroundColor: "green",
    color: "red",
    fontSize: 30
  };

  return <h1 style={styles}>God {timeOfDay}!</h1>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
