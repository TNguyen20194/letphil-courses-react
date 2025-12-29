// import { fileURLToPath } from "url";
import ProblemCard from "../components/ProblemCard";

export const EmptyState = () => {
  const items = ["Apple", "Banana"];
  const searchTerm = "zzz";
  // const filteredItem = items.filter((item) => item.includes(searchTerm));
  return (
    <ProblemCard
      title="Filter 09 — Empty state handling"
      method="filter"
      question='Filter by searchTerm. If no results, show "No results found".'
      dataPreview={{ items, searchTerm }}
    >
     <ul>
      {items.filter((item) => item.includes(searchTerm)).length === 0 ? (
        <li>No results found</li>
      ) : (items.filter((item) => item.includes(searchTerm))
      .map((filteredItem) => <li key={filteredItem}>{filteredItem}</li>))}
     </ul>
      {/* <ul>
        {filteredItem.length === 0 ? (<li>No results found</li>) : (
        filteredItem.map((item) => <li key={item}>{item}</li>)
      )}
      </ul> */}
    </ProblemCard>
  );
};
