import React from "react";
import { Mounting } from "./components/useEffect/Mounting";
import { Example } from "./components/useEffect/Example";
import { Api } from "./components/useEffect/Api";

import "./App.css";
import { Example, StudentCard } from "./components";
import { Counter } from "./components/Counter";
import { ToggleTheme } from "./components/ToggleTheme";
import { Form } from "./components/Form";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Cart />
      {/* <StudentCard name="Tony" />
      <StudentCard name="Truong" />
      <StudentCard name="Maria" /> */}
      {/* <ToggleTheme/> */}
      {/* <Form defaultName="Christian"/> */}
      {/* <Example /> */}
    </>
  );
}

export default App;
