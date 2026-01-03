import ProblemCard from "../components/ProblemCard";

export const SumNumbers = () => {
  const nums = [1, 2, 3, 4];

  return (
    <ProblemCard
      title="Reduce 01 — Sum numbers"
      method="reduce"
      question="Use reduce() to compute the sum, then render it."
      dataPreview={nums}
    >
      <div>
        <strong>Total is:</strong> {nums.reduce((acc, num) => acc += num, 0)}
      </div>
    </ProblemCard>
  );
};
