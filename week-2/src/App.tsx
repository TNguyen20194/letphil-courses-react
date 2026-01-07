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
      <StudentCard name="Tony" />
      <StudentCard name="Truong" />
      <StudentCard name="Maria" />
      {/* <Example /> */}
    </>
  );
}

export default App;
