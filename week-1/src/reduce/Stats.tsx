import ProblemCard from '../components/ProblemCard';

export const Stats = () => {
  const nums = [4, 9, 2, 10, 7];

  const stats = nums.reduce((acc, num) => {
     console.log(acc, num)
     acc.total += num;
     acc.max = Math.max(acc.max, num);
     acc.average = acc.total / nums.length;

     return acc;

  }, {total: 0, max: nums[0], average: 0});

  return (
    <ProblemCard
      title="Reduce 10 — Reduce + render summary stats"
      method="reduce"
      question="Use reduce() to compute: total, max, and average. Then render them."
      dataPreview={nums}
    >
      <div>
        {/* TODO:
            - total via reduce
            - max via reduce
            - average = total / nums.length
        */}
        <div>Total: {stats.total}</div>
        <div>Max: {stats.max}</div>
        <div>Average: {stats.average}</div>
      </div>
    </ProblemCard>
  );
}
