import ProblemCard from "../components/ProblemCard";

interface SearchSimulationProps {
  searchTerm: string
};

/*
  props = {
  searchTerm: "re" 
  }'

  props.searchTerm = "re";
  */

export const SearchSimulation = ({ searchTerm } : SearchSimulationProps) => {
  const items = ["React", "JavaScript", "TypeScript", "Node", "CSS"];

  const filteredItems = items.filter((item) => item.toLowerCase().includes((searchTerm || "").toLowerCase()));

  return (
    <ProblemCard
      title="Filter 08 — Search simulation"
      method="filter"
      question="Filter items that include the searchTerm prop (case-insensitive), then render them."
      dataPreview={{ items, searchTerm: searchTerm }}
    >
      <ul>
        {filteredItems.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </ProblemCard>
  );
};
