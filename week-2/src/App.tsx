import React from "react";
import { Mounting } from "./components/useEffect/Mounting";
import { Example } from "./components/useEffect/Example";
import { Api } from "./components/useEffect/Api";
import { ApiCopy } from "./components/useEffect/ApiCopy";

import "./App.css";
import { ToggleTheme } from "./components/ToggleTheme";
import { Form } from "./components/Form";
import { Cart } from "./components/Cart/Cart";
import { DocumentTitle } from "./components/useEffect/DocumentTitle";

function App() {
  return (
    <>
      <ApiCopy/>
    {/* <DocumentTitle/> */}
      {/* <Cart /> */}
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
