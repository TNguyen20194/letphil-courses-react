import ProblemCard from "../components/ProblemCard";

export const RenderObjects = () => {
  const users = [{ name: "Alice" }, { name: "Bob" }];
  return (
    <ProblemCard
      title="Map 04 — Render objects"
      method="map"
      question="Render each user's name in a <p>."
      dataPreview={users}
    >
      <div>
        {users.map((user) => <p key={user.name}>{user.name}</p>)}
      </div>
    </ProblemCard>
  );
};
