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
import { MultipleConditions } from "./filtering/MultipleConditions";
import { PreFilter } from "./filtering/PreFilter";
import { PriceGreaterThan20 } from "./filtering/PriceGreaterThan20";
import { SearchSimulation } from "./filtering/SearchSimulation";
import { ConditionalRender } from "./mapping/ConditionalRender";
import { DoubleNumbers } from "./mapping/DoubleNumbers";

function App() {
  return (
    <>
      {/* <SearchSimulation searchTerm="re"/>
      <SearchSimulation searchTerm="c"/> */}
      <DoubleNumbers />
    </>
  );
}

export default App;
