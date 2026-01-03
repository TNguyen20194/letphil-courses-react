import ProblemCard from "../components/ProblemCard";

interface User {
  id: number,
  name: string
}

export const LookUp = () => {
  const users = [
    { id: 101, name: "Taylor" },
    { id: 102, name: "Jordan" },
  ];
  return (
    <ProblemCard
      title="Reduce 08 — Build a lookup object"
      method="reduce"
      question="Use reduce() to convert the array into an object: { [id]: name }."
      dataPreview={users}
    >
      <div>
        {JSON.stringify(users.reduce((acc, user) => {
          const userId = user.id;
          acc[userId] = user;

          console.log(acc[userId],acc)
          return acc;
        }, {} as Record<number, User>))
        }
      </div>
    </ProblemCard>
  );
};
