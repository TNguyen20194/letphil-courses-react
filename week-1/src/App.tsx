import "./App.css";
import { RenderFruitList } from "./mapping/FruitList";
import { RenderNumbers, CapitalizeWords } from "./mapping";
import { RenderFromData } from "./mapping/RenderFromData";
import { FormatPrices } from "./mapping/FormatPrices";
import { EvensOnly } from "./filtering/EvensOnly";
import { LongWordsOnly } from "./filtering/LongWordsOnly";
import { AdminsOnly } from "./filtering/AdminsOnly";
import { CartTotal } from "./reduce/CartTotal";
import { CaseInsensitive } from "./filtering/CaseInsensitive";
import { EmptyState } from "./filtering/EmptyState";

function App() {
  return (
    <>
      <EmptyState />
    </>
  );
}

export default App;
