import ProblemCard from "../components/ProblemCard";

// users.filter(() => somevalue === value)

export const AdminsOnly = () => {
  const users = [
    { id: 1, name: "Alex", isAdmin: true },
    { id: 2, name: "Casey", isAdmin: false },
    { id: 3, name: "Robin", isAdmin: true },
  ];

  return (
    <ProblemCard
      title="Filter 03 — Filter objects by property"
      method="filter"
      question="Render only the admins."
      dataPreview={users}
    >
      {/* [{ id: 1, name: "Alex", isAdmin: true}, { id: 3, name: "Robin", isAdmin: true }] */}
        {users
        .filter((user) => user.isAdmin === true)
        .map((filteredUser) => {
          console.log(filteredUser.id)
          return (
        <div key={filteredUser.id}>
          <div>User name: {filteredUser.name}</div>
          <div>User ID: {filteredUser.id}</div>
        </div>
        )
        })}


    </ProblemCard>
  );
};
